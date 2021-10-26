import { Dispatch, SetStateAction } from 'react';
import { IAuthorModel } from '../../../CreateCourse/components/interfaces/author-list-interface';

export interface ISearchInputProps {
  onChangeAction: (newTitle : string) => void
  type : string

}
