import { Dispatch, SetStateAction } from 'react';
import { IAuthorModel } from './author-list-model';

export interface ISearchInputProps {
  action? : Dispatch<SetStateAction<string>>
  secondAction? : Dispatch<SetStateAction<IAuthorModel>>
  customAction? : () => void
  query? : string
}
