import path from 'path';

import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [path.dirname(require.resolve(path.join('@storybook/addon-essentials', 'package.json')))],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: {
    name: path.dirname(require.resolve(path.join('@storybook/react-vite', 'package.json'))) as any,
    options: {},
  },
  async viteFinal(config) {
    return config;
  },
};
export default config;
