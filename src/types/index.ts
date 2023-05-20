export interface Tx extends TxRaw {
  id: string; // hash
}

export interface TxRaw {
  hash: string;
  type: number;
  amount: string;
  info: string;
  status: number;
  index: number;
  gas_fee_asset_id: number;
  gas_fee: string;
  nft_index: number;
  collection_id: number;
  asset_id: number;
  asset_name: string;
  native_address: string;
  extra_info: string;
  memo: string;
  account_index: number;
  l1_address: string;
  nonce: number;
  expire_at: number;
  block_height: number;
  created_at: number;
  verify_at: number;
  state_root: string;
  from_account_index: number;
  from_l1_address: string;
  to_account_index: number;
  to_l1_address: string;
}

export interface Block {
  id: number; // blockNumber
  numTx: number;
  timestamp: number;
  txs: Tx[];
}

export interface BlockRaw {
  code: number;
  message: string;
  commitment: string;
  height: number;
  state_root: string;
  priority_operations: number;
  pending_on_chain_operations_hash: string;
  pending_on_chain_operations_pub_data: string;
  committed_tx_hash: string;
  committed_at: number;
  verified_tx_hash: string;
  verified_at: number;
  txs: TxRaw[];
  status: number;
  size: number;
}
