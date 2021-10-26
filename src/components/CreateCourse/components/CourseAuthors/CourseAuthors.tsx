import React from 'react';
import { IAuthorModel } from '../interfaces/author-list-interface';
import AuthorItem from '../AuthorItem/AuthorItem';

interface ICourseAuthorsProps {
  action : (value : IAuthorModel) => void
  addedToCourseAuthors : IAuthorModel[]
}

const CourseAuthors = ({ addedToCourseAuthors, action } : ICourseAuthorsProps) : JSX.Element => (
  <div className="create-course__course-authors authors-block__item">
    <h3>Course authors</h3>
    {addedToCourseAuthors.length === 0 ? (<p>No authors added</p>)
      : addedToCourseAuthors.map((elem) => (
        <AuthorItem
          key={elem.id}
          author={elem}
          btnLabel="Delete author"
          action={action}
        />
      ))}
  </div>
);

export default CourseAuthors;
