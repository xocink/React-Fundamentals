import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Courses from './components/Courses/courses';

const App = () => (
  <div className="container">
    <Header />
    <Courses />
  </div>
);

export default App;
