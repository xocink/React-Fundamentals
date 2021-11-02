import { IUserStore } from '../index';
import { EUserActions } from './actionTypes';

const userInitialState : IUserStore = {
  isAuth: false,
  email: '',
  name: '',
  token: '',
};

export const userReducer = (state: IUserStore = userInitialState, action) : IUserStore => {
  switch (action.type) {
    case EUserActions.LOGIN_USER:
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        email: action.payload.email,
        name: action.payload.name,
      };
    case EUserActions.LOGOUT_USER:
      return {
        isAuth: false,
        email: '',
        name: '',
        token: '',
      };
    default:
      return state;
  }
};
