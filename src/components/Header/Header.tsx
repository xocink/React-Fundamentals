import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../common/Button/Button';
import { logoutUser } from '../helpers';
import './Header.scss';

const Header = (): JSX.Element => {
  const history = useHistory();
  const btnText = 'Logout';

  const handleLogout = () => {
    logoutUser();
    history.push('/login');
  };

  return (
    <header className="header">
      <div className="header__content-wrapper">
        <Link to="/courses">
          <h1 className="header__logo">Logo</h1>
        </Link>
        <div className="header__profile">
          <h2 className="header__username">{localStorage.getItem('name')}</h2>
          <Button btnText={btnText} action={handleLogout} />
        </div>
      </div>

    </header>
  );
};

export default Header;
