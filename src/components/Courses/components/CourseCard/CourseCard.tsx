import React from 'react';
import { useHistory } from 'react-router-dom';
import { ICourseModel } from '../../../CreateCourse/components/interfaces/course-interface';
import Button from '../../../common/Button/Button';
import { getFormattedAuthor, getFormattedDate, getFormattedDuration } from '../../../helpers';
import './CourseCard.scss';

const CourseCard = ({
  id, creationDate, description, duration, title, authors,
}: ICourseModel): JSX.Element => {
  const history = useHistory();
  const handleButtonClick = () => {
    history.push(`/courses/add/${id}`);
  };

  return (
    <div className="course-card">
      <div className="course-card__description-block">
        <h3 className="course-card__title">{title}</h3>
        <div className="course-card__description">{description}</div>
      </div>
      <div className="course-card__info-block">
        <p>
          Author:&nbsp;&nbsp;
          {getFormattedAuthor(authors)}
        </p>
        <p>
          Duration:&nbsp;&nbsp;
          {getFormattedDuration(duration)}
        </p>
        <p>
          Created:&nbsp;&nbsp;
          {getFormattedDate(creationDate)}
        </p>
        <Button
          btnText="Show Course"
          action={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default CourseCard;
