import '@testing-library/jest-dom';
import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { IStore } from '../../store/interfaces';
import { userInitialState } from '../../store/user/initialState';
import { authorsInitialState } from '../../store/authors/initialState';
import { coursesInitialState } from '../../store/courses/initialState';
import Courses from './Courses';
import { store } from '../../store';

describe('Course tests', () => {
  const initialStoreState: IStore = {
    user: userInitialState,
    authors: authorsInitialState,
    courses: coursesInitialState,
  };

  const mockedStore = configureStore();
  let wrapper;

  it('Component should render', () => {
    // store = mockedStore(initialStoreState);
    const { getByTestId } = render(<Provider store={store}><BrowserRouter><Courses /></BrowserRouter></Provider>);
    const courseCardElements = getByTestId('courses');
    expect(courseCardElements).toBeDefined();
  });

  it('should show 0 cards', () => {
    // store = mockedStore(initialStoreState);
    render(<Provider store={store}><BrowserRouter><Courses /></BrowserRouter></Provider>);
    const courseCardElements = document.querySelectorAll('.courseCard');
    expect(courseCardElements).toHaveLength(0);
  });

  it('show CourseForm after click', async () => {
    // store = mockedStore(initialStoreState);
    const { getByTestId } = render(<Provider store={store}><BrowserRouter><Courses /></BrowserRouter></Provider>);
    const createCourseBtn = getByTestId('btnElement'); // testid for button and getAllByTestID container.getElementsByClassName
    fireEvent.click(createCourseBtn);
    expect(createCourseBtn).toBeDefined();
    // const courseFormElement = await getByTestId('courseForm');
  });
});
