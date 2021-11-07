import { IStore } from '../interfaces';

export const getCoursesSelector = (state: IStore) => state.courses;
export const getUserSelector = (state: IStore) => state.user;
export const getAuthorsSelector = (state: IStore) => state.authors;
