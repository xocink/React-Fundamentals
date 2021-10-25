import React from 'react';
import SearchInput from '../../../common/Input/SearchInput';

interface ITitleProps {
  title : string
  action : (newTitle : string) => void
}

const Title = ({ title, action } : ITitleProps) : JSX.Element => {
  const handleTitleChange = (newTitle : string) => {
    action(newTitle);
  };

  return (
    <div className="create-course__header">
      <h3 className="create-course__title">
        Title :&nbsp;
        {title}
      </h3>
      <SearchInput type="text" onChangeAction={handleTitleChange} />
    </div>
  );
};

export default Title;
