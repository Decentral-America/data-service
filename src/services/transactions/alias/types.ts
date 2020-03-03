import { Maybe } from 'folktale/maybe';
import {
  Service,
  SearchedItems,
  ServiceGetRequest,
  ServiceMgetRequest,
} from '../../../types';
import { WithDecimalsFormat } from '../../types';
import {
  AliasTxsGetRequest,
  AliasTxsMgetRequest,
  AliasTxsSearchRequest,
  AliasTransactionInfo,
} from './repo/types';

export type AliasTxsServiceGetRequest = ServiceGetRequest<AliasTxsGetRequest>;
export type AliasTxsServiceMgetRequest = ServiceMgetRequest<
  AliasTxsMgetRequest
>;
export type AliasTxsServiceSearchRequest = AliasTxsSearchRequest;

export type AliasTxsService = {
  get: Service<
    AliasTxsServiceGetRequest & WithDecimalsFormat,
    Maybe<AliasTransactionInfo>
  >;
  mget: Service<
    AliasTxsServiceMgetRequest & WithDecimalsFormat,
    Maybe<AliasTransactionInfo>[]
  >;
  search: Service<
    AliasTxsServiceSearchRequest & WithDecimalsFormat,
    SearchedItems<AliasTransactionInfo>
  >;
};
