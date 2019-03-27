import { QueryBuilder } from 'knex';
import * as knex from 'knex';
import { repeat } from 'ramda';
import { Interval, Unit, interval } from '../../../types';
import { add, trunc } from '../../../utils/date';
import { fromMilliseconds } from '../../../utils/interval';
import { highestDividerLessThan, numberToUnitsPolynom } from './utils';

const pg = knex({ client: 'pg' });

const FIELDS = [
  'time_start',
  'amount_asset_id',
  'price_asset_id',
  'low',
  'high',
  'volume',
  'quote_volume',
  'max_height',
  'txs_count',
  'weighted_average_price',
  'open',
  'close',
  'interval_in_secs',
];

const FIELDS_WITH_DECIMALS: (string | Record<string, string>)[] = [
  ...FIELDS,
  { a_dec: 'a_dec.decimals' },
  { p_dec: 'p_dec.decimals' },
];

const DIVIDERS = ['1m', '5m', '15m', '30m', '1h', '3h', '6h', '12h', '1d'];

/** selectCandles :: { amountAsset: string, priceAsset: string, timeStart: Date, timeEnd: Date, interval: string } -> knex.QueryBuilder */
export const selectCandles = ({
  amountAsset,
  priceAsset,
  timeStart,
  timeEnd,
  interval: inter,
}: {
  amountAsset: string;
  priceAsset: string;
  timeStart: Date;
  timeEnd: Date;
  interval: string;
}): QueryBuilder =>
  pg('candles')
    .select(FIELDS)
    .where('amount_asset_id', amountAsset)
    .where('price_asset_id', priceAsset)
    .where('time_start', '>=', timeStart)
    .where('time_start', '<=', timeEnd)
    .where(
      'interval_in_secs',
      // should always be valid after validation
      highestDividerLessThan(interval(inter).unsafeGet(), DIVIDERS).length /
        1000
    );

/** periodsToQueries :: { amountAsset: string, priceAsset: string, timeStart: Date, periods: Interval[] } -> QueryBuilder[] */
export const periodsToQueries = ({
  amountAsset,
  priceAsset,
  timeStart,
  periods,
}: {
  amountAsset: string;
  priceAsset: string;
  timeStart: Date;
  periods: Interval[];
}): any[] => {
  const queries: QueryBuilder[] = [];

  let itTimestamp = new Date(trunc(Unit.Minute, timeStart)).getTime();
  
  periods.map(period => {
    const timeEnd = add(period, new Date(itTimestamp));

    queries.push(
      selectCandles({
        amountAsset,
        priceAsset,
        timeStart: new Date(itTimestamp),
        timeEnd: timeEnd,
        interval: period.source,
      })
    );

    itTimestamp = timeEnd.getTime();
  });

  return queries;
};

/** sql :: { string, string, { timeStart: Date, timeEnd: Date, interval: string } } -> string */
export const sql = ({
  amountAsset,
  priceAsset,
  params: { timeStart, timeEnd, interval: inter },
}: {
  amountAsset: string;
  priceAsset: string;
  params: {
    timeStart: Date;
    timeEnd: Date;
    interval: string;
  };
}) => {
  // should always be valid after validation
  const paramsInterval = interval(inter).unsafeGet();

  const ts = new Date(trunc(paramsInterval.unit, timeEnd));
  const te = new Date(trunc(Unit.Minute, timeEnd));
  const periodInMinutes = (te.getTime() - ts.getTime()) / (1000 * 60);
  
  const periodsForQueries = numberToUnitsPolynom(
    DIVIDERS.map(d => interval(d).unsafeGet().length / (1000 * 60)).sort(
      (a, b) => b - a
    ),
    periodInMinutes
  ).reduce<Interval[]>((periods, polynom) => {
    return [
      ...periods,
      ...repeat(
        fromMilliseconds(polynom[0] * 1000 * 60).unsafeGet(),
        polynom[1]
      ),
    ];
  }, []);
  
  return pg('candles')
    .select(FIELDS_WITH_DECIMALS)
    .from(
      selectCandles({
        amountAsset,
        priceAsset,
        timeStart,
        timeEnd,
        interval: inter,
      })
        .union(
          periodsToQueries({
            amountAsset,
            priceAsset,
            timeStart: ts,
            periods: periodsForQueries,
          })
        )
        .as('c')
    )
    .innerJoin(
      { a_dec: 'asset_decimals' },
      'c.amount_asset_id',
      'a_dec.asset_id'
    )
    .innerJoin(
      { p_dec: 'asset_decimals' },
      'c.price_asset_id',
      'p_dec.asset_id'
    )
    .orderBy('c.time_start', 'asc')
    .toString();
};

/** sql :: string -> string */
export const assetDecimals = (asset: string) =>
  pg('asset_decimals')
    .select('decimals')
    .where('asset_id', asset)
    .toString();

module.exports = {
  assetDecimals,
  periodsToQueries,
  sql,
};
