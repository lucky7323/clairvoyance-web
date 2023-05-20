import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import tw from 'twin.macro';

import { useAccountDiscoversQuery, useTestQuery } from '~/api/accounts';
import { Footer } from '~/components/footer';
import { Gnb } from '~/components/gnb';
import { Sidebar } from '~/components/sidebar';

const MainPage = () => {
  const { data } = useAccountDiscoversQuery({
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: true,
  });

  const { data: txData } = useTestQuery({
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: true,
  });

  console.log('data: ', data);
  console.log('test: ', txData);

  const chartData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <Wrapper>
      <Sidebar />
      <InnerWrapper>
        <GnbWrapper>
          <Gnb />
        </GnbWrapper>
        <AccountsChart>
          <ResponsiveContainer width={'100%'} height={'100%'} minHeight={300}>
            <LineChart
              width={900}
              height={300}
              data={chartData}
              margin={{
                top: 35,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </AccountsChart>
        <TransactionChart>
          <ResponsiveContainer width={'100%'} height={'100%'} minHeight={300}>
            {txData?.data ? (
              <LineChart
                width={900}
                height={300}
                data={txData?.data}
                margin={{
                  top: 35,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="numTx" stroke="#82ca9d" />
              </LineChart>
            ) : (
              <></>
            )}
          </ResponsiveContainer>
        </TransactionChart>
        <Footer />
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex w-full h-full bg-black
`;

const InnerWrapper = tw.div`
  w-full h-full flex flex-col relative overflow-auto
`;

const GnbWrapper = tw.div`
  fixed w-full h-82 top-0 right-0 z-1004
`;

const AccountsChart = tw.div`
  flex flex-center bg-gray7 mx-130 h-300 mt-130 mb-50
`;

const TransactionChart = tw.div`
  flex flex-center bg-gray7 mx-130 h-300 mb-130
`;

export default MainPage;
