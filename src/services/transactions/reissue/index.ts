import { ReissueTxsRepo } from './repo/types';
import { ReissueTxsService } from './types';

export * from './types';

export default (repo: ReissueTxsRepo): ReissueTxsService => ({
  get: req => repo.get(req.id),
  mget: req => repo.mget(req.ids),
  search: req => repo.search(req),
});
