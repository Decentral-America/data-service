import { ExchangeTxsRepo } from './repo/types';
import { ExchangeTxsService } from './types';

export * from './types';

export default (repo: ExchangeTxsRepo): ExchangeTxsService => ({
  get: req => repo.get(req.id),
  mget: req => repo.mget(req.ids),
  search: req => repo.search(req),
});
