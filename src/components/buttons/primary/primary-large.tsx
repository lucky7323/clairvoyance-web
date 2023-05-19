import styled from '@emotion/styled';
import lottie from 'lottie-web';
import { ButtonHTMLAttributes, useEffect, useRef } from 'react';
import tw from 'twin.macro';

import loadingLottie from '~/assets/lottie/loading.json';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  emoji?: string;
  loading?: boolean;
  cooking?: boolean;
}
export const ButtonLargePrimary = ({ text, emoji, loading, cooking, onClick, ...rest }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    lottie.loadAnimation({
      container: ref.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: loadingLottie,
    });

    return () => {
      lottie.destroy();
    };
  }, [loading]);

  return (
    <Wrapper
      isLoading={loading}
      isCooking={cooking}
      onClick={loading ? undefined : onClick}
      {...rest}
    >
      <TextWrapper isLoading={loading}>
        {emoji && <EmojiWrapper>{emoji}</EmojiWrapper>}
        {text}
      </TextWrapper>
      {loading && <LottieWrapper ref={ref} />}
    </Wrapper>
  );
};

interface LoadingProps {
  isLoading?: boolean;
  isCooking?: boolean;
}
const Wrapper = styled.button<LoadingProps>(({ isLoading, isCooking }) => [
  tw`truncate`,
  isLoading
    ? tw`
      flex-center px-24 pt-18 pb-12 bg-gray6 rounded-30 font-din font-bold text-20 leading-24 tracking-0.08em
      text-white relative non-clickable
    `
    : tw`
      flex-center px-24 pt-18 pb-12 bg-red rounded-30 font-din font-bold text-20 leading-24 tracking-0.08em text-white relative
      enabled:hover:bg-white enabled:hover:text-red enabled:clickable

      disabled:text-gray4 disabled:non-clickable disabled:bg-transparent disabled:text-gray3 disabled:border-1 disabled:border-solid
      disabled:border-gray6 disabled:pt-17 disabled:pb-11 disabled:px-23
    `,
  isCooking &&
    tw`
      disabled:border-red disabled:text-red
    `,
]);

const TextWrapper = styled.div<LoadingProps>(({ isLoading }) => [
  tw`
    flex gap-8
  `,
  isLoading ? tw`opacity-0` : `opacity-100`,
]);

const EmojiWrapper = tw.div`
  font-din font-bold text-14 leading-19 -tracking-4 pt-2 h-20
`;

const LottieWrapper = tw.div`
  w-24 h-24 absolute absolute-center
`;
