import { Dispatch } from 'redux';
import { EUserActions } from './actionTypes';
import { ILoginResponseStore, ITrackMyself, ITrackMyselfPayload } from '../interfaces';

export const loginUserAction = (
  userLog: ILoginResponseStore,
) => async (dispatch: Dispatch) : Promise<void> => {
  dispatch({
    type: EUserActions.LOGIN_USER,
    payload: userLog,
  });
};

export const logoutUserAction = () => async (dispatch: Dispatch) : Promise<void> => {
  try {
    await fetch('http://localhost:3000/logout', { method: 'DELETE' });
    dispatch({
      type: EUserActions.LOGOUT_USER,
    });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

export const TrackUserAction = (
) => async (dispatch: Dispatch) : Promise<void> => {
  try {
    const token = localStorage.getItem('token');
    const fetchResult : ITrackMyself = await fetch('http://localhost:3000/users/me',
      {
        headers: {
          Authorization: token || '',
        },
      }).then((res) => res.json());
    const payload : ITrackMyselfPayload = {
      successful: fetchResult.successful,
      result: {
        ...fetchResult.result,
        token: token || '',
      },

    };
    dispatch({
      type: EUserActions.TRACK_MYSELF,
      payload,
    });
  } catch (e) {
    console.log(e);
  }
};
