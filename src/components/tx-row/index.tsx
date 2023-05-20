import moment from 'moment';
import tw from 'twin.macro';

export const getTypeName = (n: number) => {
  if (n == 0) {
    return 'Empty';
  } else if (n == 1) {
    return 'Change Pub Key';
  } else if (n == 2) {
    return 'Deposit';
  } else if (n == 3) {
    return 'Deposit Nft';
  } else if (n == 4) {
    return 'Transfer';
  } else if (n == 5) {
    return 'Withdraw';
  } else if (n == 6) {
    return 'Create Collection';
  } else if (n == 7) {
    return 'Mint Nft';
  } else if (n == 8) {
    return 'Transfer Nft';
  } else if (n == 9) {
    return 'Atomic Match';
  } else if (n == 10) {
    return 'Cancel Offer';
  } else if (n == 11) {
    return 'Withdraw Nft';
  } else if (n == 12) {
    return 'Full Exit';
  } else if (n == 13) {
    return 'Full Exit Nft';
  } else if (n == 14) {
    return 'Offer';
  } else {
    return 'Update Nft';
  }
};

interface TxParam {
  hash: string;
  height: number;
  txType: number;
  status: number;
  created: number;
  from: string;
  to: string;
}
export const TxRow = ({ hash, height, txType, status, created, from, to }: TxParam) => {
  const statusStr = status === 5 ? 'Verified' : 'Pending...';
  const createdDate = moment(new Date(created * 1000)).format('MMMM-D-YYYY (hh:mm A)');
  const hashStr = hash.slice(0, 4) + '...' + hash.slice(-8, hash.length);
  const fromStr = from.slice(0, 4) + '...' + hash.slice(-2, hash.length);
  const toStr = to.slice(0, 4) + '...' + hash.slice(-2, hash.length);

  return (
    <Wrapper>
      <Text>{hashStr}</Text>
      <Text>{height}</Text>
      <Text>{getTypeName(txType)}</Text>
      {status === 5 ? <Status>{statusStr}</Status> : <Status2>{statusStr}</Status2>}
      <Text>{createdDate}</Text>
      <Text>{fromStr}</Text>
      <Text>{toStr}</Text>
    </Wrapper>
  );
};

export const TxHeader = () => {
  return (
    <Wrapper2>
      <Text>Tx Hash</Text>
      <Text>Height</Text>
      <Text>Type</Text>
      <Text>Status</Text>
      <Text>Created at</Text>
      <Text>From</Text>
      <Text>To</Text>
    </Wrapper2>
  );
};

const Wrapper = tw.div`
  flex justify-between bg-gray7 h-100 my-10 rounded-20 flex-center
`;

const Wrapper2 = tw.div`
  flex justify-between bg-gray6 h-50 my-10 rounded-20 flex-center
`;

const Text = tw.div`
  flex h-30 font-sb-18 text-gray3 text-center min-w-100 flex-center p-30
`;

const Status = tw.div`
  flex h-30 font-sb-18 text-green text-center min-w-100 flex-center p-30
`;

const Status2 = tw.div`
  flex h-30 font-sb-18 text-red
`;
