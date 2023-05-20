import tw from 'twin.macro';

import logo from '~/assets/images/logo-text.png';

export const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <img src={logo} width={200} />
        <Text>© 2023 Clairvoyance, Inc. All Rights Reserved</Text>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-full h-128 flex flex-center px-48 py-40 bg-gray7
`;

const InnerWrapper = tw.div`
  flex flex-col items-center gap-8 p-0
`;

const Text = tw.div`
  font-l-12 text-gray3
`;
