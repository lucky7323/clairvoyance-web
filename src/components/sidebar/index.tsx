import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import { COLOR } from '~/assets/colors';
import logo from '~/assets/images/logo-text.png';

import { IconProfileFill } from '../icons';

export const SIDEBAR_MENU = [
  {
    path: '/home',
    activeKeyword: 'home',
    name: 'Home',
    iconActive: <IconProfileFill color={COLOR.WHITE} />,
    icon: <IconProfileFill color={COLOR.WHITE} />,
  },
  {
    path: '/bridge',
    activeKeyword: 'bridge',
    name: 'Bridge',
    iconActive: <IconProfileFill color={COLOR.WHITE} />,
    icon: <IconProfileFill color={COLOR.WHITE} />,
  },
  {
    path: '/block',
    activeKeyword: 'block',
    name: 'Blocks',
    iconActive: <IconProfileFill color={COLOR.WHITE} />,
    icon: <IconProfileFill color={COLOR.WHITE} />,
  },
  {
    path: '/account',
    activeKeyword: 'account',
    name: 'Account',
    iconActive: <IconProfileFill color={COLOR.WHITE} />,
    icon: <IconProfileFill color={COLOR.WHITE} />,
  },
  {
    path: '/nft',
    activeKeyword: 'nft',
    name: 'NFT',
    iconActive: <IconProfileFill color={COLOR.WHITE} />,
    icon: <IconProfileFill color={COLOR.WHITE} />,
  },
];

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Wrapper>
      <LogoWrapper onClick={() => navigate('/')}>
        <img src={logo} width={150} />
      </LogoWrapper>
      <Container>
        <MenuWrapper>
          {SIDEBAR_MENU.map(({ path, name, activeKeyword, icon, iconActive }) => (
            <Menu
              key={path}
              disabled={name == 'Account' || name == 'NFT'}
              activated={location.pathname.includes(activeKeyword).toString()}
              onClick={() => {
                name == 'Account' || name == 'NFT'
                  ? console.log('not implemented')
                  : navigate(path);
              }}
            >
              {location.pathname.includes(activeKeyword) ? iconActive : icon}
              {<MenuText>{name}</MenuText>}
            </Menu>
          ))}
        </MenuWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  h-full min-h-810 w-248 bg-gray7 relative z-1005
`;

const Container = tw.div`
  flex flex-col items-center gap-16 pt-104 px-20 pb-40 w-248 bg-gray7
`;

const LogoWrapper = tw.div`
  flex flex-center items-center mt-40
`;

const MenuWrapper = tw.div`
  flex flex-col items-center gap-16
`;

const MenuText = tw.span`
  text-white font-sans font-r-14
`;

interface MenuProps {
  activated?: string;
  disabled?: boolean;
}
const Menu = styled.div<MenuProps>(({ activated, disabled }) => [
  tw`
    flex items-start p-14 gap-16 rounded-8 w-208 hover:bg-gray6 clickable
  `,
  activated === 'true' && tw`bg-gray6`,
  disabled && tw`non-clickable hover:bg-transparent`,
]);
