import { Maybe } from 'folktale/maybe';
import {
  Service,
  SearchedItems,
  ServiceGetRequest,
  ServiceMgetRequest,
} from '../../../types';
import { WithDecimalsFormat } from '../../types';
import {
  LeaseTxsGetRequest,
  LeaseTxsMgetRequest,
  LeaseTxsSearchRequest,
  LeaseTransactionInfo,
} from './repo/types';

export type LeaseTxsServiceGetRequest = ServiceGetRequest<LeaseTxsGetRequest>;
export type LeaseTxsServiceMgetRequest = ServiceMgetRequest<
  LeaseTxsMgetRequest
>;
export type LeaseTxsServiceSearchRequest = LeaseTxsSearchRequest;

export type LeaseTxsService = {
  get: Service<
    LeaseTxsServiceGetRequest & WithDecimalsFormat,
    Maybe<LeaseTransactionInfo>
  >;
  mget: Service<
    LeaseTxsServiceMgetRequest & WithDecimalsFormat,
    Maybe<LeaseTransactionInfo>[]
  >;
  search: Service<
    LeaseTxsServiceSearchRequest & WithDecimalsFormat,
    SearchedItems<LeaseTransactionInfo>
  >;
};
