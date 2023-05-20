import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { type InputHTMLAttributes, useCallback, useState } from 'react';
import tw from 'twin.macro';

import { COLOR } from '~/assets/colors';

import { ButtonIconDelete } from '../buttons/button-icon-delete';
import { IconSearch } from '../icons';

type Props = InputHTMLAttributes<HTMLInputElement>;
export const Search = ({ ...rest }: Props) => {
  const [typedValue, typeValue] = useState('');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      typeValue(value);
    },
    [typeValue]
  );
  return (
    <UpperWrapper>
      <Wrapper className="group" typing={!!typedValue}>
        <IconSearch color={COLOR.GRAY5} width={20} height={20} />
        <Input
          placeholder="Search Address / Transaction Hash"
          onChange={e => handleChange(e)}
          value={typedValue}
          typing={!!typedValue}
          {...rest}
        />
        {typedValue && <ButtonIconDelete onClick={() => typeValue('')} />}
      </Wrapper>
    </UpperWrapper>
  );
};

const UpperWrapper = tw.div`
  flex flex-col items-start gap-4 relative
`;

interface InputProps {
  typing?: boolean;
}
const Wrapper = styled.div<InputProps>(({ typing }: InputProps) => [
  tw`
    flex justify-center items-center px-20 py-10 gap-10 w-400 bg-gray7 rounded-8
    hover:bg-gray6
  `,
  css`
    &:hover svg path {
      fill: #eaecef;
    }
    &:hover input::placeholder {
      color: #adb4be;
    }
  `,
  typing &&
    tw`
    bg-gray6 justify-start placeholder:text-transparent
  `,
  typing &&
    css`
      svg path {
        fill: #eaecef;
      }
      &:hover input::placeholder {
        color: transparent;
      }
    `,
]);

const Input = styled.input<InputProps>(({ typing }: InputProps) => [
  tw`
    font-sans w-full h-full font-r-14 bg-transparent placeholder:text-gray5
    group-hover:text-white
  `,
  typing &&
    tw`
    placeholder:text-transparent text-white w-300
  `,
]);
