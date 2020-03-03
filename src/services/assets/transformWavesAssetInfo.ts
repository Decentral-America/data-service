import { Asset, BigNumber } from '@waves/data-entities';
import { waves } from './repo/grpc/grpc';

export const transformWavesAssetInfo = (
  raw: waves.data.assets.AssetInfo & waves.data.assets.WavesInfo
): Asset =>
  new Asset({
    id: 'WAVES',
    name: raw.name,
    description: raw.description,
    precision: raw.decimals,
    quantity: new BigNumber(raw.totalVolume.toString()),
    minSponsoredFee: 0,
    reissuable: raw.reissuable,
    hasScript: raw.script.length > 0,
    height: 0,
    timestamp: new Date('2016-04-11T21:00:00.000Z'),
    sender: '',
  });
