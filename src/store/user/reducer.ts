import { EUserActions } from './actionTypes';
import { ILoginResponse } from '../../components/Login/interfaces/loginResponse';
import { ITrackMyselfPayload, IUserStore } from '../interfaces';
import { userInitialState } from './initialState';

interface IUserLoginAction {
  type: EUserActions.LOGIN_USER
  payload: ILoginResponse
}
interface IUserLogoutAction {
  type: EUserActions.LOGOUT_USER
}
interface IUserTrackAction {
  type: EUserActions.TRACK_MYSELF
  payload: ITrackMyselfPayload
}

type TUserAction = IUserLoginAction | IUserLogoutAction | IUserTrackAction;

export const userReducer = (state: IUserStore = userInitialState,
  action: TUserAction): IUserStore => {
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
        role: '',
      };
    case EUserActions.TRACK_MYSELF:
      return {
        isAuth: action.payload.successful,
        email: action.payload.result.email,
        name: action.payload.result.name,
        token: action.payload.result.token,
        role: action.payload.result.role,
      };
    default:
      return state;
  }
};
