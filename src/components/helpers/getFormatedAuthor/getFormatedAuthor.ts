import { IAuthorModelStore } from '../../../store/interfaces';

const getAuthorsById = (authorsId : string[], authors : IAuthorModelStore[]) : string[] => (
  authors.filter((item) => authorsId.includes(item.id)).map((item) => item.name)
);

export const getFormattedAuthor = (authorIds : string[], authors : IAuthorModelStore[]) :string => {
  const authorArr : string[] = getAuthorsById(authorIds, authors);
  return authorArr.join(', ');
};
