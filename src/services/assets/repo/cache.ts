import { fromNullable } from 'folktale/maybe';
import * as LRU from 'lru-cache';
import { decode as base58Decode } from 'bs58';
import { waves } from './grpc';
import { AssetsCache } from './types';

export const create = (size: number, maxAgeMillis: number): AssetsCache => {
  const cache = new LRU<string, waves.data.assets.AssetInfo>({
    max: size,
    maxAge: maxAgeMillis,
  });

  cache.set(
    'WAVES',
    new waves.data.assets.AssetInfo({
      assetId: base58Decode('WAVES'),
      name: 'WAVES',
      description: 'Waves official token',
      decimals: 8,
      totalVolume: 100000000000,
      reissuable: false,
      sponsorship: null,
      script: null,
      nft: null,
    })
  );

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
