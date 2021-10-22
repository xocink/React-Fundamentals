import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import { CoursesContext } from '../../App';
import { mockedCoursesList } from '../../tempData/mockedData';
import CourseCard from '../CourseCard/course-card';
import './courses.scss';
import SearchInput from '../Input/search-input';
import Button from '../Button/Button';
import { getFilteredCourses } from '../../services/search-service';
import { ICourseModel } from '../../models/course-model';

const Courses = (): JSX.Element => {
  const controlObj = useContext(CoursesContext);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [shownCourses, setShownCourses] = useState<ICourseModel[]>(mockedCoursesList);
  const [courses] = useState<ICourseModel[]>(mockedCoursesList);

  useEffect(() => {
    setShownCourses(getFilteredCourses(searchQuery, courses));
  }, [searchQuery]);

  return (
    <div className="courses__wrapper">
      <div className="courses__menu">
        <div className="search__wrapper">
          <SearchInput query={searchQuery} action={setSearchQuery} />
          <Button btnText="Search" />
        </div>
        <Link to="create">
          <Button btnText="Add new course" />
        </Link>
      </div>
      <div className="courses">
        {controlObj.actualCourses.map((item) => (
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
    </div>
  );
};
export default Courses;
