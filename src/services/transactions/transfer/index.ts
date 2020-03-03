import { of as maybeOf, empty } from 'folktale/maybe';
import {
  of as taskOf,
  rejected,
  waitAll,
  Task,
} from 'folktale/concurrency/task';
import { flatten, indexBy, sequence, uniq } from 'ramda';
import { AppError } from '../../../errorHandling';
import { AssetsService } from '../../assets';
import { DecimalsFormat } from '../../types';
import { TransferTransactionInfo, TransferTxsRepo } from './repo/types';
import { TransferTxsService } from './types';

export * from './types';

const createGetWithDecimals = (assetsService: AssetsService) => (
  tx: TransferTransactionInfo,
  decimalsFormat: DecimalsFormat
): Task<AppError, TransferTransactionInfo> => {
  switch (decimalsFormat) {
    case DecimalsFormat.Float:
      return assetsService
        .mget({
          ids: [tx.assetId, tx.feeAsset],
          decimalsFormat: decimalsFormat,
        })
        .chain(mas =>
          sequence(maybeOf, mas).matchWith({
            Just: ({ value }) =>
              taskOf({
                ...tx,
                amount: tx.amount.multipliedBy(10 ** -value[0].precision),
                fee: tx.fee.multipliedBy(10 ** -value[1].precision),
              }),
            Nothing: () =>
              rejected(
                AppError.Resolver(
                  new Error('Some of transaction Assets not found')
                )
              ),
          })
        );
    case DecimalsFormat.Long:
      return taskOf(tx);
  }
};

const createMgetWithDecimals = (assetsService: AssetsService) => (
  txs: TransferTransactionInfo[],
  decimalsFormat: DecimalsFormat
): Task<AppError, TransferTransactionInfo[]> => {
  switch (decimalsFormat) {
    case DecimalsFormat.Float:
      const assetIds = uniq(
        flatten<string>(txs.map(tx => [tx.assetId, tx.feeAsset]))
      );
      return assetsService
        .mget({
          ids: assetIds,
          decimalsFormat: decimalsFormat,
        })
        .chain(mas =>
          sequence(maybeOf, mas).matchWith({
            Just: ({ value }) => {
              const assets = indexBy(asset => asset.id, value);
              return taskOf(
                txs.map(tx => ({
                  ...tx,
                  amount: tx.amount.multipliedBy(
                    10 ** -assets[tx.assetId].precision
                  ),
                  fee: tx.fee.multipliedBy(
                    10 ** -assets[tx.feeAsset].precision
                  ),
                }))
              );
            },
            Nothing: () =>
              rejected(
                AppError.Resolver(
                  new Error('Some of transaction Assets not found')
                )
              ),
          })
        );
    case DecimalsFormat.Long:
      return taskOf(txs);
  }
};

export default (
  repo: TransferTxsRepo,
  assetsService: AssetsService
): TransferTxsService => {
  const getWithDecimals = createGetWithDecimals(assetsService);
  const mgetWithDecimals = createMgetWithDecimals(assetsService);

  return {
    get: req =>
      repo.get(req.id).chain(maybeTx =>
        maybeTx.matchWith({
          Just: ({ value: tx }) =>
            getWithDecimals(tx, req.decimalsFormat).map(maybeOf),
          Nothing: () => taskOf(empty()),
        })
      ),
    mget: req =>
      repo.mget(req.ids).chain(mTxs =>
        waitAll(
          mTxs.map(maybeTx =>
            maybeTx.matchWith({
              Just: ({ value: tx }) =>
                getWithDecimals(tx, req.decimalsFormat).map(maybeOf),
              Nothing: () => taskOf(empty()),
            })
          )
        )
      ),
    search: req =>
      repo.search(req).chain(searchedItems =>
        mgetWithDecimals(searchedItems.items, req.decimalsFormat).chain(txs =>
          taskOf({
            isLastPage: searchedItems.isLastPage,
            lastCursor: searchedItems.lastCursor,
            items: txs,
          })
        )
      ),
  };
};
