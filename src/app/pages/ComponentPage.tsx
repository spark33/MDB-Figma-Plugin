import React, { useState } from 'react';
import Box from '@leafygreen-ui/box';
import { H2, Overline } from '@leafygreen-ui/typography';
import VersionCard from '../components/version-card';
import Icon from '@leafygreen-ui/icon';
import { palette } from '@leafygreen-ui/palette';
import Card from '@leafygreen-ui/card';
import { css, cx } from '@leafygreen-ui/emotion';
import { Link, useParams } from 'react-router-dom';
import { useFetchComponent } from '../services/api';
import Tabs from '../components/Tabs';
import { Tab as LGTab } from '@leafygreen-ui/tabs';
import Markdown from '../components/Markdown';

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
      attributes: { name },
    },
  } = data;

  const sampleVersions = [
    {
      version: 1.0,
      title: 'Dark Mode',
      publishedAt: Date(),
      people: ['Ksenia', 'Will', 'Fajar'],
      description: 'This is the first version of the Badge',
      figmaLink: 'https://www.figma.com/file/4GFJHVWYqvBoXtfzIjQdsT/personal-website-sketches?node-id=91%3A2',
    },
    {
      version: 2.0,
      title: 'Updating Colors',
      publishedAt: Date(),
      people: ['Sean', 'Tim', 'Shaneeza'],
      description: 'This is the second version of the Badge',
      figmaLink: 'https://www.figma.com/file/4h2VwjCuJUbeZ7hzD2J1rq/LeafyGreen-Design-System?node-id=5620%3A44056',
    },
  ];

  const sampleDocumentation = `  
  ### Do's
  
  - Ensure to align the badge with the item or content it is identifying
  - Label text should not wrap
  - Use one label per badge
  
  ### Don'ts
  
  - Do not use it as a button or link
  - Do not use actionable words for the badge that conveys its interactive state
  - Do not use it with icons
  
  #### Examples
  
  Colors can define the different states of the badge is identifying.
  
  Use different colors to show different status
  
  Do not use actionable words for the badge that conveys its interactive state.
  
  Do not use it as a button or link

  Label text should not wrap
  
  ### Color Usage
  
  Colors can define the different states of the badge is identifying.
  
  - **Light Gray**: Default badge. Use this badge on dark background for higher contrast or when the badge needs a subtle presence on the page.
    Could be confusing with the small size button; no action verb for the label.
  - **White**: Use this badge when higher contrast is needed on a light background.
  - **Blue**: Use this badge to call attention to information that needs to stand out.
  - **Green**: Use to communicate the status of content. (Approved, successful, positive)
    - _Exception_: A green badge can be used other than displaying status when there needs to be a differentiation from the other color badges.
  - **Yellow**: Use to communicate the status of content. (Warning)
  - **Red**: Use to communicate the status of content. (Critical, errors, failed, disabled)
  
  `;

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
          <Markdown content={sampleDocumentation} />
        </LGTab>
        <LGTab name="Jira"></LGTab>
        <LGTab name="Updates">
          {sampleVersions.map((version) => (
            <VersionCard version={version} />
          ))}
        </LGTab>
      </Tabs>
    </Box>
  );
};

export default ComponentPage;
