import { GenesisTxsRepo } from './repo/types';
import { GenesisTxsService } from './types';

export * from './types';

export default (repo: GenesisTxsRepo): GenesisTxsService => ({
  get: req => repo.get(req.id),
  mget: req => repo.mget(req.ids),
  search: req => repo.search(req),
});
