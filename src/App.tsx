import React, {
  useState,
} from 'react';
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
import './App.scss';

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
            <CourseInfo courses={courses} />
          </Route>
          <Route path="/courses/update/:id" exact>
            <CourseInfo courses={courses} />
          </Route>
          <Route path="*" component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>

  );
};

export default App;
