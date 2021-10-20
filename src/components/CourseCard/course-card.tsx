import React from 'react';
import { ICourseModel } from '../../models/course-model';
import Button from '../Button/Button';
import {
  getFormatedAuthor, getFormatedDate, getFormatedDuration,
} from '../../services/utils';
import './course-card.scss';

const CourseCard = ({
  id, creationDate, description, duration, title, authors,
} : ICourseModel) => {
  const test = 1;
  return (
    <div className="course-card__wrapper">
      <div className="course-card">
        <div className="course-card__description-block">
          <h3 className="course-card__title">{title}</h3>
          <div className="course-card__description">{description}</div>
        </div>
        <div className="course-card__info-block">
          <p>
            Author:&nbsp;&nbsp;
            {getFormatedAuthor(authors)}
          </p>
          <p>
            Duration:&nbsp;&nbsp;
            {getFormatedDuration(duration)}
          </p>
          <p>
            Created:&nbsp;&nbsp;
            {getFormatedDate(creationDate)}
          </p>
          <Button btnText="Show Course" />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
