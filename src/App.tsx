import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Courses from './components/Courses/courses';
import CreateCourse from './components/CreateCourse/create-course';
import { mockedCoursesList } from './tempData/mockedData';
import { ICourseModel } from './models/course-model';
import { IAuthorModel } from './models/author-list-model';

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

  useEffect(() => {
    console.log(courses);
  }, [courses]);

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
            <Route path="/" exact component={Courses} />
            <Route path="/create" exact component={CreateCourse} />
          </Switch>
        </div>
      </BrowserRouter>
    </CoursesContext.Provider>
  );
};

export default App;
