import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { api } from '~/api/axios';

interface TransactionsResponse {
  data: { numTx: number; timestamp: Date }[];
}
type TransactionsQueryOptions = UseQueryOptions<
  TransactionsResponse,
  AxiosError<TransactionsResponse, null>
>;
const getTransactionsAxios = async () =>
  (await api.get<TransactionsResponse>('/transactions')).data;

export const useTransactionsQuery = (options?: TransactionsQueryOptions) =>
  useQuery<TransactionsResponse, AxiosError<TransactionsResponse, null>>(
    ['transactions', 'get-transactions'],
    getTransactionsAxios,
    options
  );

interface AccountsResponse {
  data: { timestamp: Date; amount: number }[];
}
type AccountsQueryOptions = UseQueryOptions<AccountsResponse, AxiosError<AccountsResponse, null>>;
const getAccountsAxios = async () => (await api.get<AccountsResponse>('/accounts')).data;

export const useAccountsQuery = (options?: AccountsQueryOptions) =>
  useQuery<AccountsResponse, AxiosError<AccountsResponse, null>>(
    ['accounts', 'get-accounts'],
    getAccountsAxios,
    options
  );
