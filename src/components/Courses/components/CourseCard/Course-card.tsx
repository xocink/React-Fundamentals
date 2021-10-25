import React from 'react';
import { ICourseModel } from '../../../../models/course-model';
import Button from '../../../common/Button/Button';

import './Course-card.scss';
import { getFormattedDuration } from '../../../helpers/formatCourseDuration';
import { getFormattedDate } from '../../../helpers/formateCourseDate';
import { getFormattedAuthor } from '../../../helpers/getFormatedAuthor';

const CourseCard = ({
  id, creationDate, description, duration, title, authors,
} : ICourseModel) : JSX.Element => (
  <div className="course-card__wrapper">
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
        <Button btnText="Show Course" />
      </div>
    </div>
  </div>
);

export default CourseCard;
