import { AliasTxsRepo } from './repo/types';
import { AliasTxsService } from './types';

export * from './types';

export default (repo: AliasTxsRepo): AliasTxsService => ({
  get: req => repo.get(req.id),
  mget: req => repo.mget(req.ids),
  search: req => repo.search(req),
});
