import React from 'react';
import Card from '@leafygreen-ui/card';
// import ExpandableCard from '@leafygreen-ui/expandable-card';
import { Subtitle, Overline } from '@leafygreen-ui/typography';
import Icon from '@leafygreen-ui/icon';
import { css } from '@leafygreen-ui/emotion';
import Badge from '@leafygreen-ui/badge';
import Button from '@leafygreen-ui/button';
import Markdown from '../Markdown';
import { palette } from '@leafygreen-ui/palette';

interface JiraIssue {
  id: string;
  // components: string,
  name: string;
  description: string;
  labels: string[];
  fix_version: string;
  status: string;
  url: string;
}

interface JiraCardProps {
  issue: JiraIssue;
}

const rootStyles = css`
  * {
    margin-bottom: 4px;
  }
`;

const flexContainerStyles = css`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const statusBadgeVariants = {
  'In Progress': 'blue',
  'In Review': 'blue',
  Unresolved: 'lightgray',
  Resolved: 'green',
};

const truncateDescription = (description: string, link: string) => {
  const LENGTH = 150;
  const detailLink = description.length > LENGTH ? `...\n[More...](${link})` : '';
  return description.substring(0, LENGTH) + detailLink;
};

const JiraCard = ({ issue }: JiraCardProps) => {
  const {
    id,
    // components,
    name,
    description,
    labels,
    fix_version,
    status,
    url,
  } = issue;

  return (
    <Card className={rootStyles}>
      <Overline style={{ color: palette.gray.base }}>{id}</Overline>
      <Subtitle style={{ marginBottom: '8px' }}>{name}</Subtitle>
      <div className={flexContainerStyles}>
        <Badge variant={statusBadgeVariants[status]}>{status}</Badge>
        <Badge variant="yellow">{fix_version}</Badge>
      </div>
      <Markdown content={truncateDescription(description, url)} />
      <div className={flexContainerStyles} style={{ marginBottom: '16px' }}>
        <Overline>Labels:</Overline>
        {labels.map((label: string) => (
          <Badge variant="blue">{label}</Badge>
        ))}
      </div>
      <Button variant="primary" leftGlyph={<Icon glyph="Link" />} href={url} target="_blank">
        View Issue
      </Button>
    </Card>
  );
};

export default JiraCard;
