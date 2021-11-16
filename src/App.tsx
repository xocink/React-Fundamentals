import React
, { useEffect } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateForm from './components/CreateCourse/CreateForm';
import ErrorPage from './components/ErrorPage/ErrorPage';
import CourseInfo from './components/CourseInfo/CoutseInfo';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import './App.scss';
import { TrackUserAction } from './store/user/actionCreators';
import { fetchCourses } from './store/courses/actionCreators';
import { fetchAuthors } from './store/authors/actionCreators';

const App = (): JSX.Element => {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(TrackUserAction());
      dispatch(fetchCourses());
      dispatch(fetchAuthors());
    }
  }, []);

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
            <Courses />
          </Route>
          <Route path="/courses/add" exact>
            <CreateForm />
          </Route>
          <Route path="/courses/add/:id" exact>
            <CourseInfo />
          </Route>
          <Route path="/courses/update/:id" exact>
            <CreateForm />
          </Route>
          <Route path="*" component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>

  );
};

export default App;
