import { IssueTxsRepo } from './repo/types';
import { IssueTxsService } from './types';

export * from './types';

export default (repo: IssueTxsRepo): IssueTxsService => ({
  get: req => repo.get(req.id),
  mget: req => repo.mget(req.ids),
  search: req => repo.search(req),
});
