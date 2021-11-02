import React, {
  FormEvent, useEffect, useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from '../common/Button/Button';
import { IAuthorModel } from './components/interfaces/author-list-interface';
import { ICourseModel } from './components/interfaces/course-interface';
import { getDateString, loginCheck } from '../helpers';
import Title from './components/Title/Title';
import Duration from './components/Duration/Duration';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import Description from './components/Description/Description';
import AuthorsList from './components/AuthorsList/AuthorsList';
import CourseAuthors from './components/CourseAuthors/CourseAuthors';
import { numberPositiveOnlyReg } from '../helpers/consts';
import './CreateCourse.scss';

interface ICreateCourseProps {
  courses: ICourseModel[]
  changeCoursesList: (value: ICourseModel[]) => void
}

const CreateCourse = ({ changeCoursesList, courses }: ICreateCourseProps): JSX.Element => {
  const [title, setTitle] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [courseDescription, setCourseDescription] = useState<string>('');
  const [testAuthor, setTestAuthor] = useState<string>('');
  const [addedAuthor, setAddedAuthor] = useState<IAuthorModel[]>([]);
  const [courseAuthors, setCourseAuthors] = useState<IAuthorModel[]>([]);
  const history = useHistory();

  useEffect(() => {
    if (!loginCheck()) {
      history.push('/login');
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
    tempArr.push(author);
    setAddedAuthor(() => [...tempArr]);
  };

  const deleteAuthor = (author: IAuthorModel): void => {
    const tempArr = courseAuthors.slice();
    setCourseAuthors(() => [...tempArr.filter((item) => item.name !== author.name)]);
  };

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleDurationChange = (newDuration: string, ref : HTMLInputElement | undefined) => {
    if (numberPositiveOnlyReg.test(newDuration) || newDuration === '') {
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
    setCourseAuthors(() => [...tempArr]);
  };

  const handleCreateCourseBtn = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (duration && courseAuthors.length !== 0 && title && courseDescription) {
      const courseObj: ICourseModel = {
        id: uuidv4(),
        title,
        description: courseDescription,
        creationDate: getDateString(),
        duration: Number(duration),

        authors: courseAuthors.map((elem) => elem.id),
      };
      changeCoursesList([...courses, courseObj]);
      history.push('/courses');
    } else {
      alert('fill all fields'); // alert placed here according to task requirements
    }
  };

  return (
    <div className="create-course__wrapper">
      <form className="create-course" onSubmit={handleCreateCourseBtn}>
        <div className="create-course__upper">
          <div className="create-course__title-block">
            <Title action={handleTitleChange} />
            <Button btnText="Create Course" isSubmit />
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
            addedToCourseAuthors={addedAuthor}
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

export default CreateCourse;
