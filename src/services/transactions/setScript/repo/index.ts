import { propEq } from 'ramda';

import { withStatementTimeout } from '../../../../db/driver';
import { CommonRepoDependencies } from '../../..';
import { getByIdPreset } from '../../../_common/presets/pg/getById';
import { mgetByIdsPreset } from '../../../_common/presets/pg/mgetByIds';
import { searchPreset } from '../../../_common/presets/pg/search';

import { Cursor, serialize, deserialize } from '../../_common/cursor';
import { transformTxInfo } from '../../_common/transformTxInfo';

import { result } from './schema';
import * as sql from './sql';
import {
  SetScriptTxDbResponse,
  SetScriptTransactionInfo,
  SetScriptTxsSearchRequest,
  SetScriptTxsRepo,
} from './types';

export default ({
  drivers: { pg },
  emitEvent,
  timeouts,
}: CommonRepoDependencies): SetScriptTxsRepo => {
  return {
    get: getByIdPreset({
      name: 'transactions.setScript.get',
      sql: sql.get,
      resultSchema: result,
      transformResult: transformTxInfo,
    })({
      pg: withStatementTimeout(pg, timeouts.get),
      emitEvent,
    }),

    mget: mgetByIdsPreset({
      name: 'transactions.setScript.mget',
      matchRequestResult: propEq('id'),
      sql: sql.mget,
      resultSchema: result,
      transformResult: transformTxInfo,
    })({
      pg: withStatementTimeout(pg, timeouts.mget),
      emitEvent,
    }),

    search: searchPreset<
      Cursor,
      SetScriptTxsSearchRequest,
      SetScriptTxDbResponse,
      SetScriptTransactionInfo
    >({
      name: 'transactions.setScript.search',
      sql: sql.search,
      resultSchema: result,
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
