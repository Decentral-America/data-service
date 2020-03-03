import { Maybe } from 'folktale/maybe';
import {
  Service,
  SearchedItems,
  ServiceGetRequest,
  ServiceMgetRequest,
} from '../../../types';
import { WithDecimalsFormat } from '../../types';
import {
  ExchangeTransactionInfo,
  ExchangeTxsGetRequest,
  ExchangeTxsMgetRequest,
  ExchangeTxsSearchRequest,
} from './repo/types';

export type ExchangeTxsServiceGetRequest = ServiceGetRequest<
  ExchangeTxsGetRequest
>;
export type ExchangeTxsServiceMgetRequest = ServiceMgetRequest<
  ExchangeTxsMgetRequest
>;
export type ExchangeTxsServiceSearchRequest = ExchangeTxsSearchRequest;

export type ExchangeTxsService = {
  get: Service<
    ExchangeTxsServiceGetRequest & WithDecimalsFormat,
    Maybe<ExchangeTransactionInfo>
  >;
  mget: Service<
    ExchangeTxsServiceMgetRequest & WithDecimalsFormat,
    Maybe<ExchangeTransactionInfo>[]
  >;
  search: Service<
    ExchangeTxsServiceSearchRequest & WithDecimalsFormat,
    SearchedItems<ExchangeTransactionInfo>
  >;
};
