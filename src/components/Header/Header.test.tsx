import '@testing-library/jest-dom';
import * as React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import { IStore } from '../../store/interfaces';
import { userInitialState } from '../../store/user/initialState';
import { authorsInitialState } from '../../store/authors/initialState';
import { coursesInitialState } from '../../store/courses/initialState';

describe('Header tests', () => {
  const initialStoreState : IStore = {
    user: userInitialState,
    authors: authorsInitialState,
    courses: coursesInitialState,
  };
  const mockedStore = configureStore();
  let store;
  it('should render Logo', () => {
    store = mockedStore(initialStoreState);
    const { getByText, getByTestId } = render(
      <Provider store={store}><BrowserRouter><Header /></BrowserRouter></Provider>,
    );
    const logoElem = getByText('Logo');
    const nameElem = getByTestId('username');
    expect(logoElem).toBeVisible();
    expect(nameElem).toBeVisible();
  });
});
