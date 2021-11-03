import { Dispatch } from 'redux';
import { EUserActions } from './actionTypes';
import { ILoginResponseStore } from '../interfaces';

export const loginUserAction = (userLog: ILoginResponseStore) => (dispatch: Dispatch) : void => {
  console.log('we heeeeee');
  dispatch({
    type: EUserActions.LOGIN_USER,
    payload: userLog,
  });
};

export const logoutUserAction = (userLog: ILoginResponseStore) => (dispatch: Dispatch) : void => {
  dispatch({
    type: EUserActions.LOGOUT_USER,
    payload: userLog,
  });
};
