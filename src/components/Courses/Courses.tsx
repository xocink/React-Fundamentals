import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle

import { mockedCoursesList } from '../../mockedData';
import CourseCard from './components/CourseCard/CourseCard';
import './Courses.scss';
import SearchInput from '../common/Input/SearchInput';
import Button from '../common/Button/Button';
import { getFilteredCourses } from '../helpers/getFilteredCourses/getFilteredCourses';
import { ICourseModel } from '../CreateCourse/components/interfaces/course-interface';
import { loginCheck } from '../helpers';

interface ICoursesProps {
  courses : ICourseModel[]
}

const Courses = ({ courses } : ICoursesProps): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [shownCourses, setShownCourses] = useState<ICourseModel[]>(mockedCoursesList);
  const history = useHistory();
  useEffect(() => {
    setShownCourses(getFilteredCourses(searchQuery, courses));
  }, [searchQuery]);

  useEffect(() => {
    if (!loginCheck()) {
      history.push('/login');
    }
  }, []);

  const onQueryChange = (query : string) => {
    setSearchQuery(query);
  };
  return (
    <div className="courses__wrapper">
      <div className="courses__menu">
        <div className="search__wrapper">
          <SearchInput type="text" onChangeAction={onQueryChange} />
          <Button btnText="Search" />
        </div>
        <Link to="courses/add">
          <Button btnText="Add new course" />
        </Link>
      </div>
      {shownCourses.map((item) => (
        <CourseCard
          key={`${item.id}`}
          id={item.id}
          title={item.title}
          description={item.description}
          creationDate={item.creationDate}
          duration={item.duration}
          authors={item.authors}
        />
      ))}
    </div>
  );
};
export default Courses;
