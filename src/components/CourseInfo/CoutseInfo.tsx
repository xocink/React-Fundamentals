import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getFormattedAuthor } from '../helpers/getFormatedAuthor/getFormatedAuthor';
import { getFormattedDuration } from '../helpers/formatCourseDuration/formatCourseDuration';
import { getFormattedDate } from '../helpers/formateCourseDate/formateCourseDate';
import Button from '../common/Button/Button';
import './CourseInfo.scss';
import { ICourseModel } from '../CreateCourse/components/interfaces/course-interface';
import { getCourseById } from '../helpers/getCourseById/getCourseById';
import { loginCheck } from '../helpers';

interface ICoursesInfoProps {
  courses: ICourseModel[]
}

const CourseInfo = ({ courses }: ICoursesInfoProps): JSX.Element => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const course = getCourseById(courses, id);

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
            {getFormattedAuthor(course.authors)}
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
