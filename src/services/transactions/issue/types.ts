import { Maybe } from 'folktale/maybe';
import {
  Service,
  SearchedItems,
  ServiceGetRequest,
  ServiceMgetRequest,
} from '../../../types';
import { WithDecimalsFormat } from '../../types';
import {
  IssueTxsGetRequest,
  IssueTxsMgetRequest,
  IssueTxsSearchRequest,
  IssueTransactionInfo,
} from './repo/types';

export type IssueTxsServiceGetRequest = ServiceGetRequest<IssueTxsGetRequest>;
export type IssueTxsServiceMgetRequest = ServiceMgetRequest<
  IssueTxsMgetRequest
>;
export type IssueTxsServiceSearchRequest = IssueTxsSearchRequest;

export type IssueTxsService = {
  get: Service<
    IssueTxsServiceGetRequest & WithDecimalsFormat,
    Maybe<IssueTransactionInfo>
  >;
  mget: Service<
    IssueTxsServiceMgetRequest & WithDecimalsFormat,
    Maybe<IssueTransactionInfo>[]
  >;
  search: Service<
    IssueTxsServiceSearchRequest & WithDecimalsFormat,
    SearchedItems<IssueTransactionInfo>
  >;
};
