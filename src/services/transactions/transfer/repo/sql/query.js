const pg = require('knex')({ client: 'pg' });

const select = pg({ t: 'txs_4' }).select('*');

const selectFromFiltered = filtered =>
  pg
    .with(
      'ts',
      pg({ t: filtered })
        .select({
          tx_uid: 't.tx_uid',
          height: 't.height',
          sender: 'addr.address',
          sender_public_key: 'addr.public_key',
          asset_id: pg.raw(`coalesce(a.asset_id,'WAVES')`),
          attachment: 't.attachment',
          amount: pg.raw('t.amount'),
          recipient_address_uid: 't.recipient_address_uid',
          recipient_alias_uid: 't.recipient_alias_uid',
          fee_asset_uid: 't.fee_asset_uid',
        })
        .leftJoin({ a: 'assets_data' }, 'a.uid', 't.asset_uid')
        .leftJoin({ addr: 'addresses' }, 'addr.uid', 't.sender_uid')
    )
    .select({
      // common
      tx_uid: 't.tx_uid',
      height: 't.height',
      tx_type: 'txs.tx_type',
      id: 'txs.id',
      time_stamp: 'txs.time_stamp',
      signature: 'txs.signature',
      proofs: 'txs.proofs',
      tx_version: 'txs.tx_version',
      fee: pg.raw('txs.fee'),
      sender: 't.sender',
      sender_public_key: 't.sender_public_key',

      // type-specific
      asset_id: 't.asset_id',
      amount: 't.amount',
      recipient: pg.raw(
        'coalesce(recipient_alias.alias, recipient_addr.address)'
      ),
      fee_asset: pg.raw("coalesce(fa.asset_id, 'WAVES')"),
      attachment: 't.attachment',
    })
    .from({ t: 'ts' })
    .leftJoin('txs', 'txs.uid', 't.tx_uid')
    .leftJoin({ fa: 'assets_data' }, 'fa.uid', 't.fee_asset_uid')
    .leftJoin(
      { recipient_addr: pg('addresses').select('uid', 'address') },
      'recipient_addr.uid',
      't.recipient_address_uid'
    )
    .leftJoin(
      { recipient_alias: 'txs_10' },
      'recipient_alias.tx_uid',
      't.recipient_alias_uid'
    );

module.exports = {
  select,
  selectFromFiltered,
};
