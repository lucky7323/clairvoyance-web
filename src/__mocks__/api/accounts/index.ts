import axios from 'axios';
import { rest } from 'msw';

import { blockDB } from '~/__mocks__/db/block';
import { API_URL } from '~/constants';

export const apiAccounts = [
  rest.get(`${API_URL}/accounts`, (req, res, ctx) => {
    console.log(req);
    const data = 10;

    return res(ctx.status(200), ctx.json({ data }));
  }),

  rest.get(`${API_URL}/test`, async (req, res, ctx) => {
    // blockDB.txs.create();
    // blockDB.blocks.create();
    console.log(req);

    const blocks = blockDB.blocks.getAll();
    const cumulativeSum = (
      sum => value =>
        (sum += value)
    )(0);

    // const data = blocks.map(v => {
    //   return { numTx: v.numTx, timestamp: v.timestamp };
    // });

    const numTx: number[] = [];
    blocks.reduce(function (a, b, i) {
      return (numTx[i] = a + b.numTx);
    }, 0);

    const data = blocks.map((v, i) => {
      return { numTx: numTx[i], timestamp: new Date(v.timestamp * 1000) };
    });
    // const headers = {
    //   Accept: 'application/json',
    // };

    // const zkapi = axios.create({
    //   baseURL: 'https://api-testnet.zkbnbchain.org',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    // });

    // const rr = await zkapi.get('/api/v1/blockTxs?by=block_height&value=1', {
    //   method: 'GET',
    //   headers: headers,
    // });
    // console.log(rr);

    // const network: Network = 'bscTestnet';
    // const zkProvider = await getZkBNBDefaultProvider(network);
    // setZkProvider(zkProvider);

    // // init l2 client
    // const l2client = L2Client.getInstance();
    // await l2client.init();

    // const result = await l2client.getData();
    // console.log(result);

    return res(ctx.status(200), ctx.json({ data }));
  }),
];
