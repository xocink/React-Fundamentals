import { Dispatch } from 'redux';
import { TAuthorActions } from './reducer';
import { IAuthorsFetchResponse } from '../interfaces';
import { EAuthorsActions } from './actionTypes';

export default {};

export const fetchAuthors = () => async (dispatch : Dispatch<TAuthorActions>) : Promise<void> => {
  try {
    const response : IAuthorsFetchResponse = await fetch('http://localhost:3000/authors/all').then((res) => res.json());
    dispatch({
      type: EAuthorsActions.FETCH_AUTHORS,
      payload: response.result,
    });
  } catch (e) {
    console.log(e);
  }
};

export const createAuthors = (name : string) => async (dispatch: Dispatch<TAuthorActions>) => {
  try {
    const token = localStorage.getItem('token');
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token!);
    // const body = JSON.stringify({ name });
    await fetch('http://localhost:3000/authors/add', {
      method: 'POST',
      headers,
      body: JSON.stringify(name),
    });
    dispatch({
      type: EAuthorsActions.CREATE_AUTHOR,
    });
    const response : IAuthorsFetchResponse = await fetch('http://localhost:3000/authors/all').then((res) => res.json());
    dispatch({
      type: EAuthorsActions.FETCH_AUTHORS,
      payload: response.result,
    });
  } catch (e) {
    console.log(e);
  }
};
