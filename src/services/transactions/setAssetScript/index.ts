import { SetAssetScriptTxsRepo } from './repo/types';
import { SetAssetScriptTxsService } from './types';

export * from './types';

export default (repo: SetAssetScriptTxsRepo): SetAssetScriptTxsService => ({
  get: req => repo.get(req.id),
  mget: req => repo.mget(req.ids),
  search: req => repo.search(req),
});
