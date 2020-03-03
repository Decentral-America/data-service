import { Maybe } from 'folktale/maybe';
import {
  Service,
  SearchedItems,
  ServiceGetRequest,
  ServiceMgetRequest,
} from '../../../types';
import { WithDecimalsFormat } from '../../types';
import {
  TransferTransactionInfo,
  TransferTxsGetRequest,
  TransferTxsMgetRequest,
  TransferTxsSearchRequest,
} from './repo/types';

export type TransferTxsServiceGetRequest = ServiceGetRequest<
  TransferTxsGetRequest
>;
export type TransferTxsServiceMgetRequest = ServiceMgetRequest<
  TransferTxsMgetRequest
>;
export type TransferTxsServiceSearchRequest = TransferTxsSearchRequest;

export type TransferTxsService = {
  get: Service<
    TransferTxsServiceGetRequest & WithDecimalsFormat,
    Maybe<TransferTransactionInfo>
  >;
  mget: Service<
    TransferTxsServiceMgetRequest & WithDecimalsFormat,
    Maybe<TransferTransactionInfo>[]
  >;
  search: Service<
    TransferTxsServiceSearchRequest & WithDecimalsFormat,
    SearchedItems<TransferTransactionInfo>
  >;
};
