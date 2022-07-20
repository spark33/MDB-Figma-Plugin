import React, { useState } from 'react';
import '../styles/reset.css';
import '../styles/ui.css';
import { Tab as LGTab } from '@leafygreen-ui/tabs';
import Box from '@leafygreen-ui/box';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Tabs from '../components/Tabs';

const Layout = ({}) => {
  const [selected, setSelected] = useState<number>(0);
  const location = useLocation();
  console.log(location.pathname);

  return (
    <Box>
      <Tabs setSelected={setSelected} selected={selected} aria-labelledby="plugin-home-tabs" as={Link}>
        <LGTab name="Components" to="/components" />
        <LGTab name="Tokens" to="/tokens" />
        <LGTab name="Brand" to="/brand" />
      </Tabs>
      <Outlet />
    </Box>
  );
};

export default Layout;