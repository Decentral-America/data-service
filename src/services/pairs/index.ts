import { Task } from 'folktale/concurrency/task';
import { Maybe } from 'folktale/maybe';

import { AppError } from '../../errorHandling';
import { Service, SearchedItems, AssetIdsPair, PairInfo } from '../../types';
import { WithDecimalsFormat } from '../types';
import {
  PairsGetRequest,
  PairsMgetRequest,
  PairsSearchRequest,
  PairsRepo,
} from './repo/types';

export type PairsServiceMgetRequest = PairsMgetRequest;
export type PairsServiceSearchRequest = PairsSearchRequest;
export type PairsService = {
  get: Service<
    PairsGetRequest & WithDecimalsFormat,
    Maybe<PairInfo & AssetIdsPair>
  >;
  mget: Service<
    PairsServiceMgetRequest & WithDecimalsFormat,
    Maybe<PairInfo & AssetIdsPair>[]
  >;
  search: Service<
    PairsSearchRequest & WithDecimalsFormat,
    SearchedItems<PairInfo & AssetIdsPair>
  >;
};

export default (
  repo: PairsRepo,
  validatePairs: (
    matcher: string,
    pairs: AssetIdsPair[]
  ) => Task<AppError, void>
): PairsService => ({
  get: req => validatePairs(req.matcher, [req.pair]).chain(() => repo.get(req)),
  mget: req =>
    validatePairs(req.matcher, req.pairs).chain(() => repo.mget(req)),
  search: req => repo.search(req),
});
