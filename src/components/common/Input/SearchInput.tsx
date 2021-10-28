import React, { useRef } from 'react';
import './SearchInput.scss';
import { ISearchInputProps } from './interface';

const SearchInput = ({ onChangeAction, type, id }: ISearchInputProps): JSX.Element => {
  const searchInput = useRef<HTMLInputElement | null>(null);

  const changeHandler = () => {
    if (searchInput && searchInput.current) {
      if (onChangeAction) {
        onChangeAction(searchInput.current?.value);
      }
    }
  };

  return (
    <input onChange={changeHandler} ref={searchInput} className="search-input" type={type} id={!id ? '' : id} placeholder="search" />
  );
};

export default SearchInput;
