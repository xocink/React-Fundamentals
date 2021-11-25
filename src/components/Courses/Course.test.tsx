import '@testing-library/jest-dom';
import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Courses from './Courses';
import { store } from '../../store';

describe('Course tests', () => {
  it('Component should render', () => {
    const { getByTestId } = render(
      <Provider store={store}><BrowserRouter><Courses /></BrowserRouter></Provider>,
    );
    const courseCardElements = getByTestId('courses');
    expect(courseCardElements).toBeDefined();
  });

  it('should show 0 cards', () => {
    render(<Provider store={store}><BrowserRouter><Courses /></BrowserRouter></Provider>);
    const courseCardElements = document.querySelectorAll('.courseCard');
    expect(courseCardElements).toHaveLength(0);
  });

  it('show CourseForm after click', async () => {
    const { getByTestId } = render(
      <Provider store={store}><BrowserRouter><Courses /></BrowserRouter></Provider>,
    );
    const createCourseBtn = getByTestId('btnElement');
    fireEvent.click(createCourseBtn);
    expect(createCourseBtn).toBeDefined();
  });
});
