import { Maybe } from 'folktale/maybe';
import {
  Service,
  SearchedItems,
  ServiceGetRequest,
  ServiceMgetRequest,
} from '../../../types';
import { WithDecimalsFormat } from '../../types';
import {
  BurnTxsGetRequest,
  BurnTxsMgetRequest,
  BurnTxsSearchRequest,
  BurnTransactionInfo,
} from './repo/types';

export type BurnTxsServiceGetRequest = ServiceGetRequest<BurnTxsGetRequest>;
export type BurnTxsServiceMgetRequest = ServiceMgetRequest<BurnTxsMgetRequest>;
export type BurnTxsServiceSearchRequest = BurnTxsSearchRequest;

export type BurnTxsService = {
  get: Service<
    BurnTxsServiceGetRequest & WithDecimalsFormat,
    Maybe<BurnTransactionInfo>
  >;
  mget: Service<
    BurnTxsServiceMgetRequest & WithDecimalsFormat,
    Maybe<BurnTransactionInfo>[]
  >;
  search: Service<
    BurnTxsServiceSearchRequest & WithDecimalsFormat,
    SearchedItems<BurnTransactionInfo>
  >;
};
