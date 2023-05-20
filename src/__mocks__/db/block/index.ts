// import { faker } from '@faker-js/faker';
import { factory, manyOf, primaryKey } from '@mswjs/data';

import { blockData } from '~/__mocks__/data/block';

export const blockDB = factory({
  blocks: {
    id: primaryKey(Number),
    numTx: Number,
    timestamp: Number,
    txs: manyOf('txs'),
  },
  txs: {
    id: primaryKey(String),
    hash: String,
    type: Number,
    amount: String,
    info: String,
    status: Number,
    index: Number,
    gas_fee_asset_id: Number,
    gas_fee: String,
    nft_index: Number,
    collection_id: Number,
    asset_id: Number,
    asset_name: String,
    native_address: String,
    extra_info: String,
    memo: String,
    account_index: Number,
    l1_address: String,
    nonce: Number,
    expire_at: Number,
    block_height: Number,
    created_at: Number,
    verify_at: Number,
    state_root: String,
    from_account_index: Number,
    from_l1_address: String,
    to_account_index: Number,
    to_l1_address: String,
  },
});

blockData.map(v => {
  const txs = v.txs.map(tx => {
    return blockDB.txs.create(tx);
  });
  blockDB.blocks.create({
    id: v.id,
    numTx: v.numTx,
    timestamp: v.timestamp,
    txs: txs,
  });
});
