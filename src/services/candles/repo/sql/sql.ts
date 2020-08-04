import * as knex from 'knex';
import { omit } from 'ramda';
import { interval, CandleInterval } from '../../../../types';
import { unsafeIntervalsFromStrings } from '../../../../utils/interval';
import { highestDividerLessThan } from './utils';
import { CandlesSearchRequest } from '../../repo';

const pg = knex({ client: 'pg' });

const FIELDS = {
  time_start: 'c.time_start',
  amount_asset_uid: 'c.amount_asset_uid',
  price_asset_uid: 'c.price_asset_uid',
  low: 'c.low',
  high: 'c.high',
  volume: 'c.volume',
  quote_volume: 'c.quote_volume',
  max_height: 'c.max_height',
  txs_count: 'c.txs_count',
  weighted_average_price: 'c.weighted_average_price',
  open: 'c.open',
  close: 'c.close',
  interval: 'c.interval',
  matcher_address: 'c.matcher_address',
};

const FULL_FIELDS: Record<string, string> = {
  ...omit(
    ['amount_asset_uid', 'price_asset_uid', 'matcher_address'],
    FIELDS
  ),
  amount_asset_id: 'a.asset_id',
  price_asset_id: 'p.asset_id',
  matcher: 'matcher_address',
  a_dec: 'a.decimals',
  p_dec: 'p.decimals',
};

const DIVIDERS = [
  CandleInterval.Minute1,
  CandleInterval.Minute5,
  CandleInterval.Minute15,
  CandleInterval.Minute30,
  CandleInterval.Hour1,
  CandleInterval.Hour2,
  CandleInterval.Hour3,
  CandleInterval.Hour4,
  CandleInterval.Hour6,
  CandleInterval.Hour12,
  CandleInterval.Day1,
  CandleInterval.Week1,
  CandleInterval.Month1,
];

export interface CandleSelectionParams {
  amountAsset: string;
  priceAsset: string;
  timeStart: Date;
  timeEnd: Date;
  interval: string;
  matcher: string;
}

export const selectCandles = ({
  amountAsset,
  priceAsset,
  timeStart,
  timeEnd,
  matcher,
  interval: inter,
}: CandleSelectionParams): knex.QueryBuilder =>
  pg({ c: 'candles' })
    .select(FIELDS)
    .whereIn('amount_asset_uid', function() {
      this.select('uid')
        .from('assets_data')
        .where('asset_id', amountAsset)
        .limit(1);
    })
    .whereIn('price_asset_uid', function() {
      this.select('uid')
        .from('assets_data')
        .where('asset_id', priceAsset)
        .limit(1);
    })
    .where('time_start', '>=', timeStart)
    .where('time_start', '<=', timeEnd)
    .where('matcher_address', matcher)
    .where(
      'interval',
      // should always be valid after validation
      highestDividerLessThan(
        interval(inter).unsafeGet(),
        unsafeIntervalsFromStrings(DIVIDERS)
      ).matchWith({
        Ok: ({ value: i }) => i.source,
        Error: ({ value: error }) => CandleInterval.Minute1,
      })
    );

export const sql = ({
  amountAsset,
  priceAsset,
  timeStart,
  timeEnd,
  interval: inter,
  matcher,
}: CandlesSearchRequest): string =>
  pg('candles')
    .select(FULL_FIELDS)
    .from({
      c: selectCandles({
        amountAsset,
        priceAsset,
        timeStart,
        timeEnd,
        interval: inter,
        matcher,
      }),
    })
    .innerJoin({ a: 'assets_data' }, 'c.amount_asset_uid', 'a.uid')
    .innerJoin({ p: 'assets_data' }, 'c.price_asset_uid', 'p.uid')
    .orderBy('c.time_start', 'asc')
    .toString();

module.exports = {
  sql,
};
