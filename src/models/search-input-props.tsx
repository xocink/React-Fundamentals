import { Dispatch, SetStateAction } from 'react';
import { IAuthorModel } from './author-list-model';

export interface ISearchInputProps {
  onChangeAction: (newTitle : string) => void
  type : string

}
