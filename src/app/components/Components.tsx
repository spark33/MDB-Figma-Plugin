import * as React from 'react';
import Box from '@leafygreen-ui/box';
import {H1} from '@leafygreen-ui/typography';
import {Link} from 'react-router-dom';

const sampleComponentList = ['Badge', 'Banner', 'Toast'];

const Components = ({}) => {
    return (
        <Box>
            <H1>Components</H1>
            {sampleComponentList.map((name) => (
                <Box>
                    <Link to={name}>{name}</Link>
                </Box>
            ))}
        </Box>
    );
};

export default Components;
