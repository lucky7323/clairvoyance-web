import { bscTestnet } from '@wagmi/chains';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { getDefaultClient } from 'connectkit';
import { configureChains, createClient, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const chains = [mainnet, bscTestnet];
const { provider, webSocketProvider } = configureChains(chains, [publicProvider()]);

const client = createClient(
  getDefaultClient({
    autoConnect: true,
    chains,
    provider,
    webSocketProvider,
    appName: 'clairvoyance',
  })
);

export { chains, client };
