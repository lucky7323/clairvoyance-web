interface AddTokenOptions {
  address: `0x${string}`;
  symbol: string;
  decimals: number;
  image: string;
}
export const addToken = async (options: AddTokenOptions) => {
  if (!window.ethereum) return;

  try {
    await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
