import { SetScriptTxsRepo } from './repo/types';
import { SetScriptTxsService } from './types';

export * from './types';

export default (repo: SetScriptTxsRepo): SetScriptTxsService => ({
  get: req => repo.get(req.id),
  mget: req => repo.mget(req.ids),
  search: req => repo.search(req),
});
