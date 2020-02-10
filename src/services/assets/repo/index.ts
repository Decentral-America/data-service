// import { propEq } from 'ramda';
import { of as taskOf, fromPromised, task } from 'folktale/concurrency/task';
import { of as just, Maybe, fromNullable } from 'folktale/maybe';
import { Ok as ok } from 'folktale/result';
import { Asset } from '@waves/data-entities';

// import { withStatementTimeout } from '../../../db/driver/utils';
import {
  // forEach,
  isEmpty,
} from '../../../utils/fp/maybeOps';

import { CommonRepoDependencies } from '../..';

// resolver creation and presets
import {
  get as createGetResolver,
  mget as createMgetResolver,
  search as createSearchResolver,
} from '../../_common/createResolver';
// import { getData as mgetByIdsPg } from '../../_common/presets/pg/mgetByIds/pg';
// import { validateResult } from '../../_common/presets/validation';
import { transformResults as transformMgetResults } from '../../_common/presets/pg/mgetByIds/transformResult';
// import { searchPreset } from '../../_common/presets/pg/search';

// validation
// import { result as resultSchema } from './schema';

import { transformDbResponse } from './transformAsset';
// import * as sql from './sql';
import {
  AssetsCache,
  // AssetDbResponse,
  AssetsRepo,
  AssetsGetRequest,
  AssetsMgetRequest,
  AssetsSearchRequest,
} from './types';
// import { serialize, deserialize, Cursor } from './cursor';
export { create as createCache } from './cache';
import { decode as base58Decode, encode as base58Encode } from 'bs58';
import { waves } from './grpc';
import { toDbError } from '../../../errorHandling';

export default ({
  drivers: {
    // pg
  },
  emitEvent,
  cache,
  // timeouts,
  assetsGrpcService,
}: CommonRepoDependencies & {
  cache: AssetsCache;
} & {
  assetsGrpcService: {
    Get: waves.data.assets.Assets['get'];
    GetBatch: waves.data.assets.Assets['getBatch'];
    Search: waves.data.assets.Assets;
  };
}): AssetsRepo => {
  const SERVICE_NAME = {
    GET: 'assets.get',
    MGET: 'assets.mget',
    SEARCH: 'assets.search',
  };

  return {
    get: createGetResolver<
      AssetsGetRequest,
      AssetsGetRequest,
      waves.data.assets.AssetInfo,
      Asset
    >({
      transformInput: ok,
      getData: request =>
        cache.get(request).matchWith({
          Just: ({ value }) => taskOf(just(value)),
          Nothing: () =>
            fromPromised<Error, waves.data.assets.GetAssetResponse>(() =>
              assetsGrpcService.Get.get(
                waves.data.assets.GetAssetRequest.create({
                  assetId: base58Decode(request),
                })
              )
            )()
              .map(res =>
                fromNullable(res.assetInfo).map(assetInfoData => {
                  const assetInfo = new waves.data.assets.AssetInfo(
                    assetInfoData
                  );
                  cache.set(request, assetInfo);
                  return assetInfo;
                })
              )
              .mapRejected(e =>
                toDbError({ service: SERVICE_NAME['GET'], request }, e)
              ),
        }),
      validateResult: ok,
      transformResult: res => res.map(transformDbResponse),
      emitEvent,
    }),

    mget: createMgetResolver<
      AssetsMgetRequest,
      AssetsMgetRequest,
      waves.data.assets.AssetInfo,
      Asset
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

        const getBatchT = fromPromised<
          Error,
          waves.data.assets.GetAssetsBatchResponse
        >(() =>
          assetsGrpcService.GetBatch.getBatch(
            waves.data.assets.GetAssetsBatchRequest.create({
              assetIds: notCachedAssetIds.map(assetId => base58Decode(assetId)),
            })
          )
        )().map(res => res.assetInfo);

        return taskOf<Error, void>(undefined)
          .chain<Error, waves.data.assets.IAssetInfoIfExists[]>(() =>
            notCachedIndexes.length > 0 ? getBatchT : taskOf([])
          )
          .map(assetInfos => {
            assetInfos.forEach((maybeAssetInfo, index) => {
              const m = fromNullable(maybeAssetInfo.assetInfo);
              return m.map(assetInfoData => {
                const assetInfo = waves.data.assets.AssetInfo.create(
                  assetInfoData
                );
                results[notCachedIndexes[index]] = just(assetInfo);
                cache.set(notCachedAssetIds[index], assetInfo);
              });
            });
            return results;
          })
          .mapRejected(e =>
            toDbError({ service: SERVICE_NAME['GET'], request }, e)
          );
      },
      validateResult: ok,
      transformResult: transformMgetResults(transformDbResponse),
      emitEvent,
    }),

    search: createSearchResolver<
      AssetsSearchRequest,
      AssetsSearchRequest,
      waves.data.assets.AssetInfo,
      Asset
    >({
      transformInput: ok,
      getData: request => {
        const query = request.search || request.ticker;
        if (typeof query === 'undefined') {
          return taskOf([]);
        }
        const response: waves.data.assets.AssetInfo[] = [];
        assetsGrpcService.search(
          waves.data.assets.SearchAssetRequest.create({
            query: query,
          })
        );

        assetsGrpcService.on('data', data => {
          response.push(data);
          console.log('data', response);
        });

        return task(() => {
          assetsGrpcService.on('end', () => {
            console.log('done');
            console.log(response);
          });
          response.forEach((assetInfoData, index) => {
            const assetInfo = waves.data.assets.AssetInfo.create(assetInfoData);
            cache.set(
              base58Encode(Buffer.from(assetInfoData.assetId)),
              assetInfo
            );
          });

          return response;
        });
      },
      validateResult: ok,
      transformResult: transformDbResponse as any,
      emitEvent,
    }),
  };
};
