import { Maybe } from 'folktale/maybe';
import {
  Service,
  SearchedItems,
  ServiceGetRequest,
  ServiceMgetRequest,
} from '../../../types';
import { WithDecimalsFormat } from '../../types';
import {
  PaymentTransactionInfo,
  PaymentTxsGetRequest,
  PaymentTxsMgetRequest,
  PaymentTxsSearchRequest,
} from './repo/types';

export type PaymentTxsServiceGetRequest = ServiceGetRequest<
  PaymentTxsGetRequest
>;
export type PaymentTxsServiceMgetRequest = ServiceMgetRequest<
  PaymentTxsMgetRequest
>;
export type PaymentTxsServiceSearchRequest = PaymentTxsSearchRequest;

export type PaymentTxsService = {
  get: Service<
    PaymentTxsServiceGetRequest & WithDecimalsFormat,
    Maybe<PaymentTransactionInfo>
  >;
  mget: Service<
    PaymentTxsServiceMgetRequest & WithDecimalsFormat,
    Maybe<PaymentTransactionInfo>[]
  >;
  search: Service<
    PaymentTxsServiceSearchRequest & WithDecimalsFormat,
    SearchedItems<PaymentTransactionInfo>
  >;
};
