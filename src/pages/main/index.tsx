import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import tw from 'twin.macro';

import { useAccountsQuery, useTransactionsQuery } from '~/api/accounts';
import { Footer } from '~/components/footer';
import { Gnb } from '~/components/gnb';
import { Sidebar } from '~/components/sidebar';

const MainPage = () => {
  const { data: txData } = useTransactionsQuery({
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: true,
  });

  const { data: registerData } = useAccountsQuery({
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: true,
  });

  return (
    <Wrapper>
      <Sidebar />
      <InnerWrapper>
        <GnbWrapper>
          <Gnb />
        </GnbWrapper>
        <AccountsChart>
          <ChartTitle>Total Accounts</ChartTitle>
          <ResponsiveContainer width={'100%'} height={'100%'} minHeight={300}>
            <LineChart
              width={900}
              height={300}
              data={registerData?.data}
              margin={{
                top: 35,
                right: 30,
                left: 20,
                bottom: 50,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="timestamp"
                domain={['dataMin', 'dataMax']}
                tickFormatter={tick => new Date(tick).toLocaleDateString()}
              >
                <Label dy={20}>date</Label>
              </XAxis>

              <YAxis>
                <Label angle={-90} dx={-20}>
                  total accounts
                </Label>
              </YAxis>
              <Tooltip />
              <Line type="monotone" dataKey="amount" name="total accounts" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </AccountsChart>
        <TransactionChart>
          <ChartTitle>Total Transactions</ChartTitle>
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
                  bottom: 50,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="timestamp"
                  domain={['dataMin', 'dataMax']}
                  tickFormatter={tick => new Date(tick).toLocaleDateString()}
                >
                  <Label dy={20}>date</Label>
                </XAxis>
                <YAxis>
                  <Label angle={-90} dx={-20}>
                    total transactions
                  </Label>
                </YAxis>

                <Tooltip />
                <Line type="monotone" dataKey="numTx" name="total transactions" stroke="#82ca9d" />
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

const ChartTitle = tw.span`
  font-sb-24 text-white
`;

const GnbWrapper = tw.div`
  fixed w-full h-82 top-0 right-0 z-1004
`;

const AccountsChart = tw.div`
  flex flex-col flex-center bg-gray7 mx-130 h-300 mt-130 mb-100
`;

const TransactionChart = tw.div`
  flex flex-col flex-center bg-gray7 mx-130 h-300 mb-130
`;

export default MainPage;
