import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
          <Route path="/home" element={<MainPage />} />
          <Route path="/bridge" element={<MainPage />} />
          <Route path="/account" element={<MainPage />} />
          <Route path="/nft" element={<MainPage />} />

          <Route path="/error" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </RouteWrapper>
    </BrowserRouter>
  );
};

export default App;
