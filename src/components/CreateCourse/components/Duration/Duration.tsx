import React from 'react';
import { getFormattedDuration } from '../../../helpers/formatCourseDuration';
import SearchInput from '../../../common/Input/SearchInput';

interface IDurationProps {
  newDuration : string
  onDurationChange : (value : string) => void
}

const Duration = ({ newDuration, onDurationChange }:IDurationProps) : JSX.Element => {
  const handleChange = (value : string) => {
    onDurationChange(value);
  };
  return (
    <div>
      <h3 className="course-card__duration">
        Duration: &nbsp;
        {getFormattedDuration(+newDuration)}
      </h3>
      <SearchInput type="number" onChangeAction={handleChange} />
    </div>
  );
};

export default Duration;
