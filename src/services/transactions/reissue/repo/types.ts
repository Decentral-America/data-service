import { BigNumber } from '@waves/data-entities';
import { Repo } from '../../../../types';
import { WithSortOrder, WithLimit } from '../../../_common';
import { RequestWithCursor } from '../../../_common/pagination';
import { CommonFilters, RawTx, Tx } from '../../_common/types';

export type ReissueTxDbResponse = RawTx & {
  asset_id: string;
  quantity: BigNumber;
  reissuable: boolean;
};

export type ReissueTransactionInfo = Tx & {
  assetId: string;
  quantity: BigNumber;
  reissueable: boolean;
};

export type ReissueTxsGetRequest = string;
export type ReissueTxsMgetRequest = string[];
export type ReissueTxsSearchRequest = RequestWithCursor<
  CommonFilters & WithSortOrder & WithLimit,
  string
> &
  Partial<{
    assetId: string;
  }>;

export type ReissueTxsRepo = Repo<
  ReissueTxsGetRequest,
  ReissueTxsMgetRequest,
  ReissueTxsSearchRequest,
  ReissueTransactionInfo
>;
