import React from 'react';
import Box from '@leafygreen-ui/box';
import { H1, Overline } from '@leafygreen-ui/typography';
import Icon from '@leafygreen-ui/icon';
import { palette } from '@leafygreen-ui/palette';
import Card from '@leafygreen-ui/card';
import { Link, useParams } from 'react-router-dom';
import { css, cx } from '@leafygreen-ui/emotion';

const padding = css`
  padding: 0 12px;
`;

const componentCardStyles = css`
  aspect-ratio: 16 / 9;
`;

const backButtonStyles = css`
  display: flex;
  margin-top: 16px;
  text-decoration: none;
  position: relative;
`;

const backButtonIconStyles = css`
  margin-right: 8px;
`;

const ComponentPage = ({}) => {
  let { id: name } = useParams();

  return (
    <Box className={padding}>
      {/* TODO: should create Link component that has styles */}
      <Link to="/components" className={cx(backButtonStyles)}>
        <Icon className={backButtonIconStyles} glyph="ChevronLeft" fill={palette.black} />
        <Overline>Back</Overline>
      </Link>

      <H1>{name}</H1>

      <Card className={componentCardStyles} as="article">
        <Overline>{name}</Overline>
      </Card>
    </Box>
  );
};

export default ComponentPage;
