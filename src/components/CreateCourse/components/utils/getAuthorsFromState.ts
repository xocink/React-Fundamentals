import { IAuthorModel } from '../interfaces/author-list-interface';

export const getAuthorsFromState = (authorsId : string[],
  authors : IAuthorModel[]) : IAuthorModel[] => authors.filter((el) => authorsId.includes(el.id));
