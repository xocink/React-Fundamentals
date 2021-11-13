import React from 'react';
import SearchInput from '../../../common/Input/SearchInput';

interface ITitleProps {
  action : (newTitle : string) => void
  value : string
}

const Title = ({ action, value } : ITitleProps) : JSX.Element => {
  const handleTitleChange = (newTitle : string) => {
    action(newTitle);
  };

  return (
    <div className="create-course__header">
      <h3 className="create-course__title">
        Title :&nbsp;
      </h3>
      <SearchInput value={value} type="text" onChangeAction={handleTitleChange} />
    </div>
  );
};

export default Title;
