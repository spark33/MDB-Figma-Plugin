import React from 'react';
import { Body, Subtitle, Disclaimer } from '@leafygreen-ui/typography';
import Box from '@leafygreen-ui/box';
import Icon from '@leafygreen-ui/icon';
import Button from '@leafygreen-ui/button';
import { css } from '@leafygreen-ui/emotion';
import Badge from '@leafygreen-ui/badge';

const versionStyles = css`
  display: flex;
  margin: 16px 8px;
  justify-content: flex-start;
  align-items: flex-start;
`;

const iconStyles = css`
  position: relative;
  top: 4px;
`;

const versionTextStyles = css`
  margin-left: 8px;
`;

const badgeContainerStyles = css`
  display: flex;
  flex-direction: row;
`;

const findComponent = (link: string) => {
  parent.postMessage({ pluginMessage: { type: 'focus-component', link } }, '*');
};

const VersionCard = ({ version }) => {
  return (
    <Box className={versionStyles}>
      <Icon glyph="TimeSeries" className={iconStyles} />
      <Box className={versionTextStyles}>
        <Subtitle>{version.title}</Subtitle>
        <Disclaimer>Component published {version.publishedAt}</Disclaimer>
        <Box className={badgeContainerStyles}>
          {version.people.map((name) => (
            <Badge variant="blue">@{name}</Badge>
          ))}
        </Box>
        <Body>{version.description}</Body>
        <Button variant="primary" size="small" onClick={() => findComponent(version.figmaLink)}>
          View Component
        </Button>
      </Box>
    </Box>
  );
};

export default VersionCard;
