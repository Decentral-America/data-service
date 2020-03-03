import * as Long from 'long';
import { decode as base58Decode } from 'bs58';
import { waves } from './grpc/grpc';

export const wavesAssetInfo = new waves.data.assets.AssetInfo({
  assetId: base58Decode('WAVES'),
  name: 'WAVES',
  description: 'Waves official token',
  decimals: 8,
  totalVolume: Long.fromNumber(100000000000, true),
  reissuable: false,
  sponsorship: null,
  script: null,
  nft: null,
});
