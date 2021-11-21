import '@testing-library/jest-dom';
import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { IStore } from '../../../store/interfaces';
import { userInitialState } from '../../../store/user/initialState';
import { authorsInitialState } from '../../../store/authors/initialState';
import { coursesInitialState } from '../../../store/courses/initialState';
import Courses from '../Courses';
import { store } from '../../../store';

describe('Course tests', () => {
  const initialStoreState: IStore = {
    user: userInitialState,
    authors: authorsInitialState,
    courses: coursesInitialState,
  };
  const user = jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: () => ({
      isAuth: true,
      email: 'test@gmail.com',
      name: 'admin',
      token: 'sasa212',
      role: 'admin',
    }),
  }));

  const courses = jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: () => ([]),
  }));
  const authors = jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: () => ([]),
  }));
  const store1 = {
    user,
    authors,
    courses,
  };
  const mockedStore = configureStore();
  let wrapper;

  it('Component should render', () => {
    // store = mockedStore(initialStoreState);
    render(<Provider store={store}><BrowserRouter><Courses /></BrowserRouter></Provider>);
    const courseCardElements = screen.getByTestId('courses');
    expect(courseCardElements).toBeDefined();
  });

  it('should show 0 cards', () => {
    // store = mockedStore(initialStoreState);
    render(<Provider store={store}><BrowserRouter><Courses /></BrowserRouter></Provider>);
    const courseCardElements = document.querySelectorAll('.courseCard');
    expect(courseCardElements).toHaveLength(0);
  });

  it.skip('show CourseForm after click', () => {
    // store = mockedStore(initialStoreState);
    render(<Provider store={store}><BrowserRouter><Courses /></BrowserRouter></Provider>);
    const createCourseBtn = document.querySelector('createBtn');
    // fireEvent.click(btn);
    // const courseFormElement = screen.getByTestId('courseForm');
    expect(createCourseBtn).not.toBeDefined();
  });
});
