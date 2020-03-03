import { Maybe } from 'folktale/maybe';
import {
  Service,
  SearchedItems,
  ServiceGetRequest,
  ServiceMgetRequest,
} from '../../../types';
import { WithDecimalsFormat } from '../../types';
import {
  LeaseCancelTxsGetRequest,
  LeaseCancelTxsMgetRequest,
  LeaseCancelTxsSearchRequest,
  LeaseCancelTransactionInfo,
} from './repo/types';

export type LeaseCancelTxsServiceGetRequest = ServiceGetRequest<
  LeaseCancelTxsGetRequest
>;
export type LeaseCancelTxsServiceMgetRequest = ServiceMgetRequest<
  LeaseCancelTxsMgetRequest
>;
export type LeaseCancelTxsServiceSearchRequest = LeaseCancelTxsSearchRequest;

export type LeaseCancelTxsService = {
  get: Service<
    LeaseCancelTxsServiceGetRequest & WithDecimalsFormat,
    Maybe<LeaseCancelTransactionInfo>
  >;
  mget: Service<
    LeaseCancelTxsServiceMgetRequest & WithDecimalsFormat,
    Maybe<LeaseCancelTransactionInfo>[]
  >;
  search: Service<
    LeaseCancelTxsServiceSearchRequest & WithDecimalsFormat,
    SearchedItems<LeaseCancelTransactionInfo>
  >;
};
