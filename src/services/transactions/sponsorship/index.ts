import { SponsorshipTxsRepo } from './repo/types';
import { SponsorshipTxsService } from './types';

export * from './types';

export default (repo: SponsorshipTxsRepo): SponsorshipTxsService => ({
  get: req => repo.get(req.id),
  mget: req => repo.mget(req.ids),
  search: req => repo.search(req),
});
