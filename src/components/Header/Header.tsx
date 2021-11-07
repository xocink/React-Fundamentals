import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../store/interfaces';
import Button from '../common/Button/Button';
import { logoutUser } from '../helpers';
import { logoutUserAction } from '../../store/user/actionCreators';
import style from './Header.scss'; // declaration for style

const mockedData = {
  successful: true,
  result: '',
  user: {
    email: '',
    name: '',
  },
};

interface IHeader {
  btnOnClick : () => void,
  btnLabel : string
  btnClassName? : string,
  headerProfile? : string
  linkUrl? : string
}

const Header = (props : IHeader): JSX.Element => {
  const { headerProfile, linkUrl = '/courses' } = props;
  const history = useHistory();
  const user = useSelector((state: IStore) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUserAction(mockedData));
    logoutUser();
    history.push('/login');
  };

  // const headerProfileStyles = classnames(style.header__profile, headerProfile);

  return (
    <header className="header">
      <div className="header__content-wrapper">
        <Link to={linkUrl}>
          <h1 className="header__logo">Logo</h1>
        </Link>
        <div className="header__profile">
          <h2 className="header__username">{user.name}</h2>
          <Button btnText={user.isAuth ? 'Logout' : 'Login'} action={handleLogout} />
        </div>
      </div>

    </header>
  );
};

export default Header;
