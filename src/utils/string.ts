export const shortenAddress = (addr: string, limit = 4) => {
  const zerox = addr.slice(0, 2) == '0x' ? 2 : 0;
  return addr.slice(0, zerox + limit) + '...' + addr.slice(-limit, addr.length);
};
