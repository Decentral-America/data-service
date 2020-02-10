import { makeGenericClientConstructor, credentials, Metadata } from 'grpc';
import { RPCImpl } from 'protobufjs';
import { waves } from './grpc';

const Client = makeGenericClientConstructor({}, 'Assets', {});

const client = new Client(
  'grpc.wavesplatform.com:80',
  credentials.createInsecure()
);

const meta = new Metadata();
meta.add('x-grpc-network', 'mainnet');

const getOrMgetRpcImpl: RPCImpl = (method, req, cb) =>
  client.makeUnaryRequest(
    `/waves.data.assets.Assets/${method.name}`,
    req => Buffer.from(req),
    res => res,
    req,
    meta,
    {},
    cb
  );

const searchRpcImpl: RPCImpl = (method, req) =>
  client.makeServerStreamRequest(
    `/waves.data.assets.Assets/${method.name}`,
    req => Buffer.from(req),
    res => res,
    req,
    meta,
    {}
  );

export default {
  Get: req => waves.data.assets.Assets.create(getOrMgetRpcImpl, false, false).rpcCall('Get', waves.data.assets.GetAssetRequest),
  GetBatch: waves.data.assets.Assets.create(getOrMgetRpcImpl, false, false)
    .getBatch,
  Search: searchRpcImpl,
};
