import { useEffect } from 'react';

export const useChangeWallet = () => {
  const handleAccountChange = (accounts: string[]) => {
    const currentAccount = accounts[0];

    if (!currentAccount) return;
    // do something
  };

  useEffect(() => {
    if (!window?.ethereum) return;

    window?.ethereum?.on?.('accountsChanged', handleAccountChange);

    return () => {
      window?.ethereum?.removeListener?.('accountsChanged', handleAccountChange);
    };
  });
};
