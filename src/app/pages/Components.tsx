import React from 'react';
import { css } from '@leafygreen-ui/emotion';
import SearchBar from '../components/search-bar';
import SearchResults from '../components/search-results';

// const sampleComponentList = [
//   {
//     name: 'Badge',
//     image: '',
//   },
//   {
//     name: 'Banner',
//     image: '',
//   },
//   {
//     name: 'Toast',
//     image: '',
//   }
// ];

const padding = css`
  padding: 0 12px;
`;

const Components = ({}) => {
  return (
    <div className={padding}>
      <SearchBar />
      <SearchResults />
    </div>
  );
};

export default Components;
