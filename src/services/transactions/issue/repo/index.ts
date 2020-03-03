import { propEq } from 'ramda';
import { Ok as ok } from 'folktale/result';
import { of as just } from 'folktale/maybe';
import { of as taskOf } from 'folktale/concurrency/task';
import { withStatementTimeout } from '../../../../db/driver';
import { forEach, isEmpty } from '../../../../utils/fp/maybeOps';
import { tap } from '../../../../utils/tap';
import { CommonRepoDependencies } from '../../..';
import { get, mget } from '../../../_common/createResolver';
import { Cursor, serialize, deserialize } from '../../_common/cursor';
import { getData as getByIdPg } from '../../../_common/presets/pg/getById/pg';
import { getData as mgetByIds } from '../../../_common/presets/pg/mgetByIds/pg';
import { transformResults as transformResultGet } from '../../../_common/presets/pg/getById/transformResult';
import { transformResults as transformResultMget } from '../../../_common/presets/pg/mgetByIds/transformResult';
import { searchPreset } from '../../../_common/presets/pg/search';
import { validateResult } from '../../../_common/presets/validation';
import { result as resultSchema } from './schema';
import * as sql from './sql';
import transformTxInfo from './transformTxInfo';
import {
  IssueTxsRepo,
  IssueTxsSearchRequest,
  RawIssueTx,
  IssueTxsGetRequest,
  IssueTransactionInfo,
  IssueTxsMgetRequest,
} from './types';
import { IssueTxsCache } from './types';

const createServiceName = (type: string) => `transactions.issue.${type}`;

export default ({
  drivers: { pg },
  emitEvent,
  timeouts,
  cache,
}: CommonRepoDependencies & {
  cache: IssueTxsCache;
}): IssueTxsRepo => {
  return {
    get: get<
      IssueTxsGetRequest,
      IssueTxsGetRequest,
      RawIssueTx,
      IssueTransactionInfo
    >({
      transformInput: ok,
      transformResult: transformResultGet(transformTxInfo),
      validateResult: validateResult<RawIssueTx>(
        resultSchema,
        createServiceName('get')
      ),
      getData: req =>
        cache.get(req).matchWith({
          Just: ({ value }) => taskOf(just(value)),
          Nothing: () =>
            getByIdPg<RawIssueTx, IssueTxsGetRequest>({
              name: createServiceName('get'),
              sql: sql.get,
              pg: withStatementTimeout(pg, timeouts.get),
            })(req).map(
              tap(maybeResp => forEach(x => cache.set(req, x), maybeResp))
            ),
        }),
      emitEvent,
    }),

    mget: mget<
      IssueTxsMgetRequest,
      IssueTxsMgetRequest,
      RawIssueTx,
      IssueTransactionInfo
    >({
      transformInput: ok,
      transformResult: transformResultMget(transformTxInfo),
      validateResult: validateResult<RawIssueTx>(
        resultSchema,
        createServiceName('mget')
      ),
      getData: req => {
        let results = req.map(x => cache.get(x));

        const notCachedIndexes = results.reduce<number[]>((acc, x, i) => {
          if (isEmpty(x)) acc.push(i);
          return acc;
        }, []);
        const notCachedAssetIds = notCachedIndexes.map(i => req[i]);

        return mgetByIds<RawIssueTx, string>({
          name: createServiceName('mget'),
          matchRequestResult: propEq('id'),
          sql: sql.mget,
          pg: withStatementTimeout(pg, timeouts.mget),
        })(notCachedAssetIds).map(maybeTxs => {
          maybeTxs.forEach((maybeTx, index) => {
            return maybeTx.map(tx => {
              results[notCachedIndexes[index]] = just(tx);
              cache.set(notCachedAssetIds[index], tx);
            });
          });
          return results;
        });
      },
      emitEvent,
    }),

    search: searchPreset<
      Cursor,
      IssueTxsSearchRequest,
      RawIssueTx,
      IssueTransactionInfo
    >({
      name: 'transactions.issue.search',
      sql: sql.search,
      resultSchema,
      transformResult: transformTxInfo,
      cursorSerialization: { serialize, deserialize },
    })({
      pg: withStatementTimeout(pg, timeouts.search),
      emitEvent,
    }),
  };
};
