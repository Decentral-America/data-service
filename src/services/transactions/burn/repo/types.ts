import { Repo } from '../../../../types';
import { WithSortOrder, WithLimit } from '../../../_common';
import { RequestWithCursor } from '../../../_common/pagination';
import { CommonFilters, RawTx, Tx } from '../../_common/types';
import { BigNumber } from '@waves/data-entities';

export type BurnTxDbResponse = RawTx & {
  asset_id: string;
  amount: string;
};

export type BurnTransactionInfo = Tx & {
  assetId: string;
  amount: BigNumber;
};

export type BurnTxsGetRequest = string;
export type BurnTxsMgetRequest = string[];
export type BurnTxsSearchRequest = RequestWithCursor<
  CommonFilters &
    WithSortOrder &
    WithLimit &
    Partial<{
      assetId: string;
    }>,
  string
>;

export type BurnTxsRepo = Repo<
  BurnTxsGetRequest,
  BurnTxsMgetRequest,
  BurnTxsSearchRequest,
  BurnTransactionInfo
>;
