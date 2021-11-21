import '@testing-library/jest-dom';
import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../store';
import CreateForm from '../CreateForm';

describe('Create form tests', () => {
  it('Component should render', () => {
    // store = mockedStore(initialStoreState);
    render(<Provider store={store}><BrowserRouter><CreateForm /></BrowserRouter></Provider>);
    const courseCardElements = screen.getByTestId('courseForm');
    expect(courseCardElements).toBeDefined();
  });
});
