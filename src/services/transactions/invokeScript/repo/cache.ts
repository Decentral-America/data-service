import { fromNullable } from 'folktale/maybe';
import * as LRU from 'lru-cache';
import { InvokeScriptTxsCache, RawInvokeScriptTx } from './types';

export const create = (
  size: number,
  maxAgeMillis: number
): InvokeScriptTxsCache => {
  const cache = new LRU<string, RawInvokeScriptTx>({
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
