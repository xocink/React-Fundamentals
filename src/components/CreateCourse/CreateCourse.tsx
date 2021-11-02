import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from '../common/Button/Button';
import { IAuthorModel } from './components/interfaces/author-list-interface';
import './CreateCourse.scss';
// eslint-disable-next-line import/no-cycle
import { CoursesContext } from '../../App';
import { ICourseModel } from './components/interfaces/course-interface';
import { getDateString } from '../helpers/dateGenerator';
import Title from './components/Title/Title';
import Duration from './components/Duration/Duration';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import Description from './components/Description/Description';
import AuthorsList from './components/AuthorsList/AuthorsList';
import CourseAuthors from './components/CourseAuthors/CourseAuthors';

const CreateCourse = (): JSX.Element => {
  const controlObj = useContext(CoursesContext);
  const [title, setTitle] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [courseDescription, setCourseDescription] = useState<string>('');
  const [testAuthor, setTestAuthor] = useState<string>('');
  const [addedAuthor, setAddedAuthor] = useState<IAuthorModel[]>([]);
  const [courseAuthors, setCourseAuthors] = useState<IAuthorModel[]>([]);
  const history = useHistory();

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

  const handleDurationChange = (newDuration: string) => {
    setDuration(newDuration);
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

  const handleCreateCourseBtn = () => {
    if (duration && courseAuthors.length !== 0 && title && courseDescription) {
      const courseObj: ICourseModel = {
        id: uuidv4(),
        title,
        description: courseDescription,
        creationDate: getDateString(),
        duration: Number(duration),

        authors: courseAuthors.map((elem) => elem.id),
      };
      controlObj.changeFunc([...controlObj.actualCourses, courseObj]);
      history.push('/');
    } else {
      alert('fill all fields'); // alert placed here according to task requirements
    }
  };

  return (
    <div className="create-course__wrapper">
      <form className="create-course">
        <div className="create-course__upper">
          <div className="create-course__title-block">
            <Title title={title} action={handleTitleChange} />
            <Button action={handleCreateCourseBtn} btnText="Create Course" />
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
