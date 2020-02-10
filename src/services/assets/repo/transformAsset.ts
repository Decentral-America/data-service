import { Asset, BigNumber } from '@waves/data-entities';
import { encode as base58Encode } from 'bs58';
import { waves } from './grpc';

export const transformDbResponse = (raw: waves.data.assets.AssetInfo): Asset =>
  new Asset({
    id: base58Encode(Buffer.from(raw.assetId)),
    name: raw.name,
    description: raw.description,
    precision: raw.decimals,
    quantity: new BigNumber(raw.totalVolume.toString()),
    minSponsoredFee: parseInt(raw.sponsorship.toString()),
    reissuable: raw.reissuable,
    hasScript: raw.script.length > 0,
    height: 1,
    timestamp: new Date(),
    sender: '',
  });
