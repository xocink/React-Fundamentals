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
import { mockedCoursesList } from './mockedData/mockedData';
import { ICourseModel } from './components/CreateCourse/components/interfaces/course-interface';
import ErrorPage from './components/ErrorPage/ErrorPage';

interface IContextObj {
  actualCourses: ICourseModel[]
  changeFunc: (value?: ICourseModel[]) => void
}

export const CoursesContext = React.createContext<IContextObj>({
  actualCourses: mockedCoursesList,
  changeFunc: (): void => {
  },
});

const App = (): JSX.Element => {
  const [courses, setCourses] = useState(mockedCoursesList);

  return (
    <CoursesContext.Provider value={{
      actualCourses: courses,
      changeFunc: (value) => setCourses(value!),
    }}
    >
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/">
              <Redirect to="courses" />
            </Route>
            <Route path="/courses" exact component={Courses} />
            <Route path="/courses/add" exact component={CreateCourse} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </CoursesContext.Provider>
  );
};

export default App;
