import { EUserActions } from './actionTypes';
import { ILoginResponse } from '../../components/Login/interfaces/loginResponse';
import { IUserStore } from '../interfaces';
import { userInitialState } from './initialState';

interface IUserAction {
  type: string
  payload : ILoginResponse
}

export const userReducer = (state: IUserStore = userInitialState,
  action : IUserAction) : IUserStore => {
  switch (action.type) {
    case EUserActions.LOGIN_USER:
      return {
        isAuth: true,
        token: action.payload.result,
        email: action.payload.user.email,
        name: action.payload.user.name,
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
