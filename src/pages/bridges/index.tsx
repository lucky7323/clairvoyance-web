import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import tw from 'twin.macro';

import { useDepositWithdrawQuery } from '~/api/accounts';
import { Footer } from '~/components/footer';
import { Gnb } from '~/components/gnb';
import { Sidebar } from '~/components/sidebar';

const BridgePage = () => {
  const { data } = useDepositWithdrawQuery({
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
          <ChartTitle>(BNB) Deposit and Withdraw</ChartTitle>
          <ResponsiveContainer width="100%" height="100%" minHeight={300}>
            {data?.data ? (
              <BarChart
                width={900}
                height={300}
                data={data?.data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 20,
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
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="bnb.deposit" stackId="a" fill="#8884d8" />
                <Bar dataKey="bnb.withdraw" stackId="a" fill="#82ca9d" />
              </BarChart>
            ) : (
              <></>
            )}
          </ResponsiveContainer>
        </AccountsChart>
        <AccountsChart>
          <ChartTitle>(USDC) Deposit and Withdraw</ChartTitle>
          <ResponsiveContainer width="100%" height="100%" minHeight={300}>
            {data?.data ? (
              <BarChart
                width={900}
                height={300}
                data={data?.data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 20,
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
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="usdc.deposit" stackId="a" fill="#8884d8" />
                <Bar dataKey="usdc.withdraw" stackId="a" fill="#82ca9d" />
              </BarChart>
            ) : (
              <></>
            )}
          </ResponsiveContainer>
        </AccountsChart>
        <AccountsChart>
          <ChartTitle>(DAI) Deposit and Withdraw</ChartTitle>
          <ResponsiveContainer width="100%" height="100%" minHeight={300}>
            {data?.data ? (
              <BarChart
                width={900}
                height={300}
                data={data?.data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 20,
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
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="dai.deposit" stackId="a" fill="#8884d8" />
                <Bar dataKey="dai.withdraw" stackId="a" fill="#82ca9d" />
              </BarChart>
            ) : (
              <></>
            )}
          </ResponsiveContainer>
        </AccountsChart>
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

export default BridgePage;
