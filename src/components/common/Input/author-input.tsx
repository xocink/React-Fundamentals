import React, { useRef } from 'react';
import './Search-input.scss';
import { v4 as uuidv4 } from 'uuid';
import { ISearchInputProps } from '../../../models/search-input-props';
import { IAuthorModel } from '../../../models/author-list-model';

const AuthorInput = ({ secondAction } : ISearchInputProps) : JSX.Element => {
  const authorInput = useRef<HTMLInputElement | null>(null);

  const changeHandler = () => {
    if (authorInput && authorInput.current) {
      const author : IAuthorModel = {
        name: authorInput.current?.value,
        id: uuidv4(),
      };

      if (secondAction) {
        secondAction(author);
      }
    }
  };

  return (
    <input onChange={changeHandler} ref={authorInput} className="search-input" type="text" placeholder="enter..." />
  );
};

export default AuthorInput;
