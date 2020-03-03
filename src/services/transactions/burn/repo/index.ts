import { propEq } from 'ramda';

import { withStatementTimeout } from '../../../../db/driver';
import { CommonRepoDependencies } from '../../..';
import { getByIdPreset } from '../../../_common/presets/pg/getById';
import { mgetByIdsPreset } from '../../../_common/presets/pg/mgetByIds';
import { searchPreset } from '../../../_common/presets/pg/search';

import { Cursor, serialize, deserialize } from '../../_common/cursor';

import { result as resultSchema } from './schema';
import * as sql from './sql';
import transformTxInfo from './transformTxInfo';
import {
  BurnTxDbResponse,
  BurnTransactionInfo,
  BurnTxsSearchRequest,
  BurnTxsRepo,
} from './types';

export default ({
  drivers: { pg },
  emitEvent,
  timeouts,
}: CommonRepoDependencies): BurnTxsRepo => {
  return {
    get: getByIdPreset({
      name: 'transactions.burn.get',
      sql: sql.get,
      resultSchema,
      transformResult: transformTxInfo,
    })({
      pg: withStatementTimeout(pg, timeouts.get),
      emitEvent,
    }),

    mget: mgetByIdsPreset({
      name: 'transactions.burn.mget',
      matchRequestResult: propEq('id'),
      sql: sql.mget,
      resultSchema,
      transformResult: transformTxInfo,
    })({
      pg: withStatementTimeout(pg, timeouts.mget),
      emitEvent,
    }),

    search: searchPreset<
      Cursor,
      BurnTxsSearchRequest,
      BurnTxDbResponse,
      BurnTransactionInfo
    >({
      name: 'transactions.burn.search',
      sql: sql.search,
      resultSchema,
      transformResult: transformTxInfo,
      cursorSerialization: {
        serialize,
        deserialize,
      },
    })({
      pg: withStatementTimeout(pg, timeouts.search),
      emitEvent,
    }),
  };
};
