import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { BlockRaw } from '~/types';

import { zkApi } from '../axios';

interface BlocksResponse {
  code: number;
  message: string;
  total: number;
  blocks: BlockRaw[];
}

interface QueryParams {
  offset?: number;
  limit?: number;
}
type BlocksQueryOptions = UseQueryOptions<BlocksResponse, AxiosError<BlocksResponse, null>>;
type BlocksInfinityQueriesOptions = UseInfiniteQueryOptions<
  BlocksResponse,
  AxiosError<BlocksResponse, null>
>;
const getBlocksAxios = async ({ offset, limit }: QueryParams) => {
  let path = '/blocks?';
  if (offset) {
    path = path + `offset=${offset * 10}&`;
  } else {
    path = path + `offset=0&`;
  }
  if (limit) {
    path = path + `limit=${limit}&`;
  }

  return (await zkApi.get<BlocksResponse>(path.substring(0, path.length - 1))).data;
};

export const useBlocksQuery = (queryParam: QueryParams, options?: BlocksQueryOptions) =>
  useQuery<BlocksResponse, AxiosError<BlocksResponse, null>>(
    ['block-query', 'get-blocks-key', queryParam.offset],
    () => getBlocksAxios(queryParam),
    { ...options }
  );

export const useBlocksInfinityQueries = (
  queryParam: QueryParams,
  options?: BlocksInfinityQueriesOptions
) =>
  useInfiniteQuery<BlocksResponse, AxiosError<BlocksResponse, null>>({
    queryKey: ['block-query', 'block-infinity-query', 'get-blocks-key', queryParam.offset],
    queryFn: ({ pageParam = 0 }) => getBlocksAxios({ ...queryParam, offset: pageParam }),
    getNextPageParam: (lastPage, currentPages) => {
      const total = lastPage.total;
      const count = queryParam.limit || 10;

      const max = Math.ceil(total / count);
      const current = currentPages.length - 1;

      return current + 1 <= max ? current + 1 : undefined;
    },
    ...options,
  });
