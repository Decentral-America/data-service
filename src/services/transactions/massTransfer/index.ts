import { MassTransferTxsRepo } from './repo/types';
import { MassTransferTxsService } from './types';

export * from './types';

export default (repo: MassTransferTxsRepo): MassTransferTxsService => ({
  get: req => repo.get(req.id),
  mget: req => repo.mget(req.ids),
  search: req => repo.search(req),
});
