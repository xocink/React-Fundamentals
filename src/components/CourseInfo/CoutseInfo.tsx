import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../common/Button/Button';
import {
  getCourseById, getFormattedAuthor, getFormattedDate, getFormattedDuration, loginCheck,
} from '../helpers';
import './CourseInfo.scss';

import { IStore } from '../../store/interfaces';
import { getAuthorsSelector } from '../../store/selectors/selectors';

// interface ICoursesInfoProps {
//   courses: ICourseModel[]
// }

const CourseInfo = (): JSX.Element => {
  const history = useHistory();
  const coursesList = useSelector((store : IStore) => store.courses);
  const { id } = useParams<{ id: string }>();
  const authors = useSelector(getAuthorsSelector);
  const course = getCourseById(coursesList, id);

  useEffect(() => {
    if (!loginCheck()) {
      history.push('/login');
    }
  }, []);

  const handleButtonClick = () => {
    history.push('/courses');
  };
  return (
    <div className="course-info">

      <h3 className="course-info__title">{course.title}</h3>
      <div className="course-info__bottom">
        <div className="course-info__description">
          {course.description}
        </div>
        <div className="course-info__info">
          <p>
            ID:&nbsp;&nbsp;
            {id}
          </p>
          <p>
            Author:&nbsp;&nbsp;
            {getFormattedAuthor(course.authors, authors)}
          </p>
          <p>
            Duration:&nbsp;&nbsp;
            {getFormattedDuration(course.duration)}
          </p>
          <p>
            Created:&nbsp;&nbsp;
            {getFormattedDate(course.creationDate)}
          </p>
          <Button
            btnText="Back to courses"
            action={handleButtonClick}
          />
        </div>
      </div>

    </div>
  );
};
export default CourseInfo;
