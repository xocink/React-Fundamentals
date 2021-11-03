import { ICourseModelStoreItem } from '../interfaces';
import { ECourseActions } from './actionTypes';
import { coursesInitialState } from './initialState';

interface ICourseFetchAction {
  type : ECourseActions.FETCH_COURSES,
  payload : ICourseModelStoreItem[]
}
interface ICourseAddAction {
  type : ECourseActions.CREATE_COURSE,
  payload : ICourseModelStoreItem
}
interface ICourseDeleteAction {
  type : ECourseActions.DELETE_COURSE,
  payload : string
}

export type TCourseAction = ICourseAddAction | ICourseFetchAction | ICourseDeleteAction;

export const courseReducer = (state: ICourseModelStoreItem[] = coursesInitialState,
  action : TCourseAction) : ICourseModelStoreItem[] => {
  switch (action.type) {
    case ECourseActions.DELETE_COURSE:
      return {
        ...state.filter((el) => el.id !== action.payload),
      };
    case ECourseActions.FETCH_COURSES:
      return {
        ...state,
        ...action.payload,
      };
    case ECourseActions.CREATE_COURSE:
      return {
        ...state,
        ...action.payload,

      };
    default:
      return state;
  }
};
