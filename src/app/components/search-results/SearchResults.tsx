import React from 'react';
import { Overline } from '@leafygreen-ui/typography';
import Card from '@leafygreen-ui/card';
import { Link } from 'react-router-dom';
import { css } from '@leafygreen-ui/emotion';
import { useFetchComponents } from '../../services/strapi';

const searchResultsStyles = css`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 18px;
`;

const cardStyles = css`
  text-decoration: none;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const cardImageStyles = css`
  max-width: 100%;
  max-height: 70%;
`;

const cardTextStyles = css`
  position: absolute;
  bottom: 30px;
`;

const cardLinkStyles = css`
  text-decoration: none;
  position: relative;
`;

const SearchResults = ({}) => {
  const { data, isError } = useFetchComponents();

  if (isError) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <ul className={searchResultsStyles}>
      {data.data.map((card, index: number) => {
        const {
          attributes: { name },
          id,
        } = card;

        return (
          <li key={`${name}-${index}`}>
            {/* TODO: should pass Link to card with as? or link should be inside card? */}
            <Link to={`${id}`} className={cardLinkStyles}>
              <Card className={cardStyles} as="article">
                <img className={cardImageStyles} src="https://placehold.jp/90x40.png" />
                <Overline className={cardTextStyles}>{name}</Overline>
              </Card>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;
