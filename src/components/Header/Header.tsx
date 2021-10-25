import React from 'react';
import './Header.scss';
import Button from '../common/Button/Button';

const Header = () : JSX.Element => (
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

export default Header;
