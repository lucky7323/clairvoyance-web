import { SVGProps } from 'react';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
  color?: string;
}
export const IconSample = ({ color, ...rest }: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    {...rest}
  >
    <path d="" fill={color ?? '#000'} />
  </svg>
);
