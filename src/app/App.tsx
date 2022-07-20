import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Components from './pages/Components';
import ComponentPage from './pages/ComponentPage';
import Tokens from './pages/Tokens';
import Brand from './pages/Brand';
import './styles/reset.css';
import './styles/ui.css';

const App = ({}) => {
  return (
    <MemoryRouter initialEntries={['/components']}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="components">
            <Route index element={<Components />} />
            <Route path=":id" element={<ComponentPage />} />
          </Route>
          <Route path="tokens" element={<Tokens />} />
          <Route path="brand" element={<Brand />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

export default App;
