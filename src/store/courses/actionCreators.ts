import { Dispatch } from 'redux';

import { ECourseActions } from './actionTypes';
import { ICourseModelRequestItem, ICoursesFetchResponse } from '../interfaces';
import { TCourseAction } from './reducer';

const token = localStorage.getItem('token') || '';

export const fetchCourses = () => async (dispatch: Dispatch<TCourseAction>): Promise<void> => {
  try {
    const response: ICoursesFetchResponse = await fetch('http://localhost:3000/courses/all').then((res) => res.json());
    dispatch({
      type: ECourseActions.FETCH_COURSES,
      payload: response.result,
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

export const deleteCourses = (
  id: string,
) => async (dispatch: Dispatch<TCourseAction>): Promise<void> => {
  try {
    const headers = new Headers();
    // const token = localStorage.getItem('token');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    await fetch(`http://localhost:3000/courses/${id}`, {
      method: 'DELETE',
      headers,
    });
    dispatch({
      type: ECourseActions.DELETE_COURSE,
      payload: id,
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
  try {
    const response: ICoursesFetchResponse = await fetch('http://localhost:3000/courses/all').then((res) => res.json());
    dispatch({
      type: ECourseActions.FETCH_COURSES,
      payload: response.result,
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};
export const addCourses = (
  course: ICourseModelRequestItem,
) => async (dispatch: Dispatch<TCourseAction>): Promise<void> => {
  try {
    const headers = new Headers();
    // const token = localStorage.getItem('token');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
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
    // eslint-disable-next-line no-console
    console.log(e);
  }

  try {
    const response: ICoursesFetchResponse = await fetch('http://localhost:3000/courses/all').then((res) => res.json());
    dispatch({
      type: ECourseActions.FETCH_COURSES,
      payload: response.result,
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

export const updateCourse = (course: ICourseModelRequestItem,
  id : string) => async (dispatch: Dispatch<TCourseAction>) : Promise<void> => {
  try {
    const headers = new Headers();
    // const token = localStorage.getItem('token') || '';
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    const body = JSON.stringify(course);
    await fetch(`http://localhost:3000/courses/${id}`, {
      method: 'PUT',
      headers,
      body,
    });
    dispatch({
      type: ECourseActions.UPDATE_COURSE,
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};
