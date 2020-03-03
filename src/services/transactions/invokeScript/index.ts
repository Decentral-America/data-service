import { InvokeScriptTxsRepo } from './repo/types';
import { InvokeScriptTxsService } from './types';

export * from './types';

export default (repo: InvokeScriptTxsRepo): InvokeScriptTxsService => ({
  get: req => repo.get(req.id),
  mget: req => repo.mget(req.ids),
  search: req => repo.search(req),
});
