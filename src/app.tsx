import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import tw from 'twin.macro';

import { useChangeWallet } from '~/hooks/data/use-change-wallet';

import BlockPage from './pages/blocks';
import BridgePage from './pages/bridges';
import MainPage from './pages/main';
import TransactionPage from './pages/transactions';

const RouteWrapper = tw.main`relative w-full h-full`;
const App = () => {
  useChangeWallet();

  return (
    <BrowserRouter>
      <RouteWrapper>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/block" element={<BlockPage />} />
          <Route path="/bridge" element={<BridgePage />} />
          <Route path="/transaction" element={<TransactionPage />} />
          {/* <Route path="/account" element={<MainPage />} />
          <Route path="/nft" element={<MainPage />} /> */}

          <Route path="/error" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </RouteWrapper>
    </BrowserRouter>
  );
};

export default App;
