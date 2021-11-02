import React from 'react';
import { IAuthorModel } from '../interfaces/author-list-interface';
import Button from '../../../common/Button/Button';

interface IAuthorItemProps {
  author: IAuthorModel
  action: (elem : IAuthorModel) => void
  btnLabel: string
}

const AuthorItem = ({ author, action, btnLabel }: IAuthorItemProps): JSX.Element => {
  const handleButtonClick = () => {
    action(author);
  };

  return (
    <div className="course-authors">
      {author.name}
      <Button btnText={btnLabel} action={handleButtonClick} />
    </div>
  );
};

export default AuthorItem;
