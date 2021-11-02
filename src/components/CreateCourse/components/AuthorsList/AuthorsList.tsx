import React from 'react';
import { IAuthorModel } from '../interfaces/author-list-interface';
import AuthorItem from '../AuthorItem/AuthorItem';
import { mockedAuthorsList } from '../../../../mockedData/mockedData';

interface IAuthorsListProps {
  action : (value : IAuthorModel) => void
  addedToCourseAuthors : IAuthorModel[]
}

const AuthorsList = ({ addedToCourseAuthors, action } : IAuthorsListProps) : JSX.Element => {
  const defaultAuthors = mockedAuthorsList;

  return (
    <div className="create-course__authors authors-block__item">
      <h3>Authors</h3>
      {defaultAuthors.map((elem) => (
        <AuthorItem key={elem.id} author={elem} btnLabel="Add author" action={action} />
      ))}
      {addedToCourseAuthors.map((elem) => (
        <AuthorItem key={elem.id} author={elem} btnLabel="Add author" action={action} />
      ))}

    </div>
  );
};

export default AuthorsList;
