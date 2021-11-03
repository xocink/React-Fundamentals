import { Dispatch } from 'redux';

import { ECourseActions } from './actionTypes';
import { ICourseModelStoreItem } from '../interfaces';
import { TCourseAction } from './reducer';

export default {};

export const fetchCourses = (
  courses : ICourseModelStoreItem[],
) => async (dispatch: Dispatch<TCourseAction>) => {
  console.log('we heeeeee');
  dispatch({
    type: ECourseActions.FETCH_COURSES,
    payload: courses,
  });
};
export const deleteCourses = (id : string) => (dispatch: Dispatch<TCourseAction>) : void => {
  console.log('we heeeeee2');
  dispatch({
    type: ECourseActions.DELETE_COURSE,
    payload: id,
  });
};
export const addCourses = (
  course : ICourseModelStoreItem,
) => (dispatch:Dispatch<TCourseAction>) : void => {
  console.log('we heeeeee3');
  dispatch({
    type: ECourseActions.CREATE_COURSE,
    payload: course,
  });
};
