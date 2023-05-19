import { InputHTMLAttributes } from 'react';
import { NumberFormatValues, NumericFormat } from 'react-number-format';
import tw, { styled } from 'twin.macro';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'defaultValue'> {
  suffix?: string;
  defaultValue?: number;
  value?: number;
  onChange?: (value: NumberFormatValues) => void;

  onFocus?: () => void;
  onBlur?: () => void;
  onError?: () => void;
  onResolveError?: () => void;
}

export const TextFieldNumberFixed = ({
  defaultValue,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
}: Props) => {
  return (
    <NumericFormat
      defaultValue={defaultValue}
      placeholder={placeholder}
      onValueChange={values => onChange?.(values)}
      value={value}
      onFocus={() => onFocus?.()}
      onBlur={() => onBlur?.()}
      allowNegative={false}
      thousandSeparator=","
      customInput={Input}
    />
  );
};

const Input = styled.input(() => [tw``]);
