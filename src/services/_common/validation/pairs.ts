import {
  Task,
  rejected as taskRejected,
  of as taskOf,
} from 'folktale/concurrency/task';
import { F, T, zip } from 'ramda';

import { ValidationError, AppError } from '../../../errorHandling';
import { AssetIdsPair } from '../../../types';

import { AssetsService } from '../../assets';
import { PairOrderingService } from '../../PairOrderingService';
import { DEFAULT_DECIMALS_FORMAT } from '..';

export const validatePairs = (
  assetsMget: AssetsService['mget'],
  pairOrderingService: PairOrderingService
) => (matcher: string, pairs: AssetIdsPair[]): Task<AppError, void> => {
  // correct order
  const incorrectPairs = pairs.filter(
    p =>
      !pairOrderingService.isCorrectOrder(matcher, p).matchWith({
        Just: ({ value }) => value,
        Nothing: () => true,
      })
  );

  if (incorrectPairs.length)
    return taskRejected(
      new ValidationError('Wrong assets order in provided pair(s)', {
        pairs: incorrectPairs,
      })
    );

  // all assets exist
  const assetIdsSet: Set<string> = new Set();
  pairs.forEach(p => {
    assetIdsSet.add(p.amountAsset);
    assetIdsSet.add(p.priceAsset);
  });
  const assetIds = Array.from(assetIdsSet);

  return assetsMget({
    ids: assetIds,
    decimalsFormat: DEFAULT_DECIMALS_FORMAT,
  }).chain(assets => {
    const nonExistingIds = zip(assetIds, assets)
      .filter(x =>
        x[1].matchWith({
          Just: F,
          Nothing: T,
        })
      )
      .map(x => x[0]);

    if (!nonExistingIds.length) {
      return taskOf(undefined);
    } else {
      return taskRejected(
        new ValidationError(
          new Error('Assets do not exist in the blockchain'),
          {
            assets: nonExistingIds,
          }
        )
      );
    }
  });
};
