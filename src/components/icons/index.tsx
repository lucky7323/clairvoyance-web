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

export const IconProfileFill = ({ color, ...rest }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...rest}
    >
      <rect x="8" y="2" width="8" height="8" rx="4" fill={color ?? '#191F28'} />
      <path
        d="M4 19C4 14.5817 7.58172 11 12 11C16.4183 11 20 14.5817 20 19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19Z"
        fill={color ?? '#191F28'}
      />
    </svg>
  );
};

export const IconSearch = ({ color, ...rest }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 3C15.4183 3 19 6.58172 19 11C19 12.8499 18.3721 14.5532 17.3178 15.9083C17.3387 15.926 17.359 15.9447 17.3787 15.9644L21.6214 20.2071C22.0119 20.5976 22.0119 21.2308 21.6214 21.6213C21.2309 22.0118 20.5977 22.0118 20.2072 21.6213L15.9645 17.3786C15.9448 17.3589 15.9261 17.3386 15.9084 17.3177C14.5533 18.3721 12.85 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3ZM11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5Z"
        fill={color ?? '#191F28'}
      />
    </svg>
  );
};

export const IconDelete = ({ color, ...rest }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.34309 4.92891C5.95257 4.53839 5.3194 4.53839 4.92888 4.92891C4.53836 5.31943 4.53836 5.9526 4.92888 6.34312L10.5858 12.0001L4.92903 17.6568C4.53851 18.0474 4.53851 18.6805 4.92903 19.0711C5.31955 19.4616 5.95272 19.4616 6.34324 19.0711L12 13.4143L17.6568 19.071C18.0473 19.4616 18.6805 19.4616 19.071 19.071C19.4615 18.6805 19.4615 18.0474 19.071 17.6568L13.4142 12.0001L19.0712 6.34314C19.4617 5.95262 19.4617 5.31945 19.0712 4.92893C18.6806 4.5384 18.0475 4.5384 17.657 4.92893L12 10.5858L6.34309 4.92891Z"
        fill={color ?? '#191F28'}
      />
    </svg>
  );
};
