import { Maybe } from 'folktale/maybe';
import {
  Service,
  SearchedItems,
  ServiceGetRequest,
  ServiceMgetRequest,
} from '../../../types';
import { WithDecimalsFormat } from '../../types';
import {
  SetAssetScriptTransactionInfo,
  SetAssetScriptTxsGetRequest,
  SetAssetScriptTxsMgetRequest,
  SetAssetScriptTxsSearchRequest,
} from './repo/types';

export type SetAssetScriptTxsServiceGetRequest = ServiceGetRequest<
  SetAssetScriptTxsGetRequest
>;
export type SetAssetScriptTxsServiceMgetRequest = ServiceMgetRequest<
  SetAssetScriptTxsMgetRequest
>;
export type SetAssetScriptTxsServiceSearchRequest = SetAssetScriptTxsSearchRequest;

export type SetAssetScriptTxsService = {
  get: Service<
    SetAssetScriptTxsServiceGetRequest & WithDecimalsFormat,
    Maybe<SetAssetScriptTransactionInfo>
  >;
  mget: Service<
    SetAssetScriptTxsServiceMgetRequest & WithDecimalsFormat,
    Maybe<SetAssetScriptTransactionInfo>[]
  >;
  search: Service<
    SetAssetScriptTxsServiceSearchRequest & WithDecimalsFormat,
    SearchedItems<SetAssetScriptTransactionInfo>
  >;
};
