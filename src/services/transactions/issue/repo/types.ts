import { BigNumber } from '@waves/data-entities';
import { CacheSync, Repo } from '../../../../types';
import { WithSortOrder, WithLimit } from '../../../_common';
import { RequestWithCursor } from '../../../_common/pagination';
import { CommonFilters, RawTx, Tx } from '../../_common/types';

export type IssueTxsCache = CacheSync<string, RawIssueTx>;

export type RawIssueTx = RawTx & {
  asset_id: string;
  amount: string;
};

export type IssueTxsGetRequest = string;

export type IssueTxsMgetRequest = string[];

export type IssueTxsSearchRequest = RequestWithCursor<
  CommonFilters & WithSortOrder & WithLimit,
  string
> &
  Partial<{
    assetId: string;
    script: string;
  }>;

export type IssueTransactionInfo = Tx & {
  assetId: string;
  amount: BigNumber;
  assetName: string;
  description: string;
  quantity: BigNumber;
  decimals: number;
  reissuable: boolean;
  script: string;
};

export type IssueTxsRepo = Repo<
  IssueTxsGetRequest,
  IssueTxsMgetRequest,
  IssueTxsSearchRequest,
  IssueTransactionInfo
>;
