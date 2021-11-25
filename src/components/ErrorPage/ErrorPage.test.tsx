import '@testing-library/jest-dom';
import * as React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import { IStore } from '../../store/interfaces';
import { userInitialState } from '../../store/user/initialState';
import { authorsInitialState } from '../../store/authors/initialState';
import { coursesInitialState } from '../../store/courses/initialState';

describe('Error page test', () => {
  const initialStoreState : IStore = {
    user: userInitialState,
    authors: authorsInitialState,
    courses: coursesInitialState,
  };
  const mockedStore = configureStore();
  let store;
  it('should render Logo', () => {
    store = mockedStore(initialStoreState);
    const { getByTestId } = render(
      <Provider store={store}><BrowserRouter><ErrorPage /></BrowserRouter></Provider>,
    );
    const nameElem = getByTestId('errorPage');
    expect(nameElem).toBeDefined();
  });
});
