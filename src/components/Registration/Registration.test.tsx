import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { IStore } from '../../store/interfaces';
import { userInitialState } from '../../store/user/initialState';
import { authorsInitialState } from '../../store/authors/initialState';
import { coursesInitialState } from '../../store/courses/initialState';
import Registration from './Registration';

describe('Registration page tests', () => {
  const initialStoreState: IStore = {
    user: userInitialState,
    authors: authorsInitialState,
    courses: coursesInitialState,
  };
  const mockedStore = configureStore();
  let store;
  it('should render all fields in form', () => {
    store = mockedStore(initialStoreState);
    const { getByTestId } = render(<Provider store={store}><BrowserRouter><Registration /></BrowserRouter></Provider>);
    const pageElement = getByTestId('registrationPage');
    const nameElem = getByTestId('registrationName');
    const emailElem = getByTestId('registrationEmail');
    const passwordElem = getByTestId('registrationPassword');
    expect(pageElement).toBeDefined();
    expect(nameElem).toBeDefined();
    expect(emailElem).toBeDefined();
    expect(passwordElem).toBeDefined();
  });
});
