import { ethers } from 'ethers';
import { rest } from 'msw';

import { blockDB } from '~/__mocks__/db/block';
import { API_URL } from '~/constants';

export const apiAccounts = [
  rest.get(`${API_URL}/transactions`, async (_req, res, ctx) => {
    const tmp: { timestamp: Date; numTx: number }[] = [];

    for (let i = 3; i < 22; ++i) {
      const tx = blockDB.txs.findMany({
        where: {
          created_at: {
            gte: new Date(2023, 4, i).getTime() / 1000,
            lt: new Date(2023, 4, i + 1).getTime() / 1000,
          },
        },
      });
      tmp.push({ timestamp: new Date(2023, 4, i), numTx: tx.length });
    }

    const txs: number[] = [];
    tmp.reduce(function (a, b, i) {
      return (txs[i] = a + b.numTx);
    }, 0);

    const data = tmp.map((v, i) => {
      return { numTx: txs[i], timestamp: v.timestamp };
    });

    return res(ctx.status(200), ctx.json({ data }));
  }),

  rest.get(`${API_URL}/accounts`, async (_req, res, ctx) => {
    const tmp: { timestamp: Date; amount: number }[] = [];

    for (let i = 3; i < 22; ++i) {
      const register = blockDB.txs.findMany({
        where: {
          type: { equals: 1 },
          created_at: {
            gte: new Date(2023, 4, i).getTime() / 1000,
            lt: new Date(2023, 4, i + 1).getTime() / 1000,
          },
        },
      });
      tmp.push({ timestamp: new Date(2023, 4, i), amount: register.length });
    }

    const accounts: number[] = [];
    tmp.reduce(function (a, b, i) {
      return (accounts[i] = a + b.amount);
    }, 0);

    const data = tmp.map((v, i) => {
      return { amount: accounts[i], timestamp: v.timestamp };
    });

    return res(ctx.status(200), ctx.json({ data }));
  }),

  rest.get(`${API_URL}/deposit-withdraw`, async (_req, res, ctx) => {
    const data: {
      timestamp: Date;
      bnb: { deposit: number; withdraw: number };
      usdc: { deposit: number; withdraw: number };
      dai: { deposit: number; withdraw: number };
    }[] = [];
    for (let i = 3; i < 22; ++i) {
      const depositBnb = blockDB.txs.findMany({
        where: {
          type: { equals: 2 },
          created_at: {
            gte: new Date(2023, 4, i).getTime() / 1000,
            lt: new Date(2023, 4, i + 1).getTime() / 1000,
          },
          asset_name: {
            equals: 'BNB',
          },
        },
      });

      let depositBnbAmount = 0;
      depositBnb.map(v => {
        depositBnbAmount += Number(ethers.utils.formatUnits(v.amount, 18));
      });

      const depositUsdc = blockDB.txs.findMany({
        where: {
          type: { equals: 2 },
          created_at: {
            gte: new Date(2023, 4, i).getTime() / 1000,
            lt: new Date(2023, 4, i + 1).getTime() / 1000,
          },
          asset_name: {
            equals: 'USDC',
          },
        },
      });

      let depositUsdcAmount = 0;
      depositUsdc.map(v => {
        depositUsdcAmount += Number(ethers.utils.formatUnits(v.amount, 18));
      });

      const depositDai = blockDB.txs.findMany({
        where: {
          type: { equals: 2 },
          created_at: {
            gte: new Date(2023, 4, i).getTime() / 1000,
            lt: new Date(2023, 4, i + 1).getTime() / 1000,
          },
          asset_name: {
            equals: 'DAI',
          },
        },
      });

      let depositDaiAmount = 0;
      depositDai.map(v => {
        depositDaiAmount += Number(ethers.utils.formatUnits(v.amount, 18));
      });

      const withdrawBnb = blockDB.txs.findMany({
        where: {
          type: { equals: 5 },
          created_at: {
            gte: new Date(2023, 4, i).getTime() / 1000,
            lt: new Date(2023, 4, i + 1).getTime() / 1000,
          },
          asset_name: {
            equals: 'BNB',
          },
        },
      });

      let withdrawBnbAmount = 0;
      withdrawBnb.map(v => {
        withdrawBnbAmount += Number(ethers.utils.formatUnits(v.amount, 18));
      });

      const withdrawUsdc = blockDB.txs.findMany({
        where: {
          type: { equals: 5 },
          created_at: {
            gte: new Date(2023, 4, i).getTime() / 1000,
            lt: new Date(2023, 4, i + 1).getTime() / 1000,
          },
          asset_name: {
            equals: 'USDC',
          },
        },
      });

      let withdrawUsdcAmount = 0;
      withdrawUsdc.map(v => {
        withdrawUsdcAmount += Number(ethers.utils.formatUnits(v.amount, 18));
      });

      const withdrawDai = blockDB.txs.findMany({
        where: {
          type: { equals: 5 },
          created_at: {
            gte: new Date(2023, 4, i).getTime() / 1000,
            lt: new Date(2023, 4, i + 1).getTime() / 1000,
          },
          asset_name: {
            equals: 'DAI',
          },
        },
      });

      let withdrawDaiAmount = 0;
      withdrawDai.map(v => {
        withdrawDaiAmount += Number(ethers.utils.formatUnits(v.amount, 18));
      });

      data.push({
        timestamp: new Date(2023, 4, i),
        bnb: {
          deposit: depositBnbAmount,
          withdraw: -withdrawBnbAmount,
        },
        usdc: {
          deposit: depositUsdcAmount,
          withdraw: -withdrawUsdcAmount,
        },
        dai: {
          deposit: depositDaiAmount,
          withdraw: -withdrawDaiAmount,
        },
      });
    }

    return res(ctx.status(200), ctx.json({ data }));
  }),

  ///////////////////// fees
  rest.get(`${API_URL}/fees`, async (_req, res, ctx) => {
    const data: {
      timestamp: Date;
      fee: number;
    }[] = [];
    for (let i = 3; i < 22; ++i) {
      const feeData = blockDB.txs.findMany({
        where: {
          created_at: {
            gte: new Date(2023, 4, i).getTime() / 1000,
            lt: new Date(2023, 4, i + 1).getTime() / 1000,
          },
        },
      });

      let feeAmount = 0;
      feeData.map(v => {
        feeAmount += Number(ethers.utils.formatUnits(v.gas_fee, 18));
      });

      data.push({
        timestamp: new Date(2023, 4, i),
        fee: feeAmount,
      });
    }

    return res(ctx.status(200), ctx.json({ data }));
  }),
];
