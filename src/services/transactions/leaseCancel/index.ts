import { LeaseCancelTxsRepo } from './repo/types';
import { LeaseCancelTxsService } from './types';

export * from './types';

export default (repo: LeaseCancelTxsRepo): LeaseCancelTxsService => ({
  get: req => repo.get(req.id),
  mget: req => repo.mget(req.ids),
  search: req => repo.search(req),
});
