import * as React from 'react';
import Box from '@leafygreen-ui/box';
import {H1} from '@leafygreen-ui/typography';
import {Link} from 'react-router-dom';

const Components = ({}) => {
    return (
        <Box>
            <H1>Components</H1>
            <Link to="/components/text">Here</Link>
        </Box>
    );
};

export default Components;
