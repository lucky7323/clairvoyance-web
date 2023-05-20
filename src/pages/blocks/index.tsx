import { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import tw from 'twin.macro';

import { useBlocksInfinityQueries } from '~/api/blocks';
import { BlockHeader, BlockRow } from '~/components/block-row';
import { Footer } from '~/components/footer';
import { Gnb } from '~/components/gnb';
import { Sidebar } from '~/components/sidebar';

const BlockPage = () => {
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
    data: blockData,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useBlocksInfinityQueries(queryOptions, {});

  const blocks = useMemo(() => blockData?.pages.flatMap(p => p.blocks), [blockData]);

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
        <BlockTables>
          <TableTitle>{'Latest Blocks'}</TableTitle>
          <BlockHeader />
          {blocks &&
            blocks.length > 0 &&
            blocks.map((block, idx) => (
              <BlockRow
                key={`${block.height}-${idx}`}
                height={block.height}
                status={block.status}
                hash={block.pending_on_chain_operations_hash}
                commit={block.committed_at}
                verified={block.verified_at}
              />
            ))}
        </BlockTables>
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

const BlockTables = tw.div`
  flex flex-col mt-100 mx-50
`;

const TableTitle = tw.span`
  font-sb-24 text-white
`;

const LoadingMessage = tw.div`
  py-80 font-r-14 text-gray4 text-center
`;

export default BlockPage;
