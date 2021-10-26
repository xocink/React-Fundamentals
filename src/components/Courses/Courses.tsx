import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import { CoursesContext } from '../../App';
import { mockedCoursesList } from '../../mockedData/mockedData';
import CourseCard from './components/CourseCard/CourseCard';
import './Courses.scss';
import SearchInput from '../common/Input/SearchInput';
import Button from '../common/Button/Button';
import { getFilteredCourses } from '../helpers/getFolteredCourses';
import { ICourseModel } from '../CreateCourse/components/interfaces/course-interface';

const Courses = (): JSX.Element => {
  const controlObj = useContext(CoursesContext);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [shownCourses, setShownCourses] = useState<ICourseModel[]>(mockedCoursesList);

  useEffect(() => {
    setShownCourses(getFilteredCourses(searchQuery, controlObj.actualCourses));
  }, [searchQuery]);

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
