import React, { FormEvent, useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SearchInput from '../common/Input/SearchInput';
import Button from '../common/Button/Button';
import { ILoginResponse } from './interfaces/loginResponse';
import { setItem } from './helpers';
import { emailReg, passwordReg } from '../helpers/consts';
import './Login.scss';
import { loginUserAction, TrackUserAction } from '../../store/user/actionCreators';

const Login = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginResponse, setLoginResponse] = useState<ILoginResponse>();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginResponse?.successful) {
      setItem(loginResponse.result, 'token');
      setItem(loginResponse.user.name, 'name');
      dispatch(loginUserAction(loginResponse));
      dispatch(TrackUserAction());
      history.push('/courses');
    }
  });

  const handleEmailChange = (value: string, ref: HTMLInputElement | undefined) => {
    if (emailReg.test(value) || ref?.value === '') {
      setEmail(value);
      ref?.classList.remove('error');
    } else {
      setEmail(value);
      ref?.classList.add('error');
    }
  };

  const handlePasswordChange = (value: string, ref: HTMLInputElement | undefined) => {
    if (passwordReg.test(value) || ref?.value === '') {
      setPassword(value);
      ref?.classList.remove('error');
    } else {
      setPassword(value);
      ref?.classList.add('error');
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tempUser = {
      email,
      password,
    };
    const getResponse = (): void => {
      fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify(tempUser),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
        .then((res) => setLoginResponse(res))
        .catch((err) => err);
    };
    getResponse();
  };

  return (
    <div data-testid="LoginPage" className="login">
      <h3 className="login__title">Login</h3>
      <form onSubmit={handleSubmit} className="login__form">
        <div data-testid="loginEmail" className="login__email">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="email">Email</label>
          <SearchInput value={email} type="text" id="email" onChangeAction={handleEmailChange} />
        </div>
        <div data-testid="loginPassword" className="login__password">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="password">Password</label>
          <SearchInput value={password} type="text" id="password" onChangeAction={handlePasswordChange} />
        </div>

        <Button btnText="Login" isSubmit />
        <p>
          Do not have account?
          <Link to="/registration"> Registration </Link>
        </p>
      </form>
    </div>

  );
};

export default Login;
