import React from 'react';
import { useSelector } from 'react-redux';
import { IAuthorModel } from '../interfaces/author-list-interface';
import AuthorItem from '../AuthorItem/AuthorItem';
import { getAuthorsSelector } from '../../../../store/selectors/selectors';

interface IAuthorsListProps {
  action: (value: IAuthorModel) => void
}

const AuthorsList = ({ action }: IAuthorsListProps): JSX.Element => {
  const defaultAuthors = useSelector(getAuthorsSelector);

  return (
    <div className="create-course__authors authors-block__item">
      <h3>Authors</h3>
      {defaultAuthors.map((elem) => (
        <AuthorItem key={elem.id} author={elem} btnLabel="Add author" action={action} />
      ))}

    </div>
  );
};

export default AuthorsList;
