import { fromNullable, Maybe } from 'folktale/maybe';
import { fromPromised, task, Task } from 'folktale/concurrency/task';
import { makeGenericClientConstructor, credentials, Metadata } from 'grpc';
import { RPCImpl } from 'protobufjs';
import { last, init, isNil } from 'ramda';
import { encode as base58Encode } from 'bs58';
import { waves } from './grpc/grpc';
import { DbError, AppError } from '../../../errorHandling';
import { GrpcConfig } from '../../../loadConfig';
import { SearchedItems } from '../../../types';

type GetAsset = {
  getAsset: (
    req: waves.data.assets.IGetAssetRequest
  ) => Task<DbError, Maybe<waves.data.assets.IAssetInfo>>;
};

type GetWaves = {
  getWaves: (
    req: waves.data.assets.IGetWavesRequest
  ) => Task<DbError, Maybe<waves.data.assets.IWavesInfo>>;
};

type GetAssetsBatch = {
  getAssetsBatch: (
    req: waves.data.assets.IGetAssetsBatchRequest
  ) => Task<DbError, Maybe<waves.data.assets.IAssetInfo>[]>;
};

type SearchAsset = {
  searchAsset: (
    req: waves.data.assets.ISearchAssetRequest
  ) => Task<DbError, SearchedItems<waves.data.assets.IAssetInfo>>;
};

export type AssetsGrpcService = GetAsset &
  GetWaves &
  GetAssetsBatch &
  SearchAsset;

export default (grpcServiceConfig: GrpcConfig): AssetsGrpcService => {
  const Client = makeGenericClientConstructor({}, 'Assets', {});

  const client = new Client(
    grpcServiceConfig.serverUrl,
    credentials.createInsecure()
  );

  const meta = new Metadata();
  meta.add('x-grpc-network', grpcServiceConfig.network);

  const unaryRpcImpl: RPCImpl = (method, req, cb) =>
    client.makeUnaryRequest(
      `/waves.data.assets.Assets/${method.name}`,
      req => Buffer.from(req),
      res => res,
      req,
      meta,
      {},
      cb
    );

  const unaryService = waves.data.assets.Assets.create(
    unaryRpcImpl,
    false,
    false
  );

  const getStream = (req: waves.data.assets.ISearchAssetRequest) =>
    client.makeServerStreamRequest(
      `/waves.data.assets.Assets/SearchAsset`,
      req =>
        Buffer.from(waves.data.assets.SearchAssetRequest.encode(req).finish()),
      res => waves.data.assets.SearchAssetResponse.decode(res),
      req,
      meta,
      {}
    );

  return {
    getAsset: (
      req: waves.data.assets.IGetAssetRequest
    ): Task<DbError, Maybe<waves.data.assets.IAssetInfo>> =>
      fromPromised<Error, waves.data.assets.GetAssetResponse>(() =>
        unaryService.getAsset(req)
      )()
        .map(res => fromNullable(res.assetInfo))
        .mapRejected(e => AppError.Db(e)),

    getWaves: (
      req: waves.data.assets.IGetWavesRequest
    ): Task<DbError, Maybe<waves.data.assets.IWavesInfo>> =>
      fromPromised<Error, waves.data.assets.GetWavesResponse>(() =>
        unaryService.getWaves(req)
      )()
        .map(res => fromNullable(res.wavesInfo))
        .mapRejected(e => AppError.Db(e)),

    getAssetsBatch: (
      req: waves.data.assets.IGetAssetsBatchRequest
    ): Task<DbError, Maybe<waves.data.assets.IAssetInfo>[]> =>
      fromPromised<Error, waves.data.assets.GetAssetsBatchResponse>(() =>
        unaryService.getAssetsBatch(req)
      )()
        .map(res =>
          res.assetInfo.map(assetInfoIfExists =>
            fromNullable(assetInfoIfExists.assetInfo)
          )
        )
        .mapRejected(e => AppError.Db(e)),

    searchAsset: (
      req: waves.data.assets.ISearchAssetRequest
    ): Task<DbError, SearchedItems<waves.data.assets.IAssetInfo>> =>
      task(resolver => {
        const pagination = waves.data.Pagination.create({
          limit:
            req.pagination && req.pagination.limit
              ? req.pagination.limit + 1
              : undefined,
          after: req.pagination ? req.pagination.after : undefined,
        });
        const request = waves.data.assets.SearchAssetRequest.create({
          query: req.query,
          pagination,
        });
        const stream = getStream(request);

        const res: waves.data.assets.SearchAssetResponse[] = [];
        stream.on('data', (r: waves.data.assets.SearchAssetResponse) => {
          if (!isNil(r.assetInfo)) {
            res.push(r);
          }
        });
        stream.on('error', err => resolver.reject(AppError.Db(err)));
        stream.on('end', () => {
          const items = init(res);
          const lastItem = last(items);
          resolver.resolve({
            isLastPage:
              req.pagination && req.pagination.limit
                ? // request limit is req.pagination.limit + 1,
                  // so res.length has to be gt then req.pagination.limit
                  res.length <= req.pagination.limit
                : // by default, it's last page
                  true,
            lastCursor:
              items.length && lastItem
                ? base58Encode(Buffer.from(lastItem.cursor))
                : undefined,
            items: items
              .filter(item => item.assetInfo)
              // `as` is safe because of filter
              .map(item => item.assetInfo as waves.data.assets.IAssetInfo),
          });
        });
      }),
  };
};
