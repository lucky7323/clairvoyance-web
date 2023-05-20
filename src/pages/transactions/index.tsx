import { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import tw from 'twin.macro';

import { useTxsInfinityQueries } from '~/api/txs';
import { Footer } from '~/components/footer';
import { Gnb } from '~/components/gnb';
import { Sidebar } from '~/components/sidebar';
import { TxHeader, TxRow } from '~/components/tx-row';

const TransactionPage = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const queryOptions = useMemo(
    () => ({
      limit: 5,
    }),
    []
  );

  const {
    data: txData,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useTxsInfinityQueries(queryOptions, {});

  const txs = useMemo(() => txData?.pages.flatMap(p => p.txs), [txData]);

  useEffect(() => {
    if (!inView || isFetching || !hasNextPage) return;

    fetchNextPage();
  }, [fetchNextPage, hasNextPage, inView, isFetching]);

  return (
    <Wrapper>
      <Sidebar />
      <InnerWrapper>
        <GnbWrapper>
          <Gnb />
        </GnbWrapper>
        <TxTables>
          <TableTitle>{'Latest Transactions'}</TableTitle>
          <TxHeader />
          {txs &&
            txs.length > 0 &&
            txs.map((tx, idx) => (
              <TxRow
                key={`${tx.hash}-${idx}`}
                hash={tx.hash}
                height={tx.block_height}
                txType={tx.type}
                status={tx.status}
                created={tx.created_at}
                from={tx.from_l1_address}
                to={tx.to_l1_address}
              />
            ))}
        </TxTables>
        <LoadingMessage ref={ref}>{!hasNextPage && 'End'}</LoadingMessage>

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

const TxTables = tw.div`
  flex flex-col mt-100 mx-50
`;

const TableTitle = tw.span`
  font-sb-24 text-white
`;

const LoadingMessage = tw.div`
  py-80 font-r-14 text-gray4 text-center
`;

export default TransactionPage;
