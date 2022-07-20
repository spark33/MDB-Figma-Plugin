import React from 'react';
import { Overline } from '@leafygreen-ui/typography';
import Card from '@leafygreen-ui/card';
import { Link } from 'react-router-dom';
import { css } from '@leafygreen-ui/emotion';

// TODO: move this to component page
const sampleComponentList = [
  {
    name: 'Badge',
    image: '',
  },
  {
    name: 'Banner',
    image: '',
  },
  {
    name: 'Toast',
    image: '',
  },
];

const searchResultsStyles = css`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 18px;
`;

const searchResultsCardStyles = css`
  display: block;
  text-decoration: none;
  aspect-ratio: 1 / 1;
`;

const SearchResults = ({}) => {
  return (
    <ul className={searchResultsStyles}>
      {sampleComponentList.map((card, index) => {
        const { name } = card;
        return (
          <li key={`${name}-${index}`}>
            {/* TODO: should pass Link to card with as? or link should be inside card? */}
            <Link to={name} className="link">
              <Card className={searchResultsCardStyles} as="article">
                <Overline>{name}</Overline>
              </Card>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
