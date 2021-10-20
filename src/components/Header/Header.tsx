import React from 'react';
import './Header.scss';
import Button from '../Button/Button';
import { timeConvert } from '../../services/timeConvert';

const Header = () => {
  const time = timeConvert('22');
  return (
    <header className="header">
      <div className="header__content-wrapper">
        <h1 className="header__logo">Logo</h1>
        <div className="header__profile">
          <h2 className="header__username">Dima</h2>
          <Button btnText="Logout" />
        </div>
      </div>

    </header>
  );
};

export default Header;
