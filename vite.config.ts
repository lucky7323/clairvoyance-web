import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },

  resolve: {
    alias: [{ find: '~', replacement: resolve(__dirname, 'src') }],
  },

  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vender_react: ['react', 'react-dom', 'react-router-dom'],
          vender_animation: ['gsap', 'framer-motion', 'lottie-web'],
          vender_web3_ethers: ['ethers', 'wagmi'],
          vender_web3_connectkit: ['connectkit'],
        },
      },
    },
  },

  plugins: [
    react({
      babel: {
        plugins: [
          ['auto-import', { declarations: [{ default: 'React', path: 'react' }] }],
          'babel-plugin-macros',
          [
            '@emotion/babel-plugin-jsx-pragmatic',
            { export: 'jsx', import: '__cssprop', module: '@emotion/react' },
          ],
          ['@babel/plugin-transform-react-jsx', { pragma: '__cssprop' }, 'twin.macro'],
        ],
      },
    }),
    tsconfigPaths(),
  ],
});
