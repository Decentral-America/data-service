import { BigNumber } from '@waves/data-entities';
import { Repo } from '../../../../types';
import { WithSortOrder, WithLimit } from '../../../_common';
import { RequestWithCursor } from '../../../_common/pagination';
import { CommonFilters, RawTx, Tx } from '../../_common/types';

export type PaymentTxDbResponse = RawTx & {
  amount: BigNumber;
  recipient: string;
};

export type PaymentTransactionInfo = Tx & {
  amount: BigNumber;
  recipient: string;
};

export type PaymentTxsGetRequest = string;
export type PaymentTxsMgetRequest = string[];
export type PaymentTxsSearchRequest = RequestWithCursor<
  CommonFilters & WithSortOrder & WithLimit,
  string
> &
  Partial<{
    recipient: string;
  }>;

export type PaymentTxsRepo = Repo<
  PaymentTxsGetRequest,
  PaymentTxsMgetRequest,
  PaymentTxsSearchRequest,
  PaymentTransactionInfo
>;
