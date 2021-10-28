import React, { FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchInput from '../common/Input/SearchInput';
import Button from '../common/Button/Button';
import { ILoginResponse } from './interfaces/loginResponse';
import { setToken } from './helpers';

const Login = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginResponse, setLoginResponse] = useState<ILoginResponse>();
  const history = useHistory();

  useEffect(() => {
    if (loginResponse?.successful) {
      setToken(loginResponse.result);
      history.push('/courses');
    }
  });
  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
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
        .catch((err) => console.log(err));
    };
    getResponse();
  };

  return (
    <div className="login">
      <h3>Login</h3>
      <form onSubmit={handleSubmit} className="1">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="email">Email</label>
        <SearchInput type="text" id="email" onChangeAction={handleEmailChange} />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="password">Password</label>
        <SearchInput type="text" id="password" onChangeAction={handlePasswordChange} />
        <Button btnText="Login" isSubmit />
      </form>
    </div>

  );
};

export default Login;
