import tw from 'twin.macro';

import { Footer } from '~/components/footer';
import { Gnb } from '~/components/gnb';
import { Sidebar } from '~/components/sidebar';

const MainPage = () => {
  return (
    <Wrapper>
      <Sidebar />
      <InnerWrapper>
        <GnbWrapper>
          <Gnb />
        </GnbWrapper>
        <ContentWrapper />
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

const ContentWrapper = tw.div`
  flex h-screen
`;

export default MainPage;
