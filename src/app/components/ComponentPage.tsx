import * as React from 'react';
import Box from '@leafygreen-ui/box';
import {H1} from '@leafygreen-ui/typography';
import {useParams} from 'react-router-dom';

const ComponentPage = ({}) => {
    let {id} = useParams();

    return (
        <Box>
            <H1>Component PAGE</H1>
            <H1>{id}</H1>
        </Box>
    );
};

export default ComponentPage;
