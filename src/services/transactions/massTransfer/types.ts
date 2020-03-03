import { Maybe } from 'folktale/maybe';
import {
  Service,
  SearchedItems,
  ServiceGetRequest,
  ServiceMgetRequest,
} from '../../../types';
import { WithDecimalsFormat } from '../../types';
import {
  MassTransferTransactionInfo,
  MassTransferTxsGetRequest,
  MassTransferTxsMgetRequest,
  MassTransferTxsSearchRequest,
} from './repo/types';

export type MassTransferTxsServiceGetRequest = ServiceGetRequest<
  MassTransferTxsGetRequest
>;
export type MassTransferTxsServiceMgetRequest = ServiceMgetRequest<
  MassTransferTxsMgetRequest
>;
export type MassTransferTxsServiceSearchRequest = MassTransferTxsSearchRequest;

export type MassTransferTxsService = {
  get: Service<
    MassTransferTxsServiceGetRequest & WithDecimalsFormat,
    Maybe<MassTransferTransactionInfo>
  >;
  mget: Service<
    MassTransferTxsServiceMgetRequest & WithDecimalsFormat,
    Maybe<MassTransferTransactionInfo>[]
  >;
  search: Service<
    MassTransferTxsServiceSearchRequest & WithDecimalsFormat,
    SearchedItems<MassTransferTransactionInfo>
  >;
};
