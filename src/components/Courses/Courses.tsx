import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CourseCard from './components/CourseCard/CourseCard';
import SearchInput from '../common/Input/SearchInput';
import Button from '../common/Button/Button';
import { getFilteredCourses, loginCheck } from '../helpers';
import { ICourseModel } from '../CreateCourse/components/interfaces/course-interface';
import { fetchCourses } from '../../store/courses/actionCreators';
import { getCoursesSelector, getUserSelector } from '../../store/selectors/selectors';
import { fetchAuthors } from '../../store/authors/actionCreators';
import { AdminRole } from './consts';
import styles from './Courses.module.scss';

const Courses = (): JSX.Element => {
  const coursesList = useSelector(getCoursesSelector);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [shownCourses, setShownCourses] = useState<ICourseModel[]>(useSelector(getCoursesSelector));
  const user = useSelector(getUserSelector);
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
    <div data-testid="courses" className={styles.courses__wrapper}>
      <div className={styles.courses__menu}>
        <div className={styles.search__wrapper}>
          <SearchInput value={searchQuery} type="text" onChangeAction={onQueryChange} />
          <Button btnText="Search" />
        </div>
        { user.role === AdminRole ? (
          <Link to="courses/add">
            <Button btnText="Add new course" btnClassName="createBtn" />
          </Link>
        ) : '' }
      </div>
      <div className={styles.courses__cards}>
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
