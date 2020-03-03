import { Maybe } from 'folktale/maybe';
import {
  Service,
  SearchedItems,
  ServiceGetRequest,
  ServiceMgetRequest,
} from '../../../types';
import { WithDecimalsFormat } from '../../types';
import {
  SetScriptTransactionInfo,
  SetScriptTxsGetRequest,
  SetScriptTxsMgetRequest,
  SetScriptTxsSearchRequest,
} from './repo/types';

export type SetScriptTxsServiceGetRequest = ServiceGetRequest<
  SetScriptTxsGetRequest
>;
export type SetScriptTxsServiceMgetRequest = ServiceMgetRequest<
  SetScriptTxsMgetRequest
>;
export type SetScriptTxsServiceSearchRequest = SetScriptTxsSearchRequest;

export type SetScriptTxsService = {
  get: Service<
    SetScriptTxsServiceGetRequest & WithDecimalsFormat,
    Maybe<SetScriptTransactionInfo>
  >;
  mget: Service<
    SetScriptTxsServiceMgetRequest & WithDecimalsFormat,
    Maybe<SetScriptTransactionInfo>[]
  >;
  search: Service<
    SetScriptTxsServiceSearchRequest & WithDecimalsFormat,
    SearchedItems<SetScriptTransactionInfo>
  >;
};
