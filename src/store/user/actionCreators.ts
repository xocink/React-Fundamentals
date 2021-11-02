import { Dispatch } from 'redux';
import { IUser } from '../../components/Registration/interfaces/user';
import { EUserActions } from './actionTypes';

const loginUser = (user : IUser) => (dispatch : Dispatch) => {
  dispatch({
    type: EUserActions.LOGIN_USER,
    payload: user,
  });
};
