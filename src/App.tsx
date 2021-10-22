import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Courses from './components/Courses/courses';
import CreateCourse from './components/CreateCourse/create-course';

const App = () : JSX.Element => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={Courses} />
        <Route path="/create" exact component={CreateCourse} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
