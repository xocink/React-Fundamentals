import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import classNames from 'classnames'; // declaration for style
import { IStore } from '../../store/interfaces';
import Button from '../common/Button/Button';
import { logoutUser } from '../helpers';
import { logoutUserAction } from '../../store/user/actionCreators';
import style from './Header.module.scss';

// const mockedData = {
//   successful: true,
//   result: '',
//   user: {
//     email: '',
//     name: '',
//   },
// };

// interface IHeader {
//   btnOnClick : () => void,
//   btnLabel : string
//   btnClassName? : string,
//   headerProfile? : string
//   linkUrl? : string
// }

const Header = (): JSX.Element => {
  const history = useHistory();
  const user = useSelector((state: IStore) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUserAction());
    logoutUser();
    history.push('/login');
  };
  // const test = classNames(style.header__contentWrapper, 'danger');
  return (
    <header className={style.header}>
      <div className={style.header__contentWrapper}>
        <Link to="/courses">
          <h1 className={style.header__logo}>Logo</h1>
        </Link>
        <div className={style.header__profile}>
          <h2 className={style.header__profile__username}>{user.name}</h2>
          <Button btnText={user.isAuth ? 'Logout' : 'Login'} action={handleLogout} />
        </div>
      </div>

    </header>
  );
};

export default Header;
