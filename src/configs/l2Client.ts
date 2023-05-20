/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client } from '@bnb-chain/zkbnb-js-sdk';

export enum TxType {
  Empty = 0,
  ChangePubKey,
  Deposit,
  DepositNFT,
  Transfer,
  Withdraw,
  CreateCollection,
  MintNFT,
  TransferNFT,
  AtomicMatch,
  CancelOffer,
  WithdrawNft,
  FullExit,
  FullExitNFT,
  Offer,
  UpdateNFT,
}

export default class L2Client {
  static instance: L2Client;
  private client: any;

  async init() {
    this.client = new Client('https://api-testnet.zkbnbchain.org');
  }

  async getData(): Promise<string> {
    // const res = await this.client.getAccountInfoByAccountIndex(59);

    // console.log(res);

    return '';
  }

  /**
   * Get ZK instance (Lazy singleton pattern)
   * @returns {L2Client}
   */
  static getInstance(): L2Client {
    if (!L2Client.instance) {
      L2Client.instance = new L2Client();
    }
    return L2Client.instance;
  }
}
