import { BrowserRouter, Route, Routes } from 'react-router-dom';
import tw from 'twin.macro';

import { useChangeWallet } from '~/hooks/data/use-change-wallet';

import MainPage from './pages/main';

const RouteWrapper = tw.main`relative w-full h-full`;
const App = () => {
  useChangeWallet();

  return (
    <BrowserRouter>
      <RouteWrapper>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </RouteWrapper>
    </BrowserRouter>
  );
};

export default App;
