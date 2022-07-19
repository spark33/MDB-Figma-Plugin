import * as React from 'react';
import '../styles/reset.css';
import '../styles/ui.css';
import {Tabs, Tab} from '@leafygreen-ui/tabs';
import Box from '@leafygreen-ui/box';
import {MongoDBLogo} from '@leafygreen-ui/logo';
import {Outlet, useLocation, Link} from 'react-router-dom';

const Layout = ({}) => {
    const [selected, setSelected] = React.useState(0);
    const location = useLocation();
    console.log(location.pathname);

    return (
        <Box>
            <MongoDBLogo color="black" height={32} />
            <Tabs setSelected={setSelected} selected={selected} aria-labelledby="tabs" as={Link}>
                <Tab name="Components" to="/components" />
                <Tab name="Tokens" to="/tokens" />
                <Tab name="Brand" to="/brand" />
            </Tabs>
            <Outlet />
        </Box>
    );
};

export default Layout;
