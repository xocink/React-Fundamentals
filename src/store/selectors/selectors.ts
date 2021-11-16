import {
  IAuthorModelStore, ICourseModelStoreItem, IStore, IUserStore,
} from '../interfaces';

export const getCoursesSelector = (state: IStore) : ICourseModelStoreItem[] => state.courses;
export const getUserSelector = (state: IStore) : IUserStore => state.user;
export const getAuthorsSelector = (state: IStore) : IAuthorModelStore[] => state.authors;
