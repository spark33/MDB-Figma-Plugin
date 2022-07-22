import React, { useEffect, useState } from 'react';
import { css } from '@leafygreen-ui/emotion';
import SampleIssues from './sample-issues';
import JiraCard from './JiraCard';

const rootStyles = css`
  padding: 8px;
  & > * { 
    margin-bottom: 8px;
  },
`;

const JiraIssues = ({}) => {
  const [issues, setIssues] = useState<any[]>([]);

  useEffect(() => {
    // TODO retrieve real jira issues
    setIssues(SampleIssues);
  }, []);

  return (
    <div className={rootStyles}>
      {issues.map((issue: any) => (
        <JiraCard issue={issue} />
      ))}
    </div>
  );
};

export default JiraIssues;
