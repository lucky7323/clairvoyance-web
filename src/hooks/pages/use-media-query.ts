import { useMediaQuery as useResponsive } from 'react-responsive';

import { BREAKPOINT } from '~/constants';

export const useMediaQuery = () => {
  const isSM = useResponsive({ query: `${BREAKPOINT.MEDIA_SM}` });
  const isMD = useResponsive({ query: `${BREAKPOINT.MEDIA_MD}` });
  const isLG = useResponsive({ query: `${BREAKPOINT.MEDIA_LG}` });

  return {
    isLG,
    isMD,
    isSM,
  };
};
