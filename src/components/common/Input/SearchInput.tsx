import React, { useRef } from 'react';
import { ISearchInputProps } from './interface';
import './SearchInput.scss';

const SearchInput = ({
  onChangeAction, type, id, value,
}: ISearchInputProps): JSX.Element => {
  const searchInput = useRef<HTMLInputElement | null>(null);

  const changeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    if (searchInput && searchInput.current) {
      if (onChangeAction) {
        onChangeAction(e.target.value, searchInput.current);
      }
    }
  };

  return (
    <input onChange={changeHandler} ref={searchInput} value={value} className="search-input" type={type} id={!id ? '' : id} placeholder="search" />
  );
};

export default SearchInput;
