import React from 'react';
import Icon from '@leafygreen-ui/icon';
import TextInput from '@leafygreen-ui/text-input';
import { palette } from '@leafygreen-ui/palette';
import { css } from '@leafygreen-ui/emotion';

const searchStyles = css`
  margin: 8px 0 10px;
  position: relative;
`;

const searchIconStyles = css`
  position: absolute;
  z-index: 1;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

const searchInputStyles = css`
  input {
    padding-left: 36px;
  }

  > div {
    padding: 0;
  }
`;

const SearchBar = ({}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <form role="search" className={searchStyles} onSubmit={handleSubmit}>
      <Icon className={searchIconStyles} glyph="MagnifyingGlass" fill={palette.black} />
      <TextInput className={searchInputStyles} aria-labelledby="search" placeholder="search" />
    </form>
  );
};

export default SearchBar;
