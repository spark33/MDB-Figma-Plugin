import * as React from 'react';
import Box from '@leafygreen-ui/box';
import {H3} from '@leafygreen-ui/typography';
import {useParams} from 'react-router-dom';

const ComponentPage = ({}) => {
    let {id} = useParams();

    return (
        <Box>
            <H3>{id} Component</H3>
        </Box>
    );
};

export default ComponentPage;
