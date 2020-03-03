import { Maybe, empty, of as maybeOf } from 'folktale/maybe';
import { of as taskOf, rejected } from 'folktale/concurrency/task';
import { indexBy, uniq } from 'ramda';
import { encode as base58Encode } from 'bs58';
import { Asset } from '@waves/data-entities';

import { AppError } from '../../errorHandling';
import { Service, SearchedItems } from '../../types';
import { collect } from '../../utils/collection';
import { InvokeScriptTxsService } from '../transactions/invokeScript';
import { IssueTxsService } from '../transactions/issue';
import { WithDecimalsFormat } from '../types';
import {
  AssetsGetRequest,
  AssetsMgetRequest,
  AssetsSearchRequest,
  AssetsRepo,
} from './repo/types';
import { transformAssetInfo } from './transformAssetInfo';
import { transformWavesAssetInfo } from './transformWavesAssetInfo';
import { IssueTransactionInfo } from 'services/transactions/issue/repo/types';
import { InvokeScriptTransactionInfo } from 'services/transactions/invokeScript/repo/types';
import { wavesAssetInfo } from './repo/constants';

export type AssetsServiceGetRequest = {
  id: AssetsGetRequest;
};

export type AssetsServiceMgetRequest = {
  ids: AssetsMgetRequest;
};

export type AssetsServiceSearchRequest = AssetsSearchRequest;

export type AssetsService = {
  get: Service<AssetsServiceGetRequest & WithDecimalsFormat, Maybe<Asset>>;
  mget: Service<AssetsServiceMgetRequest & WithDecimalsFormat, Maybe<Asset>[]>;
  search: Service<
    AssetsServiceSearchRequest & WithDecimalsFormat,
    SearchedItems<Asset>
  >;
};

export default (
  repo: AssetsRepo,
  {
    issue,
    invokeScript,
  }: {
    issue: IssueTxsService;
    invokeScript: InvokeScriptTxsService;
  }
): AssetsService => ({
  get: req =>
    repo.get(req.id).chain(m =>
      m.matchWith({
        Just: ({ value: assetInfo }) => {
          if (req.id === 'WAVES') {
            return taskOf(maybeOf(transformWavesAssetInfo(assetInfo)));
          } else {
            const txId = base58Encode(
              Buffer.from(assetInfo.originTransactionId)
            );
            return issue
              .get({
                id: txId,
                decimalsFormat: req.decimalsFormat,
              })
              .chain(maybeIssueTx =>
                maybeIssueTx.matchWith({
                  Just: ({ value: tx }) =>
                    taskOf(maybeOf(transformAssetInfo(assetInfo, tx))),
                  Nothing: () =>
                    invokeScript
                      .get({
                        id: txId,
                        decimalsFormat: req.decimalsFormat,
                      })
                      .chain(maybeInvokeScriptTx =>
                        maybeInvokeScriptTx.matchWith({
                          Just: ({ value: tx }) =>
                            taskOf(maybeOf(transformAssetInfo(assetInfo, tx))),
                          Nothing: () =>
                            rejected(
                              AppError.Resolver(
                                new Error('Unknown issue asset transaction')
                              )
                            ),
                        })
                      ),
                })
              );
          }
        },
        Nothing: () => taskOf(empty()),
      })
    ),
  mget: req =>
    repo.mget(req.ids).chain(mas => {
      const txIds = uniq(
        collect(m => m.getOrElse(undefined), mas)
          // filter WAVES
          .filter(assetInfo => assetInfo.assetId !== wavesAssetInfo.assetId)
          .map(assetInfo =>
            base58Encode(Buffer.from(assetInfo.originTransactionId))
          )
      );

      return issue
        .mget({
          ids: txIds,
          decimalsFormat: req.decimalsFormat,
        })
        .chain<
          AppError,
          Record<string, IssueTransactionInfo | InvokeScriptTransactionInfo>
        >(maybeIssueTxs => {
          const issueTxs = collect(m => m.getOrElse(undefined), maybeIssueTxs);

          if (issueTxs.length < txIds.length) {
            const issueTxIds = issueTxs.map(tx => tx.id);
            return invokeScript
              .mget({
                ids: txIds.filter(txId => issueTxIds.indexOf(txId) > -1),
                decimalsFormat: req.decimalsFormat,
              })
              .chain(maybeInvokeScriptTxs => {
                const invokeScriptTxs = collect(
                  m => m.getOrElse(undefined),
                  maybeInvokeScriptTxs
                );

                if (invokeScriptTxs.length + issueTxIds.length < txIds.length) {
                  return rejected(
                    AppError.Resolver(
                      new Error('Unknown issue asset transaction')
                    )
                  );
                } else {
                  return taskOf(
                    indexBy(tx => tx.id, [...issueTxs, ...invokeScriptTxs])
                  );
                }
              });
          } else {
            return taskOf(indexBy(tx => tx.id, issueTxs));
          }
        })
        .map(txs => {
          return mas.map(ma =>
            ma.map(assetInfo =>
              assetInfo.assetId === wavesAssetInfo.assetId
                ? transformWavesAssetInfo(assetInfo)
                : transformAssetInfo(
                    assetInfo,
                    txs[
                      base58Encode(Buffer.from(assetInfo.originTransactionId))
                    ]
                  )
            )
          );
        });
    }),
  search: req =>
    repo.search(req).chain(searchAssets => {
      const txIds = searchAssets.items.map(assetInfo =>
        base58Encode(Buffer.from(assetInfo.originTransactionId))
      );
      return issue
        .mget({
          ids: txIds,
          decimalsFormat: req.decimalsFormat,
        })
        .chain<
          AppError,
          Record<string, IssueTransactionInfo | InvokeScriptTransactionInfo>
        >(maybeIssueTxs => {
          const issueTxs = collect(m => m.getOrElse(undefined), maybeIssueTxs);

          if (issueTxs.length < txIds.length) {
            const issueTxIds = issueTxs.map(tx => tx.id);
            return invokeScript
              .mget({
                ids: txIds.filter(txId => issueTxIds.indexOf(txId) > -1),
                decimalsFormat: req.decimalsFormat,
              })
              .chain(maybeInvokeScriptTxs => {
                const invokeScriptTxs = collect(
                  m => m.getOrElse(undefined),
                  maybeInvokeScriptTxs
                );

                if (invokeScriptTxs.length + issueTxIds.length < txIds.length) {
                  return rejected(
                    AppError.Resolver(
                      new Error('Unknown issue asset transaction')
                    )
                  );
                } else {
                  return taskOf(
                    indexBy(tx => tx.id, [...issueTxs, ...invokeScriptTxs])
                  );
                }
              });
          } else {
            return taskOf(indexBy(tx => tx.id, issueTxs));
          }
        })
        .map(txs => ({
          isLastPage: searchAssets.isLastPage,
          lastCursor: searchAssets.lastCursor,
          items: searchAssets.items.map(assetInfo =>
            transformAssetInfo(
              assetInfo,
              txs[base58Encode(Buffer.from(assetInfo.originTransactionId))]
            )
          ),
        }));
    }),
});
