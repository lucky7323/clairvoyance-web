import { rest } from 'msw';

import { API_URL } from '~/constants';

export const apiAccounts = [
  rest.get(`${API_URL}/accounts`, (req, res, ctx) => {
    console.log(req);
    const data = 10;

    return res(ctx.status(200), ctx.json({ data }));
  }),
];
