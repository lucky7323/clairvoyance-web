import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { TxRaw } from '~/types';

import { zkApi } from '../axios';

interface TxsResponse {
  code: number;
  message: string;
  total: number;
  txs: TxRaw[];
}

interface QueryParams {
  offset?: number;
  limit?: number;
}
type TxsQueryOptions = UseQueryOptions<TxsResponse, AxiosError<TxsResponse, null>>;
type TxsInfinityQueriesOptions = UseInfiniteQueryOptions<
  TxsResponse,
  AxiosError<TxsResponse, null>
>;
const getTxsAxios = async ({ offset, limit }: QueryParams) => {
  let path = '/txs?';
  if (offset) {
    path = path + `offset=${offset * 10}&`;
  } else {
    path = path + `offset=0&`;
  }
  if (limit) {
    path = path + `limit=${limit}&`;
  }

  return (await zkApi.get<TxsResponse>(path.substring(0, path.length - 1))).data;
};

export const useTxsQuery = (queryParam: QueryParams, options?: TxsQueryOptions) =>
  useQuery<TxsResponse, AxiosError<TxsResponse, null>>(
    ['tx-query', 'get-txs-key', queryParam.offset],
    () => getTxsAxios(queryParam),
    { ...options }
  );

export const useTxsInfinityQueries = (
  queryParam: QueryParams,
  options?: TxsInfinityQueriesOptions
) =>
  useInfiniteQuery<TxsResponse, AxiosError<TxsResponse, null>>({
    queryKey: ['tx-query', 'tx-infinity-query', 'get-txs-key', queryParam.offset],
    queryFn: ({ pageParam = 0 }) => getTxsAxios({ ...queryParam, offset: pageParam }),
    getNextPageParam: (lastPage, currentPages) => {
      const total = lastPage.total;
      const count = queryParam.limit || 10;

      const max = Math.ceil(total / count);
      const current = currentPages.length - 1;

      return current + 1 <= max ? current + 1 : undefined;
    },
    ...options,
  });
