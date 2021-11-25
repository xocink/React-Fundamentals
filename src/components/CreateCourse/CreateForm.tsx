import React, {
  FormEvent, useEffect, useState,
} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../common/Button/Button';
import { IAuthorModel } from './components/interfaces/author-list-interface';
import { getDateString, loginCheck } from '../helpers';
import Title from './components/Title/Title';
import Duration from './components/Duration/Duration';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import Description from './components/Description/Description';
import AuthorsList from './components/AuthorsList/AuthorsList';
import CourseAuthors from './components/CourseAuthors/CourseAuthors';
import { addCourses, fetchCourses, updateCourse } from '../../store/courses/actionCreators';
import { createAuthors } from '../../store/authors/actionCreators';
import { ICourseModelRequestItem } from '../../store/interfaces';
import { getAuthorsSelector, getCoursesSelector, getUserSelector } from '../../store/selectors/selectors';
import { AdminRole } from '../Courses/consts';
import { getAuthorsFromState } from './components/utils/getAuthorsFromState';
import './CreateCourse.scss';

const CreateForm = (): JSX.Element => {
  const user = useSelector(getUserSelector);
  const { id } = useParams<{ id: string }>();
  const courses = useSelector(getCoursesSelector);
  const authors = useSelector(getAuthorsSelector);
  const [curCourse] = courses.filter((el) => el.id === id);
  const [title, setTitle] = useState<string>(id && user.role === AdminRole ? curCourse.title : '');
  const [duration, setDuration] = useState<string>(id && user.role === AdminRole ? String(curCourse.duration) : '');
  const [courseDescription, setCourseDescription] = useState<string>(id && user.role === AdminRole
    ? curCourse.description : '');
  const [testAuthor, setTestAuthor] = useState<string>('');
  const [addedAuthor, setAddedAuthor] = useState<IAuthorModel[]>([]);
  const [courseAuthors, setCourseAuthors] = useState<IAuthorModel[]>(id && user.role === AdminRole
    ? getAuthorsFromState(curCourse.authors, authors) : []);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loginCheck()) {
      history.push('/login');
    }
    if (user.role !== AdminRole) {
      history.push('/courses');
    }
  }, []);

  const testHandle = (authorName: string): void => {
    setTestAuthor(authorName);
  };

  const handleAddingAuthor = (): void => {
    const tempArr = addedAuthor.slice();
    const author: IAuthorModel = {
      name: testAuthor,
      id: uuidv4(),
    };
    if (tempArr.some((value) => value.name === author.name)) {
      return;
    }
    dispatch(createAuthors(testAuthor));
    tempArr.push(author);
    setAddedAuthor(() => [...tempArr]);
  };

  const deleteAuthor = (author: IAuthorModel): void => {
    const tempArr = courseAuthors.slice();
    setCourseAuthors([...tempArr.filter((item) => item.name !== author.name)]);
  };

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleDurationChange = (newDuration: string, ref: HTMLInputElement | undefined) => {
    if ((+newDuration < 300 && +newDuration > 0) || newDuration === '') {
      setDuration(newDuration);
      ref?.classList.remove('error');
    } else {
      ref?.classList.add('error');
    }
  };

  const handleDescriptionChange = (value: string) => {
    setCourseDescription(value);
  };

  const addAuthorToCourse = (author: IAuthorModel) => {
    const tempArr = courseAuthors.slice();
    if (tempArr.includes(author)) {
      return;
    }
    tempArr.push(author);
    setCourseAuthors([...tempArr]);
  };

  const handleCreateCourseBtn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id && user.role === AdminRole) {
      if (duration && courseAuthors.length !== 0 && title && courseDescription) {
        const courseObj: ICourseModelRequestItem = {
          title,
          description: courseDescription,
          creationDate: getDateString(),
          duration: Number(duration),
          authors: courseAuthors.map((elem) => elem.id),
        };
        dispatch(updateCourse(courseObj, id));
        dispatch(fetchCourses());
        history.push('/courses');
      } else {
        alert('fill all fields'); // alert placed here according to task requirements
      }
    } else if (duration && courseAuthors.length !== 0 && title && courseDescription) {
      const courseObj: ICourseModelRequestItem = {
        title,
        description: courseDescription,
        creationDate: getDateString(),
        duration: Number(duration),
        authors: courseAuthors.map((elem) => elem.id),
      };
      dispatch(addCourses(courseObj));
      history.push('/courses');
    } else {
      alert('fill all fields'); // alert placed here according to task requirements
    }
  };

  return (
    <div data-testid="courseForm" className="create-course__wrapper">
      <form className="create-course" onSubmit={handleCreateCourseBtn}>
        <div className="create-course__upper">
          <div className="create-course__title-block">
            <Title value={title} action={handleTitleChange} />
            <Button btnText={id ? 'Update Course' : 'Create Course'} isSubmit />
          </div>
          <Description value={courseDescription} changeHandler={handleDescriptionChange} />
        </div>

        <div className="create-course__authors-block">
          <CreateAuthor
            authorName={testAuthor}
            changeAction={testHandle}
            btnAction={handleAddingAuthor}
          />
          <AuthorsList
            action={addAuthorToCourse}
          />

          <Duration
            newDuration={duration}
            onDurationChange={handleDurationChange}
          />

          <CourseAuthors
            addedToCourseAuthors={courseAuthors}
            action={deleteAuthor}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
