import { propEq } from 'ramda';

import { withStatementTimeout } from '../../../../db/driver';
import { CommonRepoDependencies } from '../../..';
import { getByIdPreset } from '../../../_common/presets/pg/getById';
import { mgetByIdsPreset } from '../../../_common/presets/pg/mgetByIds';
import { searchPreset } from '../../../_common/presets/pg/search';

import { Cursor, serialize, deserialize } from '../../_common/cursor';

import { result } from './schema';
import * as sql from './sql';
import transformTxInfo from './transformTxInfo';
import {
  ExchangeTxDbResponse,
  ExchangeTransactionInfo,
  ExchangeTxsSearchRequest,
  ExchangeTxsRepo,
} from './types';

export default ({
  drivers: { pg },
  emitEvent,
  timeouts,
}: CommonRepoDependencies): ExchangeTxsRepo => {
  return {
    get: getByIdPreset({
      name: 'transactions.exchange.get',
      sql: sql.get,
      resultSchema: result,
      transformResult: transformTxInfo,
    })({
      pg: withStatementTimeout(pg, timeouts.get),
      emitEvent,
    }),

    mget: mgetByIdsPreset({
      name: 'transactions.exchange.mget',
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
      ExchangeTxsSearchRequest,
      ExchangeTxDbResponse,
      ExchangeTransactionInfo
    >({
      name: 'transactions.exchange.search',
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
