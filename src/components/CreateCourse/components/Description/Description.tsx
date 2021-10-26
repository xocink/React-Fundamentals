import React, { ChangeEvent } from 'react';

interface IDescriptionProps {
  changeHandler : (value : string) => void
  value : string
}

const Description = ({ value, changeHandler } : IDescriptionProps) : JSX.Element => {
  const onChangeHandler = (event : ChangeEvent<HTMLTextAreaElement>) => {
    changeHandler(event.target.value);
  };
  return (
    <div className="create-course__description">
      <h3 className="course-description">Description</h3>
      <textarea
        value={value}
        onChange={onChangeHandler}
        id="course-description"
      />
    </div>
  );
};

export default Description;
