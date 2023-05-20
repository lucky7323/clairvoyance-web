import { rest } from 'msw';

import { blockDB } from '~/__mocks__/db/block';
import { API_URL } from '~/constants';

export const apiAccounts = [
  rest.get(`${API_URL}/transactions`, async (_req, res, ctx) => {
    const blocks = blockDB.blocks.getAll();
    const numTx: number[] = [];
    blocks.reduce(function (a, b, i) {
      return (numTx[i] = a + b.numTx);
    }, 0);

    const data = blocks.map((v, i) => {
      return { numTx: numTx[i], timestamp: new Date(v.timestamp * 1000) };
    });
    return res(ctx.status(200), ctx.json({ data }));
  }),

  rest.get(`${API_URL}/accounts`, async (_req, res, ctx) => {
    const blocks = blockDB.blocks.getAll();
    const tmp: { timestamp: Date; amount: number }[] = [];

    blocks.map(v => {
      let cnt = 0;
      v.txs.map(tx => {
        if (tx.type === 1) {
          cnt += 1;
        }
      });
      tmp.push({ timestamp: new Date(v.timestamp * 1000), amount: cnt });
    });

    const accounts: number[] = [];
    tmp.reduce(function (a, b, i) {
      return (accounts[i] = a + b.amount);
    }, 0);

    const data = tmp.map((v, i) => {
      return { amount: accounts[i], timestamp: v.timestamp };
    });

    return res(ctx.status(200), ctx.json({ data }));
  }),
];
