import { BurnTxsRepo } from './repo/types';
import { BurnTxsService } from './types';

export * from './types';

export default (repo: BurnTxsRepo): BurnTxsService => ({
  get: req => repo.get(req.id),
  mget: req => repo.mget(req.ids),
  search: req => repo.search(req),
});
