import { Maybe } from 'folktale/maybe';
import {
  Service,
  SearchedItems,
  ServiceGetRequest,
  ServiceMgetRequest,
} from '../../../types';
import { WithDecimalsFormat } from '../../types';
import {
  InvokeScriptTxsGetRequest,
  InvokeScriptTxsMgetRequest,
  InvokeScriptTxsSearchRequest,
  InvokeScriptTransactionInfo,
} from './repo/types';

export type InvokeScriptTxsServiceGetRequest = ServiceGetRequest<
  InvokeScriptTxsGetRequest
>;
export type InvokeScriptTxsServiceMgetRequest = ServiceMgetRequest<
  InvokeScriptTxsMgetRequest
>;
export type InvokeScriptTxsServiceSearchRequest = InvokeScriptTxsSearchRequest;

export type InvokeScriptTxsService = {
  get: Service<
    InvokeScriptTxsServiceGetRequest & WithDecimalsFormat,
    Maybe<InvokeScriptTransactionInfo>
  >;
  mget: Service<
    InvokeScriptTxsServiceMgetRequest & WithDecimalsFormat,
    Maybe<InvokeScriptTransactionInfo>[]
  >;
  search: Service<
    InvokeScriptTxsServiceSearchRequest & WithDecimalsFormat,
    SearchedItems<InvokeScriptTransactionInfo>
  >;
};
