import React, { useState } from 'react';
import Box from '@leafygreen-ui/box';
import { H2, Overline } from '@leafygreen-ui/typography';
import VersionCard from '../components/version-card';
import Icon from '@leafygreen-ui/icon';
import { palette } from '@leafygreen-ui/palette';
import Card from '@leafygreen-ui/card';
import { css, cx } from '@leafygreen-ui/emotion';
import { Link, useParams } from 'react-router-dom';
import { useFetchComponent } from '../services/strapi';
import Tabs from '../components/Tabs';
import { Tab as LGTab } from '@leafygreen-ui/tabs';
import Markdown from '../components/Markdown';
import JiraIssues from '../components/jira-issues';

const padding = css`
  padding: 0 12px;
`;

const componentCardStyles = css`
  aspect-ratio: 16 / 9;
`;

const backButtonStyles = css`
  display: flex;
  margin: 16px 0;
  text-decoration: none;
  position: relative;
  align-items: center;
  padding: 6px 0px;
`;

const backButtonIconStyles = css`
  margin-right: 8px;
`;

const headerStyles = css`
  text-transform: capitalize;
`;

const ComponentPage = ({}) => {
  const { id } = useParams();
  const [selected, setSelected] = useState<number>(0);
  const { data, isError } = useFetchComponent(Number(id));

  if (isError) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const {
    data: {
      attributes: {
        name,
        DesignGuideline: { content },
        component_figma_versions: { data: versions },
      },
    },
  } = data;

  return (
    <Box className={padding}>
      {/* TODO: should create Link component that has styles */}
      <Link to="/components" className={cx(backButtonStyles)}>
        <Icon className={backButtonIconStyles} glyph="ChevronLeft" fill={palette.black} />
        <Overline>Back</Overline>
      </Link>
      <H2 className={headerStyles}>{name}</H2>
      <Tabs setSelected={setSelected} selected={selected} aria-labelledby="component-page-tabs">
        <LGTab name="Variants">
          <Card className={componentCardStyles} as="article">
            <Overline>{name}</Overline>
          </Card>
        </LGTab>
        <LGTab name="Documentation">
          <Markdown content={content} />
        </LGTab>
        <LGTab name="Jira">
          <JiraIssues />
        </LGTab>
        <LGTab name="Updates">
          {versions.map((version) => (
            <VersionCard version={version.attributes} />
          ))}
        </LGTab>
      </Tabs>
    </Box>
  );
};

export default ComponentPage;
