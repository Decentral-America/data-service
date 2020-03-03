import { PaymentTxsRepo } from './repo/types';
import { PaymentTxsService } from './types';

export * from './types';

export default (repo: PaymentTxsRepo): PaymentTxsService => ({
  get: req => repo.get(req.id),
  mget: req => repo.mget(req.ids),
  search: req => repo.search(req),
});
