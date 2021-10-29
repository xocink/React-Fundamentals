import React from 'react';
import './Header.scss';
import { Link, useHistory } from 'react-router-dom';
import Button from '../common/Button/Button';
import { loginCheck, logoutUser } from '../helpers';

const Header = (): JSX.Element => {
  const history = useHistory();
  let btnText = 'Login';

  const handleLogout = () => {
    logoutUser();
    btnText = loginCheck() ? 'Logout' : 'Login';
    history.push('/login');
  };

  return (
    <header className="header">
      <div className="header__content-wrapper">
        <Link to="/courses">
          <h1 className="header__logo">Logo</h1>
        </Link>
        <div className="header__profile">
          <h2 className="header__username">Dima</h2>
          <Button btnText={btnText} action={handleLogout} />
        </div>
      </div>

    </header>
  );
};

export default Header;
