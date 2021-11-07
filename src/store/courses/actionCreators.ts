import { Dispatch } from 'redux';

import { ECourseActions } from './actionTypes';
import { ICourseModelRequestItem, ICourseModelStoreItem, ICoursesFetchResponse } from '../interfaces';
import { TCourseAction } from './reducer';

export const fetchCourses = (
) => async (dispatch: Dispatch<TCourseAction>) => {
  try {
    const response : ICoursesFetchResponse = await fetch('http://localhost:3000/courses/all').then((res) => res.json());
    dispatch({
      type: ECourseActions.FETCH_COURSES,
      payload: response.result,
    });
  } catch (e) {
    console.log(e);
  }
};
export const deleteCourses = (id : string) => (dispatch: Dispatch<TCourseAction>) => {
  dispatch({
    type: ECourseActions.DELETE_COURSE,
    payload: id,
  });
};
export const addCourses = (
  course : ICourseModelRequestItem,
) => async (dispatch:Dispatch<TCourseAction>) => {
  try {
    const headers = new Headers();
    const token = localStorage.getItem('token');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token!);
    const body = JSON.stringify(course);
    await fetch('http://localhost:3000/courses/add', {
      method: 'POST',
      headers,
      body,
    });
    dispatch({
      type: ECourseActions.CREATE_COURSE,
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const response : ICoursesFetchResponse = await fetch('http://localhost:3000/courses/all').then((res) => res.json());
    dispatch({
      type: ECourseActions.FETCH_COURSES,
      payload: response.result,
    });
  } catch (e) {
    console.log(e);
  }
};
