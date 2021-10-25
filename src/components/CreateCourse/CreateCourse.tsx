import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from '../common/Button/Button';
import SearchInput from '../common/Input/SearchInput';

import { mockedAuthorsList } from '../../mockedData/mockedData';
import { IAuthorModel } from '../../models/author-list-model';
import AuthorInput from '../common/Input/author-input';
import './CreateCourse.scss';
// eslint-disable-next-line import/no-cycle
import { CoursesContext } from '../../App';
import { ICourseModel } from '../../models/course-model';
import { getFormattedDuration } from '../helpers/formatCourseDuration';
import { getDateString } from '../helpers/dateGenerator';
import Author from './components/Author/Author';
import Title from './components/Title/Title';
import Duration from './components/Duration/Duration';

const CreateCourse = (): JSX.Element => {
  const controlObj = useContext(CoursesContext);
  const [title, setTitle] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [courseDescription, setCourseDescription] = useState<string>('');
  const [addingAuthor, setAddingAuthor] = useState<IAuthorModel>({ name: '', id: '' });
  const [addedAuthor, setAddedAuthor] = useState<IAuthorModel[]>([]);
  const [courseAuthors, setCourseAuthors] = useState<IAuthorModel[]>([]);
  const defaultAuthors: IAuthorModel[] = mockedAuthorsList;
  const history = useHistory();

  const handleAddingAuthor = (): void => {
    const tempArr = addedAuthor.slice();
    if (tempArr.includes(addingAuthor)) {
      return;
    }
    tempArr.push(addingAuthor);
    setAddedAuthor(() => [...tempArr]);
  };

  // const handleAuthorNameAdding = (authorName : string) => {
  //   setAddingAuthor(authorName);
  // };

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
      <div className="create-course">
        <div className="create-course__upper">
          <div className="create-course__title-block">
            <Title title={title} action={handleTitleChange} />

            <Button action={handleCreateCourseBtn} btnText="Create Course" />

          </div>
          <div className="create-course__description">
            <h3 className="course-description">Description</h3>
            <textarea
              value={courseDescription}
              onChange={(event) => setCourseDescription(event.target.value)}
              id="course-description"
            />
          </div>

        </div>

        <div className="create-course__authors-block">
          <div className="create-course__add-authors-block authors-block__item">
            <h3 className="create-course__add-authors-title">
              Add authors
            </h3>
            <div>
              {/* <AuthorInput secondAction={setAddingAuthor} /> */}
              <Button btnText="Add author" action={handleAddingAuthor} />
            </div>
          </div>
          <div className="create-course__authors authors-block__item">
            <h3>Authors</h3>
            {defaultAuthors.map((elem) => (
              <Author key={elem.id} author={elem} btnLabel="Add author" action={addAuthorToCourse} />
            ))}
            {addedAuthor.map((elem) => (
              <Author key={elem.id} author={elem} btnLabel="Add author" action={addAuthorToCourse} />
            ))}

          </div>
          <div className="create-course__duration-block authors-block__item">
            <Duration newDuration={duration} onDurationChange={handleDurationChange} />
          </div>
          <div className="create-course__course-authors authors-block__item">
            <h3>Course authors</h3>
            {courseAuthors.length === 0 ? (<p>No authors added</p>)
              : courseAuthors.map((elem) => (
                <Author
                  key={elem.id}
                  author={elem}
                  btnLabel="Delete author"
                  action={deleteAuthor}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
