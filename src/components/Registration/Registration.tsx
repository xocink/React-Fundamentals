import React, { FormEvent, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SearchInput from '../common/Input/SearchInput';
import Button from '../common/Button/Button';
import { IUser } from './interfaces/user';
import { IRegistrationResponse } from './interfaces/registrationResponse';
import { emailReg, nameReg, passwordReg } from '../helpers/consts';
import './Registration.scss';

const Registration = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [registerObj, setRegisterObj] = useState<IRegistrationResponse>();
  const history = useHistory();

  const handleEmailChange = (value: string, ref: HTMLInputElement | undefined) => {
    if (emailReg.test(value) || ref?.value === '') {
      setEmail(value);
      ref?.classList.remove('error');
    } else {
      ref?.classList.add('error');
    }
  };

  const handlePasswordChange = (value: string, ref: HTMLInputElement | undefined) => {
    if (passwordReg.test(value) || ref?.value === '') {
      setPassword(value);
      ref?.classList.remove('error');
    } else {
      ref?.classList.add('error');
    }
  };

  const handleNameChange = (value: string, ref: HTMLInputElement | undefined) => {
    if (nameReg.test(value) || value === '') {
      setName(value);
      ref?.classList.remove('error');
    } else {
      ref?.classList.add('error');
    }
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
        .catch((err) => err);
    };
    getResponse();
  };

  return (
    <div className="registration">
      <h3 className="registration__title">Registration</h3>
      <form onSubmit={handleSubmit} className="registration__form">
        <div className="registration__name">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="name">Name</label>
          <SearchInput type="text" id="name" onChangeAction={handleNameChange} />
        </div>
        <div className="registration__email">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="email">Email</label>
          <SearchInput type="text" id="email" onChangeAction={handleEmailChange} />
        </div>
        <div className="registration__password">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="password">Password</label>
          <SearchInput type="text" id="password" onChangeAction={handlePasswordChange} />
        </div>
        <Button btnText="Registration" isSubmit />
        <p>
          Already registered?
          <Link to="/login"> Login</Link>
        </p>
      </form>
    </div>
  );
};
export default Registration;
