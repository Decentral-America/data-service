import { Asset, BigNumber } from '@waves/data-entities';
import { encode as base58Encode } from 'bs58';
import { waves } from './repo/grpc/grpc';
import { TransactionInfo } from '../../types';

export const transformAssetInfo = (
  raw: waves.data.assets.AssetInfo,
  tx: TransactionInfo
): Asset =>
  new Asset({
    id: base58Encode(Buffer.from(raw.assetId)),
    name: raw.name,
    description: raw.description,
    precision: raw.decimals,
    quantity: new BigNumber(raw.totalVolume.toString()),
    minSponsoredFee: parseInt(raw.sponsorship.toString()),
    reissuable: raw.reissuable,
    hasScript: raw.script.length > 0,
    height: (tx as any).height,
    timestamp: tx.timestamp,
    sender: (tx as any).sender,
  });
