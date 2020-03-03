import { fromNullable } from 'folktale/maybe';
import * as LRU from 'lru-cache';
import { IssueTxsCache, RawIssueTx } from './types';

export const create = (size: number, maxAgeMillis: number): IssueTxsCache => {
  const cache = new LRU<string, RawIssueTx>({
    max: size,
    maxAge: maxAgeMillis,
  });

  return {
    has: key => {
      return cache.has(key);
    },
    get: key => fromNullable(cache.get(key)),
    set: (key, value) => {
      cache.set(key, value);
    },
  };
};
