import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';
import tw from 'twin.macro';

import { COLOR } from '~/assets/colors';

import { IconDelete } from '../icons';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;
export const ButtonIconDelete = ({ ...rest }: Props) => {
  return (
    <Wrapper {...rest}>
      <IconDelete width={12} height={12} color={COLOR.GRAY2} />
    </Wrapper>
  );
};

const Wrapper = styled.button(() => [
  tw`
  flex-center w-20 h-20 bg-gray4 rounded-full clickable
  hover:bg-gray3
  `,
  css`
    &:hover svg path {
      fill: #f9fafb;
    }
  `,
]);
