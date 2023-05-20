import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ConnectKitButton } from 'connectkit';
import tw from 'twin.macro';

import { Search } from '~/components/search';

export const Gnb = () => {
  return (
    <>
      <Wrapper>
        <SearchWrapper>
          <Search />
        </SearchWrapper>
        <RightWrapper>
          <ConnectKitButton />
        </RightWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div(() => [
  tw`
    w-full h-82 flex items-center px-24 py-20 justify-end relative z-1004
  `,
  css`
    background: rgba(25, 31, 40, 0.01);
  `,
]);

const SearchWrapper = tw.div`
  flex flex-grow justify-center absolute w-screen right-0
`;

const RightWrapper = tw.div`
  flex gap-16 relative z-100
`;
