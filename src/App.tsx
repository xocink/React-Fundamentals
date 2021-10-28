import React, {
  useState,
} from 'react';

import './App.scss';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedCoursesList } from './mockedData';
import { ICourseModel } from './components/CreateCourse/components/interfaces/course-interface';
import ErrorPage from './components/ErrorPage/ErrorPage';
import CourseInfo from './components/CourseInfo/CoutseInfo';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

const mockedData: ICourseModel = {
  id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
  title: 'JavaScript',
  description: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum 
 has been the industry's standard dummy text ever since
the 1500s, when an unknown 
 printer took a galley of type and scrambled it to make
a type specimen book. It has survived 
 not only five centuries, but also the leap into
electronic typesetting, remaining essentially u
 nchanged.`,
  creationDate: '8/3/2021',
  duration: 160,
  authors: ['27cc3006-e93a-4748-8ca8-73d06aa93b6d', 'f762978b-61eb-4096-812b-ebde22838167'],
};

const App = (): JSX.Element => {
  const [courses, setCourses] = useState(mockedCoursesList);

  const handleCoursesChange = (newCourseList: ICourseModel[]) => {
    setCourses([...newCourseList]);
  };

  return (

    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="courses" />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route path="/courses" exact>
            <Courses courses={courses} />
          </Route>
          <Route path="/courses/add" exact>
            <CreateCourse courses={courses} changeCoursesList={handleCoursesChange} />
          </Route>
          <Route path="/courses/add/:id" exact>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <CourseInfo courses={courses} />
          </Route>
          <Route path="*" component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>

  );
};

export default App;
