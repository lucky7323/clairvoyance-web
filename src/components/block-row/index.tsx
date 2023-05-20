import moment from 'moment';
import tw from 'twin.macro';

interface BlockParam {
  height: number;
  status: number;
  hash: string;
  commit: number;
  verified: number;
}
export const BlockRow = ({ height, status, hash, commit, verified }: BlockParam) => {
  const statusStr = status === 5 ? 'Verified and Executed' : 'Pending...';
  const commitDate = moment(new Date(commit * 1000)).format('MMMM-D-YYYY (hh:mm A)');
  const verfiedDate = moment(new Date(verified * 1000)).format('MMMM-D-YYYY (hh:mm A)');
  const hashStr = hash.slice(0, 4) + '...' + hash.slice(-8, hash.length);

  return (
    <Wrapper>
      <Text>{height}</Text>
      {status === 5 ? <Status>{statusStr}</Status> : <Status2>{statusStr}</Status2>}
      <Text>{hashStr}</Text>
      <Text>{commitDate}</Text>
      <Text>{verfiedDate}</Text>
    </Wrapper>
  );
};

export const BlockHeader = () => {
  return (
    <Wrapper2>
      <Text>Block Height</Text>
      <Text>Status</Text>
      <Text>Root Hash</Text>
      <Text>Committed at</Text>
      <Text>Verified at</Text>
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
