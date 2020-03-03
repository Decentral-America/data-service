import { Maybe } from 'folktale/maybe';
import {
  Service,
  SearchedItems,
  ServiceGetRequest,
  ServiceMgetRequest,
} from '../../../types';
import { WithDecimalsFormat } from '../../types';
import {
  DataTransactionInfo,
  DataTxsGetRequest,
  DataTxsMgetRequest,
  DataTxsSearchRequest,
} from './repo/types';

export type DataTxsServiceGetRequest = ServiceGetRequest<DataTxsGetRequest>;
export type DataTxsServiceMgetRequest = ServiceMgetRequest<DataTxsMgetRequest>;
export type DataTxsServiceSearchRequest = DataTxsSearchRequest;

export type DataTxsService = {
  get: Service<
    DataTxsServiceGetRequest & WithDecimalsFormat,
    Maybe<DataTransactionInfo>
  >;
  mget: Service<
    DataTxsServiceMgetRequest & WithDecimalsFormat,
    Maybe<DataTransactionInfo>[]
  >;
  search: Service<
    DataTxsServiceSearchRequest & WithDecimalsFormat,
    SearchedItems<DataTransactionInfo>
  >;
};
