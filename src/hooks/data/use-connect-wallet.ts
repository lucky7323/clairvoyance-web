import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

import { chains } from '~/configs/setup-wallet';
import { DEFAULT_CHAIN_ID } from '~/constants';

export const useConnectWallet = (chainId: number = DEFAULT_CHAIN_ID) => {
  const { address, isConnected } = useAccount();

  const { data: ensAvatar } = useEnsAvatar({ address });
  const { data: ensName } = useEnsName({ address });

  const { connect, error, isLoading } = useConnect({
    chainId,
    connector: new MetaMaskConnector({ chains }),
  });

  const { disconnect } = useDisconnect();

  return {
    connect,
    disconnect,
    isConnected,
    isConnectLoading: isLoading,
    isConnectError: error,

    address,
    ensAvatar,
    ensName,
  };
};
