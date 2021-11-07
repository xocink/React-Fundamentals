import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ICourseModel } from '../../../CreateCourse/components/interfaces/course-interface';
import Button from '../../../common/Button/Button';
import { getFormattedAuthor, getFormattedDate, getFormattedDuration } from '../../../helpers';
import './CourseCard.scss';
import { deleteCourses } from '../../../../store/courses/actionCreators';
import { getAuthorsSelector } from '../../../../store/selectors/selectors';

const CourseCard = ({
  id, creationDate, description, duration, title, authors,
}: ICourseModel): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();
  const authorsList = useSelector(getAuthorsSelector);
  const handleButtonClick = () => {
    history.push(`/courses/add/${id}`);
  };

  const handleDeleteBtn = () => {
    dispatch(deleteCourses('66cc289e-6de9-49b2-9ca7-8b4f409d6467'));
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
          {getFormattedAuthor(authors, authorsList)}
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
        <Button
          btnText="Delete"
          action={handleDeleteBtn}
        />
      </div>
    </div>
  );
};

export default CourseCard;
