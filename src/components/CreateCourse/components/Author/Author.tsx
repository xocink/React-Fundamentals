import React from 'react';
import { IAuthorModel } from '../../../../models/author-list-model';
import Button from '../../../common/Button/Button';

interface IAuthor {
  author: IAuthorModel
  action: (elem : IAuthorModel) => void
  btnLabel: string
}

const Author = ({ author, action, btnLabel }: IAuthor): JSX.Element => {
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

export default Author;
