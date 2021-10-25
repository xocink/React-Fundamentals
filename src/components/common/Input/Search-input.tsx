import React, { useRef } from 'react';
import './Search-input.scss';
import { ISearchInputProps } from '../../../models/search-input-props';

const SearchInput = ({ action } : ISearchInputProps) : JSX.Element => {
  const searchInput = useRef<HTMLInputElement | null>(null);

  const changeHandler = () => {
    if (searchInput && searchInput.current) {
      if (action) {
        action(searchInput.current?.value);
      }
    }
  };

  return (
    <input onChange={changeHandler} ref={searchInput} className="search-input" type="text" placeholder="search" />
  );
};

export default SearchInput;
