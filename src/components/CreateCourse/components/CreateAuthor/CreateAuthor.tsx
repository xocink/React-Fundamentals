import React from 'react';
import Button from '../../../common/Button/Button';
import SearchInput from '../../../common/Input/SearchInput';

interface ICreateAuthorProps {
  btnAction: () => void
  changeAction: (value: string) => void
  authorName: string
}

const CreateAuthor = ({
  authorName, changeAction,
  btnAction,
}: ICreateAuthorProps): JSX.Element => {
  const onChangeHandle = (value: string) => {
    changeAction(value);
  };
  return (
    <div className="create-course__add-authors-block authors-block__item">
      <h3 className="create-course__add-authors-title">
        Add authors :
        {' '}
        {authorName}
      </h3>
      <div>
        <SearchInput value={authorName} type="text" onChangeAction={onChangeHandle} />
        <Button btnText="Add author" action={btnAction} />
      </div>
    </div>
  );
};

export default CreateAuthor;
