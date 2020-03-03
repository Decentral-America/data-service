import { of as taskOf } from 'folktale/concurrency/task';
import { of as just, Maybe } from 'folktale/maybe';
import { Ok as ok } from 'folktale/result';
import { identity } from 'ramda';
import { decode as base58Decode } from 'bs58';

import { isEmpty } from '../../../utils/fp/maybeOps';

import { CommonRepoDependencies } from '../..';

// resolver creation and presets
import {
  get as createGetResolver,
  mget as createMgetResolver,
  createResolver,
} from '../../_common/createResolver';

import {
  AssetsCache,
  AssetsRepo,
  AssetsGetRequest,
  AssetsMgetRequest,
  AssetsSearchRequest,
} from './types';
export { create as createCache } from './cache';
import { toDbError, AppError } from '../../../errorHandling';
import { SearchedItems } from '../../../types';
import { waves } from './grpc/grpc';
import { AssetsGrpcService } from './impl';
import { wavesAssetInfo } from './constants';

export default ({
  emitEvent,
  cache,
  assetsGrpcService,
}: CommonRepoDependencies & {
  cache: AssetsCache;
} & {
  assetsGrpcService: AssetsGrpcService;
}): AssetsRepo => {
  const REPO_NAME = {
    GET: 'assets.get',
    MGET: 'assets.mget',
    SEARCH: 'assets.search',
  };

  const taskMapRejectedHandler = <E extends AppError>(
    repo: string,
    request: AssetsGetRequest | AssetsMgetRequest | AssetsSearchRequest
  ) => (e: E) => {
    return toDbError({ repo, request }, e.error);
  };

  return {
    get: createGetResolver<
      AssetsGetRequest,
      AssetsGetRequest,
      waves.data.assets.AssetInfo,
      waves.data.assets.AssetInfo
    >({
      transformInput: ok,
      getData: request =>
        cache.get(request).matchWith({
          Just: ({ value }) => taskOf(just(value)),
          Nothing: () => {
            if (request === 'WAVES') {
              return assetsGrpcService
                .getWaves(waves.data.assets.GetWavesRequest.create())
                .map(res =>
                  res.map(wavesInfoData => {
                    const assetInfo = waves.data.assets.AssetInfo.create({
                      ...wavesAssetInfo.toJSON(),
                      ...wavesInfoData,
                    });
                    cache.set(request, assetInfo);
                    return assetInfo;
                  })
                )
                .mapRejected(taskMapRejectedHandler(REPO_NAME['GET'], request));
            } else {
              return assetsGrpcService
                .getAsset({
                  assetId: base58Decode(request),
                })
                .map(res =>
                  res.map(assetInfoData => {
                    const assetInfo = waves.data.assets.AssetInfo.create(
                      assetInfoData
                    );
                    cache.set(request, assetInfo);
                    return assetInfo;
                  })
                )
                .mapRejected(taskMapRejectedHandler(REPO_NAME['GET'], request));
            }
          },
        }),
      validateResult: ok,
      transformResult: identity,
      emitEvent,
    }),

    mget: createMgetResolver<
      AssetsMgetRequest,
      AssetsMgetRequest,
      waves.data.assets.AssetInfo,
      waves.data.assets.AssetInfo
    >({
      transformInput: ok,
      getData: request => {
        let results: Array<Maybe<
          waves.data.assets.AssetInfo
        >> = request.map(x => cache.get(x));

        const notCachedIndexes = results.reduce<number[]>((acc, x, i) => {
          if (isEmpty(x)) acc.push(i);
          return acc;
        }, []);
        const notCachedAssetIds = notCachedIndexes.map(i => request[i]);

        const getBatchT = assetsGrpcService.getAssetsBatch(
          waves.data.assets.GetAssetsBatchRequest.create({
            assetIds: notCachedAssetIds.map(assetId => base58Decode(assetId)),
          })
        );

        return taskOf<AppError, void>(undefined)
          .chain<AppError, Maybe<waves.data.assets.IAssetInfo>[]>(() =>
            notCachedIndexes.length > 0 ? getBatchT : taskOf([])
          )
          .map(assetInfos => {
            assetInfos.forEach((maybeAssetInfo, index) => {
              return maybeAssetInfo.map(assetInfoData => {
                const assetInfo = waves.data.assets.AssetInfo.create(
                  assetInfoData
                );
                results[notCachedIndexes[index]] = just(assetInfo);
                cache.set(notCachedAssetIds[index], assetInfo);
              });
            });
            return results;
          })
          .mapRejected(taskMapRejectedHandler(REPO_NAME['MGET'], request));
      },
      validateResult: ok,
      transformResult: identity,
      emitEvent,
    }),

    search: request =>
      createResolver<
        AssetsSearchRequest,
        AssetsSearchRequest,
        SearchedItems<waves.data.assets.AssetInfo>,
        SearchedItems<waves.data.assets.AssetInfo>
      >(
        ok,
        request => {
          const query = request.search || request.ticker;
          if (typeof query === 'undefined') {
            return taskOf({ isLastPage: true, items: [] });
          }
          const pagination = waves.data.Pagination.create({
            limit: request.limit,
            after: request.after ? base58Decode(request.after) : undefined,
          });
          return assetsGrpcService
            .searchAsset(
              waves.data.assets.SearchAssetRequest.create({
                query: query,
                pagination,
              })
            )
            .map(items => ({
              isLastPage: items.isLastPage,
              lastCursor: items.lastCursor,
              items: items.items.map(assetInfoData =>
                waves.data.assets.AssetInfo.create(assetInfoData)
              ),
            }))
            .mapRejected(taskMapRejectedHandler(REPO_NAME['SEARCH'], request));
        },
        ok,
        identity,
        emitEvent,
        request
      ),
  };
};
