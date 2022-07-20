import React from 'react';
import Box from '@leafygreen-ui/box';
import { H2, Overline } from '@leafygreen-ui/typography';
import Icon from '@leafygreen-ui/icon';
import { palette } from '@leafygreen-ui/palette';
import Card from '@leafygreen-ui/card';
import { css, cx } from '@leafygreen-ui/emotion';
import { Link, useParams } from 'react-router-dom';
import { useFetchComponent } from '../services/api';

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
  const { data, isError } = useFetchComponent(Number(id));

  if (isError) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const {
    data: {
      attributes: { name },
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

      <Card className={componentCardStyles} as="article">
        <Overline>{name}</Overline>
      </Card>
    </Box>
  );
};

export default ComponentPage;
