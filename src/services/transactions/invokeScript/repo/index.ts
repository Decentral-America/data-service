import { of as just } from 'folktale/maybe';
import { Ok as ok } from 'folktale/result';
import { of as taskOf } from 'folktale/concurrency/task';
import { compose } from 'ramda';

import { withStatementTimeout } from '../../../../db/driver';
import { CommonRepoDependencies } from '../../..';
import { forEach } from '../../../../utils/fp/maybeOps';
import { tap } from '../../../../utils/tap';
import { get, mget, search } from '../../../_common/createResolver';
import { transformResults as transformResultGet } from '../../../_common/presets/pg/getById/transformResult';
import { transformResults as transformResultMget } from '../../../_common/presets/pg/mgetByIds/transformResult';
import { transformInput as transformInputSearch } from '../../../_common/presets/pg/search/transformInput';
import { transformResults as transformResultSearch } from '../../../_common/presets/pg/search/transformResults';
import { validateResult } from '../../../_common/presets/validation';

import { serialize, deserialize, Cursor } from '../../_common/cursor';

import pgData from './pg';
import { result as resultSchema } from './schema';
import * as transformTxInfo from './transformTxInfo';
import {
  RawInvokeScriptTx,
  InvokeScriptTxsSearchRequest,
  InvokeScriptTxsRepo,
  InvokeScriptTxsCache,
  InvokeScriptTxsGetRequest,
  InvokeScriptTransactionInfo,
} from './types';

const createServiceName = (type: string) => `transactions.invokeScript.${type}`;

export default ({
  drivers: { pg },
  emitEvent,
  timeouts,
  cache,
}: CommonRepoDependencies & {
  cache: InvokeScriptTxsCache;
}): InvokeScriptTxsRepo => {
  return {
    get: get<
      InvokeScriptTxsGetRequest,
      InvokeScriptTxsGetRequest,
      RawInvokeScriptTx,
      InvokeScriptTransactionInfo
    >({
      transformInput: ok,
      transformResult: transformResultGet(transformTxInfo),
      validateResult: validateResult<RawInvokeScriptTx>(
        resultSchema,
        createServiceName('get')
      ),
      getData: req =>
        cache.get(req).matchWith({
          Just: ({ value }) => taskOf(just(value)),
          Nothing: () =>
            pgData
              .get(withStatementTimeout(pg, timeouts.get))(req)
              .map(
                tap(maybeResp => forEach(x => cache.set(req, x), maybeResp))
              ),
        }),
      emitEvent,
    }),

    mget: mget({
      transformInput: ok,
      transformResult: transformResultMget(transformTxInfo),
      validateResult: validateResult(resultSchema, createServiceName('mget')),
      getData: pgData.mget(withStatementTimeout(pg, timeouts.mget)),
      emitEvent,
    }),

    search: search<
      InvokeScriptTxsSearchRequest,
      InvokeScriptTxsSearchRequest<Cursor>,
      RawInvokeScriptTx,
      InvokeScriptTransactionInfo
    >({
      transformInput: transformInputSearch(deserialize),
      transformResult: transformResultSearch(
        compose(transformTxInfo),
        serialize
      ),
      validateResult: validateResult<RawInvokeScriptTx>(
        resultSchema,
        createServiceName('search')
      ),
      getData: pgData.search(withStatementTimeout(pg, timeouts.search)),
      emitEvent,
    }),
  };
};
