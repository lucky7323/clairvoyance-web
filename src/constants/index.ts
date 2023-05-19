export const TEST = import.meta.env.BROWSER;
export const IS_MOCK = import.meta.env.VITE_ENABLE_MOCK === 'true';

export const IS_LOCAL = import.meta.env.VITE_START_ENV === 'local';
export const IS_DEV = import.meta.env.VITE_START_ENV === 'dev';
export const IS_PROD = import.meta.env.VITE_START_ENV === 'prod';

export const IS_MAINNET = IS_PROD;

export const API_URL = IS_PROD ? '' : 'http://localhost:8080';
export const BASE_URL = IS_PROD ? '' : 'http://localhost:3000';

export const BREAKPOINT = {
  SM: 0,
  MD: 848,
  LG: 1280,

  MEDIA_SM: '(min-width: 0px)',
  MEDIA_MD: '(min-width: 848px)',
  MEDIA_LG: '(min-width: 1280px)',
};

export const AWS_REGION = 'us-east-1';

export const CHAIN_ID = {
  ETH: 1,
  GOERLI: 5,
  POLYGON: 137,
};

export const DEFAULT_CHAIN_ID = CHAIN_ID.ETH;

type Contract = 'SAMPLE';
export const CONTRACT_ADDRESS: Record<Contract, `0x${string}`> = {
  SAMPLE: IS_MAINNET ? '0x' : '0x',
};
