import { Repo } from '../../../../types';
import { WithSortOrder, WithLimit } from '../../../_common';
import { RequestWithCursor } from '../../../_common/pagination';
import { CommonFilters, RawTx, Tx } from '../../_common/types';
import { BigNumber } from '@waves/data-entities';

export type SponsorshipTxDbResponse = RawTx & {
  asset_id: string;
  min_sponsored_asset_fee: BigNumber;
};

export type SponsorshipTransactionInfo = Tx & {
  assetId: string;
  minSponsoredAssetFee: BigNumber;
};

export type SponsorshipTxsGetRequest = string;

export type SponsorshipTxsMgetRequest = string[];

export type SponsorshipTxsSearchRequest = RequestWithCursor<
  CommonFilters & WithSortOrder & WithLimit,
  string
> &
  Partial<{
    assetId: String;
  }>;

export type SponsorshipTxsRepo = Repo<
  SponsorshipTxsGetRequest,
  SponsorshipTxsMgetRequest,
  SponsorshipTxsSearchRequest,
  SponsorshipTransactionInfo
>;
