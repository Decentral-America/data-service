import { fromNullable } from 'folktale/maybe';
import * as LRU from 'lru-cache';
import { wavesAssetInfo } from './constants';
import { waves } from './grpc/grpc';
import { AssetsCache } from './types';

export const create = (size: number, maxAgeMillis: number): AssetsCache => {
  const cache = new LRU<string, waves.data.assets.AssetInfo>({
    max: size,
    maxAge: maxAgeMillis,
  });

  cache.set('WAVES', wavesAssetInfo);

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
