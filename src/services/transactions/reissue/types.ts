import { Maybe } from 'folktale/maybe';
import {
  Service,
  SearchedItems,
  ServiceGetRequest,
  ServiceMgetRequest,
} from '../../../types';
import { WithDecimalsFormat } from '../../types';
import {
  ReissueTransactionInfo,
  ReissueTxsGetRequest,
  ReissueTxsMgetRequest,
  ReissueTxsSearchRequest,
} from './repo/types';

export type ReissueTxsServiceGetRequest = ServiceGetRequest<
  ReissueTxsGetRequest
>;
export type ReissueTxsServiceMgetRequest = ServiceMgetRequest<
  ReissueTxsMgetRequest
>;
export type ReissueTxsServiceSearchRequest = ReissueTxsSearchRequest;

export type ReissueTxsService = {
  get: Service<
    ReissueTxsServiceGetRequest & WithDecimalsFormat,
    Maybe<ReissueTransactionInfo>
  >;
  mget: Service<
    ReissueTxsServiceMgetRequest & WithDecimalsFormat,
    Maybe<ReissueTransactionInfo>[]
  >;
  search: Service<
    ReissueTxsServiceSearchRequest & WithDecimalsFormat,
    SearchedItems<ReissueTransactionInfo>
  >;
};
