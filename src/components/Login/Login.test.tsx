import '@testing-library/jest-dom';
import * as React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';
import { IStore } from '../../store/interfaces';
import { userInitialState } from '../../store/user/initialState';
import { authorsInitialState } from '../../store/authors/initialState';
import { coursesInitialState } from '../../store/courses/initialState';

describe('Login page test', () => {
  const initialStoreState : IStore = {
    user: userInitialState,
    authors: authorsInitialState,
    courses: coursesInitialState,
  };
  const mockedStore = configureStore();
  let store;
  it('Should render login page and login and password block', () => {
    store = mockedStore(initialStoreState);
    const { getByTestId } = render(
      <Provider store={store}><BrowserRouter><Login /></BrowserRouter></Provider>,
    );
    const nameElem = getByTestId('LoginPage');
    const loginBlock = getByTestId('loginEmail');
    const passwordBlock = getByTestId('loginPassword');
    expect(nameElem).toBeDefined();
    expect(loginBlock).toBeDefined();
    expect(passwordBlock).toBeDefined();
  });
});
