import { EAuthorsActions } from './actionTypes';
import { IAuthorModelStore } from '../interfaces';
import { authorsInitialState } from './initialState';

interface IAuthorsFetchAction {
  type : EAuthorsActions.FETCH_AUTHORS,
  payload : IAuthorModelStore[]
}

interface IAuthorsCreateAction {
  type : EAuthorsActions.CREATE_AUTHOR,
}

export type TAuthorActions = IAuthorsFetchAction | IAuthorsCreateAction;

export const authorReducer = (state : IAuthorModelStore[] = authorsInitialState,
  action : TAuthorActions) : IAuthorModelStore[] => {
  switch (action.type) {
    case EAuthorsActions.CREATE_AUTHOR:
      return [
        ...state,
      ];
    case EAuthorsActions.FETCH_AUTHORS:
      return [
        ...action.payload,
      ];

    default:
      return state;
  }
};
