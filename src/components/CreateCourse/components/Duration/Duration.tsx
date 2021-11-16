import React from 'react';
import { getFormattedDuration } from '../../../helpers';
import SearchInput from '../../../common/Input/SearchInput';

interface IDurationProps {
  newDuration: string
  onDurationChange: (value: string, ref? : HTMLInputElement) => void
}

const Duration = ({ newDuration, onDurationChange }: IDurationProps): JSX.Element => {
  const handleChange = (value: string) => {
    onDurationChange(value);
  };
  return (
    <div className="create-course__duration-block authors-block__item">
      <div>
        <h3 className="course-card__duration">
          Duration: &nbsp;
          {getFormattedDuration(+newDuration)}
        </h3>
        <SearchInput value={newDuration} type="number" onChangeAction={handleChange} />
      </div>
    </div>

  );
};

export default Duration;
