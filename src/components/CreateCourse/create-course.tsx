import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button';
import SearchInput from '../Input/search-input';
import { getDateString, getFormatedDuration } from '../../services/utils';
import DeleteButton from '../Button/delete-button';
import { mockedAuthorsList } from '../../tempData/mockedData';
import { IAuthorModel } from '../../models/author-list-model';
import AuthorInput from '../Input/author-input';
import './create-course.scss';
// eslint-disable-next-line import/no-cycle
import { CoursesContext } from '../../App';
import { ICourseModel } from '../../models/course-model';

const CreateCourse = (): JSX.Element => {
  const controlObj = useContext(CoursesContext);
  const [title, setTitle] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [courseDescription, setCourseDescription] = useState<string>('');
  const [addingAuthor, setAddingAuthor] = useState<IAuthorModel>({ name: '', id: '' });
  const [addedAuthor, setAddedAuthor] = useState<IAuthorModel[]>([]);
  const [courseAuthors, setCourseAuthors] = useState<IAuthorModel[]>([]);
  const [defaultAuthors] = useState<IAuthorModel[]>(mockedAuthorsList);
  const history = useHistory();

  const handleAddingAuthor = (): void => {
    const tempArr = addedAuthor.slice();
    if (tempArr.includes(addingAuthor)) {
      return;
    }
    tempArr.push(addingAuthor);
    setAddedAuthor(() => [...tempArr]);
  };
  // event : MouseEventHandler<HTMLButtonElement>
  const deleteAuthor = (author: IAuthorModel): void => {
    const tempArr = courseAuthors.slice();
    setCourseAuthors(() => [...tempArr.filter((item) => item.name !== author.name)]);
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
            <div className="create-course__header">
              <h3 className="create-course__title">
                Title :&nbsp;
                {title}
              </h3>
              <SearchInput action={setTitle} />
            </div>

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
              <AuthorInput secondAction={setAddingAuthor} />
              <Button btnText="Add author" action={handleAddingAuthor} />
            </div>
          </div>
          <div className="create-course__authors authors-block__item">
            <h3>Authors</h3>
            {defaultAuthors.map((elem) => (
              <div className="course-authors" key={elem.id}>
                {elem.name}
                {' '}
                &nbsp;
                :
                <Button btnText="Add author" action={() => addAuthorToCourse(elem)} />
              </div>
            ))}
            {addedAuthor.map((elem) => (
              <div className="course-authors" key={elem.id}>
                {elem.name}
                {' '}
                &nbsp;
                :
                <Button btnText="Add author" action={() => addAuthorToCourse(elem)} />
              </div>
            ))}

          </div>
          <div className="create-course__duration-block authors-block__item">
            <div>
              <h3 className="course-card__duration">
                Duration: &nbsp;
                {getFormatedDuration(+duration)}
              </h3>
              <SearchInput action={setDuration} />
            </div>
          </div>
          <div className="create-course__course-authors authors-block__item">
            <h3>Course authors</h3>
            {courseAuthors.length === 0 ? <p>No authors added</p>
              : courseAuthors.map((elem) => (
                <div className="course-authors" key={elem.id}>
                  {elem.name}
                  &nbsp; :
                  <DeleteButton btnText="Delete Author" deleteAction={() => deleteAuthor(elem)} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
