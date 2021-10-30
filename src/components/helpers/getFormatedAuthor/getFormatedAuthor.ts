import { mockedAuthorsList } from '../../../mockedData';

const getAuthorsById = (authorsId : string[]) : string[] => (
  mockedAuthorsList.filter((item) => authorsId.includes(item.id)).map((item) => item.name)
);

export const getFormattedAuthor = (authorsId : string[]) :string => {
  const authorArr : string[] = getAuthorsById(authorsId);
  return authorArr.join(', ');
};
