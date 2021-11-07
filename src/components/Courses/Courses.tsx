import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { mockedCoursesList } from '../../mockedData';
import CourseCard from './components/CourseCard/CourseCard';
import SearchInput from '../common/Input/SearchInput';
import Button from '../common/Button/Button';
import { getFilteredCourses, loginCheck } from '../helpers';
import { ICourseModel } from '../CreateCourse/components/interfaces/course-interface';
import './Courses.scss';
import { fetchCourses } from '../../store/courses/actionCreators';
import { getCoursesSelector } from '../../store/selectors/selectors';
import { fetchAuthors } from '../../store/authors/actionCreators';

interface ICoursesProps {
  courses: ICourseModel[]
}

const Courses = ({ courses }: ICoursesProps): JSX.Element => {
  const coursesList = useSelector(getCoursesSelector);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [shownCourses, setShownCourses] = useState<ICourseModel[]>(coursesList);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loginCheck()) {
      history.push('/login');
    }
    dispatch(fetchCourses());
    dispatch(fetchAuthors());
  }, []);

  useEffect(() => {
    setShownCourses(getFilteredCourses(searchQuery, coursesList));
  }, [searchQuery]);

  const onQueryChange = (query: string) => {
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
      <div className="courses__cards">
        {coursesList.map((item) => (
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
