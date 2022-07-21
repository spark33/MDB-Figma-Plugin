import React, { useState } from 'react';
import Box from '@leafygreen-ui/box';
import { H2 } from '@leafygreen-ui/typography';
import { useParams } from 'react-router-dom';
import Tabs from '../components/Tabs';
import { Tab as LGTab } from '@leafygreen-ui/tabs';
import Markdown from '../components/Markdown';

// const Documentation  = ({}) => {
//   useEffect( () => {

//   }, []);
//   return (
//     <Markdown content={} />
//   );
// }

const ComponentPage = ({}) => {
  let { id } = useParams();
  const [selected, setSelected] = useState<number>(0);

  return (
    <Box>
      <H2>{id}</H2>
      <Tabs setSelected={setSelected} selected={selected} aria-labelledby="component-page-tabs">
        <LGTab name="Variants"></LGTab>
        <LGTab name="Documentation">
          <Markdown content="# Test" />
        </LGTab>
        <LGTab name="Jira"></LGTab>
      </Tabs>
    </Box>
  );
};

export default ComponentPage;
