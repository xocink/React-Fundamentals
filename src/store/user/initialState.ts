import { IUserStore } from '../interfaces';

export const userInitialState : IUserStore = {
  isAuth: false,
  email: '',
  name: '',
  token: '',
};
