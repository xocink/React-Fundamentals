import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ICourseModel } from '../components/CreateCourse/components/interfaces/course-interface';
import { IAuthorModel } from '../components/CreateCourse/components/interfaces/author-list-interface';

export interface IUserStore {
  isAuth: boolean,
  name: string,
  email: string,
  token: string,
}

export interface IStore {
  user: IUserStore,
  courses: ICourseModel[],
  authors: IAuthorModel[],

}

export const store = createStore({}, applyMiddleware(thunk));
