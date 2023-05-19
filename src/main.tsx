import '~/styles/index.css';
import '~/configs/polyfill-wallet';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectKitProvider } from 'connectkit';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { WagmiConfig } from 'wagmi';

import App from '~/app.tsx';
import { client } from '~/configs/setup-wallet';

const queryClient = new QueryClient();

gsap.registerPlugin(ScrollTrigger, CustomEase);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiConfig client={client}>
        <ConnectKitProvider theme="auto" mode="light">
          <App />
        </ConnectKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  </React.StrictMode>
);
