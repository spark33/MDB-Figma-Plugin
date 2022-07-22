import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider';
import Layout from './pages/Layout';
import Components from './pages/Components';
import ComponentPage from './pages/ComponentPage';
import Foundations from './pages/Foundations';
import Linter from './pages/Linter';
import './styles/reset.css';
import './styles/ui.css';

const App = ({}) => {
  return (
    <LeafyGreenProvider>
      <MemoryRouter initialEntries={['/components']}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="components">
              <Route index element={<Components />} />
              <Route path=":id" element={<ComponentPage />} />
            </Route>
            <Route path="foundations" element={<Foundations />} />
            <Route path="linter" element={<Linter />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </LeafyGreenProvider>
  );
};

export default App;
