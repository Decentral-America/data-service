import { LeaseTxsRepo } from './repo/types';
import { LeaseTxsService } from './types';

export * from './types';

export default (repo: LeaseTxsRepo): LeaseTxsService => ({
  get: req => repo.get(req.id),
  mget: req => repo.mget(req.ids),
  search: req => repo.search(req),
});
