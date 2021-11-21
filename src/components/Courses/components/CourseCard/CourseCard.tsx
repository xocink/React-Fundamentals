import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { ICourseModel } from '../../../CreateCourse/components/interfaces/course-interface';
import Button from '../../../common/Button/Button';
import { getFormattedAuthor, getFormattedDate, getFormattedDuration } from '../../../helpers';
import { deleteCourses } from '../../../../store/courses/actionCreators';
import { getAuthorsSelector, getUserSelector } from '../../../../store/selectors/selectors';
import styles from './CourseCard.module.scss';
import { AdminRole } from '../../consts';

const CourseCard = ({
  id, creationDate, description, duration, title, authors,
}: ICourseModel): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();
  const authorsList = useSelector(getAuthorsSelector);
  const user = useSelector(getUserSelector);
  const deleteButtonStyles = classNames(styles.small, styles.delete);
  const updateButtonStyles = classNames(styles.small, styles.update);

  const handleButtonClick = () => {
    history.push(`/courses/add/${id}`);
  };
  const handleUpdateClick = () => {
    history.push(`/courses/update/${id}`);
  };

  const handleDeleteBtn = () => {
    dispatch(deleteCourses(id));
  };
  return (
    <div className={styles.courseCard}>
      <div className={styles.courseCard__descriptionBlock}>
        <h3 data-testid="courseCardTitle" className={styles.courseCard__title}>{title}</h3>
        <div data-testid="courseCardDescription" className="course-card__description">{description}</div>
      </div>
      <div className={styles.courseCard__infoBlock}>
        <p data-testid="courseCardAuthors">
          Author:&nbsp;&nbsp;
          {getFormattedAuthor(authors, authorsList)}
        </p>
        <p data-testid="courseCardDuration">
          Duration:&nbsp;&nbsp;
          {getFormattedDuration(duration)}
        </p>
        <p data-testid="courseCardCreationDate">
          Created:&nbsp;&nbsp;
          {getFormattedDate(creationDate)}
        </p>
        <Button
          btnText="Show Course"
          action={handleButtonClick}
        />
        {user.role === AdminRole ? (
          <>
            <Button
              btnText=""
              action={handleDeleteBtn}
              btnClassName={deleteButtonStyles}
            />
            <Button
              btnText=""
              action={handleUpdateClick}
              btnClassName={updateButtonStyles}
            />
          </>
        ) : ''}
      </div>
    </div>
  );
};

export default CourseCard;
