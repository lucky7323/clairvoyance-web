import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { api } from '~/api/axios';

interface AccountDiscoversResponse {
  data: number;
}
type AccountDiscoversQueryOptions = UseQueryOptions<
  AccountDiscoversResponse,
  AxiosError<AccountDiscoversResponse, null>
>;
const getAccountDiscoversAxios = async () =>
  (await api.get<AccountDiscoversResponse>('/accounts')).data;

export const useAccountDiscoversQuery = (options?: AccountDiscoversQueryOptions) =>
  useQuery<AccountDiscoversResponse, AxiosError<AccountDiscoversResponse, null>>(
    ['accounts', 'get-account-discovers'],
    getAccountDiscoversAxios,
    options
  );
