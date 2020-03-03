import { DataTxsRepo } from './repo/types';
import { DataTxsService } from './types';

export * from './types';

export default (repo: DataTxsRepo): DataTxsService => ({
  get: req => repo.get(req.id),
  mget: req => repo.mget(req.ids),
  search: req => repo.search(req),
});
