import React, { FormEvent, useEffect, useState } from 'react';
import { log } from 'util';
import { useHistory } from 'react-router-dom';
import SearchInput from '../common/Input/SearchInput';
import Button from '../common/Button/Button';
import { IUser } from './interfaces/user';

import { IRegistrationResponse } from './interfaces/registrationResponse';
import { registerUser } from './helpers/registerUser/registerUser';

const Registration = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [registerObj, setRegisterObj] = useState<IRegistrationResponse>();
  const history = useHistory();

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleNameChange = (value: string) => {
    setName(value);
  };

  useEffect(() => {
    if (registerObj?.successful) {
      history.push('/login');
    }
  }, [registerObj]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tempUser: IUser = {
      name,
      email,
      password,
    };
    const getResponse = (): void => {
      fetch('http://localhost:3000/register', {
        method: 'POST',
        body: JSON.stringify(tempUser),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
        .then((res) => setRegisterObj(res))
        .catch((err) => console.log(err));
    };
    console.log(registerObj);
    getResponse();
  };

  return (
    <div className="login">
      <h3>Login</h3>
      <form onSubmit={handleSubmit} className="1">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="name">Name</label>
        <SearchInput type="text" id="name" onChangeAction={handleNameChange} />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="email">Email</label>
        <SearchInput type="text" id="email" onChangeAction={handleEmailChange} />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="password">Password</label>
        <SearchInput type="text" id="password" onChangeAction={handlePasswordChange} />
        <Button btnText="Registration" isSubmit />
      </form>
    </div>
  );
};
export default Registration;
