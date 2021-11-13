import { ICourseModelStoreItem } from '../interfaces';
import { ECourseActions } from './actionTypes';
import { coursesInitialState } from './initialState';

interface ICourseFetchAction {
  type: ECourseActions.FETCH_COURSES,
  payload: ICourseModelStoreItem[]
}

interface ICourseAddAction {
  type: ECourseActions.CREATE_COURSE,
}

interface ICourseUpdateAction {
  type: ECourseActions.UPDATE_COURSE,
}

interface ICourseDeleteAction {
  type: ECourseActions.DELETE_COURSE,
  payload: string
}

export type TCourseAction = ICourseAddAction
| ICourseFetchAction | ICourseDeleteAction | ICourseUpdateAction;

export const courseReducer = (state: ICourseModelStoreItem[] = coursesInitialState,
  action: TCourseAction): ICourseModelStoreItem[] => {
  switch (action.type) {
    case ECourseActions.DELETE_COURSE:
      return [
        ...state,
      ];
    case ECourseActions.FETCH_COURSES:
      return [
        ...action.payload,
      ];
    case ECourseActions.CREATE_COURSE:
      return [
        ...state,
      ];
    case ECourseActions.UPDATE_COURSE:
      return [
        ...state,
      ];
    default:
      return state;
  }
};
