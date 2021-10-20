import React from 'react';
import { mockedCoursesList } from '../../tempData/mockedData';
import CourseCard from '../CourseCard/course-card';
import './courses.scss';
import SearchInput from '../Input/seatch-input';
import Button from '../Button/Button';

const Courses = () => {
  const mockedValue = mockedCoursesList;
  return (
    <div className="courses__wrapper">
      <div className="courses__menu">
        <div className="search__wrapper">
          <SearchInput />
          <Button btnText="Search" />
        </div>
        <Button btnText="Add new course" />
      </div>
      <div className="courses">
        {mockedValue.map((item) => <CourseCard key={`${item.id}`} id={item.id} title={item.title} description={item.description} creationDate={item.creationDate} duration={item.duration} authors={item.authors} />)}
      </div>
    </div>
  );
};
export default Courses;
