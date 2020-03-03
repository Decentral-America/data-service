import { Maybe } from 'folktale/maybe';
import {
  Service,
  SearchedItems,
  ServiceGetRequest,
  ServiceMgetRequest,
} from '../../../types';
import { WithDecimalsFormat } from '../../types';
import {
  SponsorshipTxsGetRequest,
  SponsorshipTxsMgetRequest,
  SponsorshipTxsSearchRequest,
  SponsorshipTransactionInfo,
} from './repo/types';

export type SponsorshipTxsServiceGetRequest = ServiceGetRequest<
  SponsorshipTxsGetRequest
>;
export type SponsorshipTxsServiceMgetRequest = ServiceMgetRequest<
  SponsorshipTxsMgetRequest
>;
export type SponsorshipTxsServiceSearchRequest = SponsorshipTxsSearchRequest;

export type SponsorshipTxsService = {
  get: Service<
    SponsorshipTxsServiceGetRequest & WithDecimalsFormat,
    Maybe<SponsorshipTransactionInfo>
  >;
  mget: Service<
    SponsorshipTxsServiceMgetRequest & WithDecimalsFormat,
    Maybe<SponsorshipTransactionInfo>[]
  >;
  search: Service<
    SponsorshipTxsServiceSearchRequest & WithDecimalsFormat,
    SearchedItems<SponsorshipTransactionInfo>
  >;
};
