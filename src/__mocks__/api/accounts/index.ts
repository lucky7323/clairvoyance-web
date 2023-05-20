import axios from 'axios';
import { rest } from 'msw';

import L2Client from '~/configs/l2Client';
import { API_URL } from '~/constants';

export const apiAccounts = [
  rest.get(`${API_URL}/accounts`, (req, res, ctx) => {
    console.log(req);
    const data = 10;

    return res(ctx.status(200), ctx.json({ data }));
  }),

  rest.get(`${API_URL}/test`, async (req, res, ctx) => {
    console.log(req);

    const headers = {
      Accept: 'application/json',
    };

    const zk = axios.create({
      baseURL: 'https://api-testnet.zkbnbchain.org',
      headers: {
        'Content-type': 'application/json',
      },
    });

    const rr = await zk.get('/api/v1/GetNftByNftIndex?nft_index=0', {
      method: 'GET',
      headers: headers,
    });
    console.log(rr);

    // const network: Network = 'bscTestnet';
    // const zkProvider = await getZkBNBDefaultProvider(network);
    // setZkProvider(zkProvider);

    // init l2 client
    const l2client = L2Client.getInstance();
    await l2client.init();

    const result = await l2client.getData();
    console.log(result);

    const data = 10;
    return res(ctx.status(200), ctx.json({ data }));
  }),
];
