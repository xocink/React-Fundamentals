import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { IStore } from '../../../../../store/interfaces';
import { userInitialState } from '../../../../../store/user/initialState';
import { authorsInitialState } from '../../../../../store/authors/initialState';
import { coursesInitialState } from '../../../../../store/courses/initialState';
import CourseCard from '../CourseCard';

describe('Course card tests', () => {
  const initialStoreState: IStore = {
    user: userInitialState,
    authors: authorsInitialState,
    courses: coursesInitialState,
  };
  const mockedCourseCard = {
    title: 'qwqw',
    description: '234',
    duration: 1237,
    authors: [
      '9b87e8b8-6ba5-40fc-a439-c4e30a373d36',
      '40b21bd5-cbae-4f33-b154-0252b1ae03a9',
      '072fe3fc-e751-4745-9af5-aa9eed0ea9ed',
      '1c972c52-3198-4098-b6f7-799b45903199',
    ],
    creationDate: '09/11/2021',
    id: '8976d5f1-f5d0-4a17-9eb3-e811b9dab9c2',
  };
  const mockedStore = configureStore();
  let store;
  let wrapper;

  it('should render right title', () => {
    store = mockedStore(initialStoreState);
    render(<Provider store={store}>
      <BrowserRouter>
        <CourseCard
          {...mockedCourseCard}
        />
      </BrowserRouter>
    </Provider>);
    const title = screen.getByTestId('courseCardTitle');
    expect(title).toHaveTextContent('qwqw');
  });

  it('should render right description', () => {
    store = mockedStore(initialStoreState);
    render(<Provider store={store}>
      <BrowserRouter>
        <CourseCard
          {...mockedCourseCard}
        />
      </BrowserRouter>
    </Provider>);
    const title = screen.getByTestId('courseCardDescription');
    expect(title).toHaveTextContent('234');
  });

  it('should render right duration', () => {
    store = mockedStore(initialStoreState);
    render(<Provider store={store}>
      <BrowserRouter>
        <CourseCard
          {...mockedCourseCard}
        />
      </BrowserRouter>
    </Provider>);
    const title = screen.getByTestId('courseCardDuration');
    expect(title).toHaveTextContent('20:37 hours');
  });

  it('should render right creation date', () => {
    store = mockedStore(initialStoreState);
    render(<Provider store={store}>
      <BrowserRouter>
        <CourseCard
          {...mockedCourseCard}
        />
      </BrowserRouter>
    </Provider>);
    const title = screen.getByTestId('courseCardCreationDate');
    expect(title).toHaveTextContent('Created: 09.11.2021');
  });

  it('should render Logo', () => {
    store = mockedStore(initialStoreState);
    render(<Provider store={store}>
      <BrowserRouter>
        <CourseCard
          {...mockedCourseCard}
        />
      </BrowserRouter>
    </Provider>);
    const title = screen.getByTestId('courseCardAuthors');
    expect(title).toHaveTextContent('Author:');
  });
});
