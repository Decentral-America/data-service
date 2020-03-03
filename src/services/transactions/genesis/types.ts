import { Maybe } from 'folktale/maybe';
import {
  Service,
  SearchedItems,
  ServiceGetRequest,
  ServiceMgetRequest,
} from '../../../types';
import { WithDecimalsFormat } from '../../types';
import {
  GenesisTransactionInfo,
  GenesisTxsGetRequest,
  GenesisTxsMgetRequest,
  GenesisTxsSearchRequest,
} from './repo/types';

export type GenesisTxsServiceGetRequest = ServiceGetRequest<
  GenesisTxsGetRequest
>;
export type GenesisTxsServiceMgetRequest = ServiceMgetRequest<
  GenesisTxsMgetRequest
>;
export type GenesisTxsServiceSearchRequest = GenesisTxsSearchRequest;

export type GenesisTxsService = {
  get: Service<
    GenesisTxsServiceGetRequest & WithDecimalsFormat,
    Maybe<GenesisTransactionInfo>
  >;
  mget: Service<
    GenesisTxsServiceMgetRequest & WithDecimalsFormat,
    Maybe<GenesisTransactionInfo>[]
  >;
  search: Service<
    GenesisTxsServiceSearchRequest & WithDecimalsFormat,
    SearchedItems<GenesisTransactionInfo>
  >;
};
