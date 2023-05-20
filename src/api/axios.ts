import axios from 'axios';

import { API_URL, ZK_API_URL } from '~/constants';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const zkApi = axios.create({
  baseURL: ZK_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
