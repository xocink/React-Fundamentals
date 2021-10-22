import React, { useState } from 'react';
import Button from '../Button/Button';
import SearchInput from '../Input/search-input';
import { getFormatedDuration } from '../../services/utils';
import DeleteButton from '../Button/delete-button';
import { mockedAuthorsList } from '../../tempData/mockedData';
import { IAuthorModel } from '../../models/author-list-model';
import AuthorInput from '../Input/author-input';

const CreateCourse = () : JSX.Element => {
  const [title, setTitle] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [addingAuthor, setAddingAuthor] = useState<IAuthorModel>({ name: '', id: '' });
  const [addedAuthor, setAddedAuthor] = useState<IAuthorModel[]>([]);
  const [courseAuthors, setCourseAuthors] = useState<IAuthorModel[]>([]);
  const [defaultAuthors, setDefaultAuthors] = useState(mockedAuthorsList.map((elem) => elem.name));
  const handleAddingAuthor = () : void => {
    const tempArr = addedAuthor.slice();
    if (tempArr.includes(addingAuthor)) {
      return;
    }
    tempArr.push(addingAuthor);
    setAddedAuthor(() => [...tempArr]);
  };
  // event : MouseEventHandler<HTMLButtonElement>
  const deleteAuthor = (author : IAuthorModel) : void => {
    const tempArr = courseAuthors.slice();
    setCourseAuthors(() => [...tempArr.filter((item) => item.name !== author.name)]);
  };

  const addAuthorToCourse = (author : IAuthorModel) => {
    const tempArr = courseAuthors.slice();
    if (tempArr.includes(author)) {
      return;
    }
    tempArr.push(author);
    setCourseAuthors(() => [...tempArr]);
  };

  return (
    <div className="create-course__wrapper">
      <div className="create-course">
        <div className="create-course__upper">
          <div className="create-course__title-block">
            <h3 className="create-course__title">
              Title :&nbsp;
              {title}
            </h3>
            <SearchInput action={setTitle} />
          </div>
          <div className="create-course__description">
            <h3 className="course-description">Description</h3>
            <textarea id="course-description" />
          </div>
          <Button btnText="Create Course" />
        </div>
        <div className="create-course__duration-block">
          <SearchInput action={setDuration} />
          <h3 className="course-card__description">
            Duration: &nbsp;
            {getFormatedDuration(+duration)}
          </h3>
        </div>
        <div className="create-course__add-authors-block">
          <h3 className="create-course__add-authors-title">
            Add authors
            <AuthorInput secondAction={setAddingAuthor} />
            <Button btnText="Add author" action={handleAddingAuthor} />
          </h3>
        </div>
        <div className="create-course__authors">

          {addedAuthor.map((elem) => (
            <div key={elem.id}>
              {elem.name}
              :
              <Button btnText="Add author" action={() => addAuthorToCourse(elem)} />
            </div>
          ))}

        </div>
        <div className="create-course__course-authors">
          <h3>Course authors</h3>

          {courseAuthors.map((elem) => (
            <div key={elem.id}>
              {elem.name}
              :
              <DeleteButton btnText="Delete Author" deleteAction={() => deleteAuthor(elem)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
