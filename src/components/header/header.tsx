import React, {ReactNode} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {logoutAction} from '../../store/api-action';
import {store} from '../../store';
import {useAppSelector} from '../../hooks';
import {UserData} from '../../types/user';
import {selectAuthStatus, selectUserData} from '../../store/user-process/selectors';
import ProfileLink from '../profile-link/profile-link';

function Header():ReactNode {
  const authorizationStatus: AuthorizationStatus = useAppSelector(selectAuthStatus);

  const handleLogoutClick = (event:React.MouseEvent<HTMLLinkElement>) => {
    event.preventDefault();
    store.dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Unknown || authorizationStatus === AuthorizationStatus.NoAuth
                ?
                <li className='header__nav-item user'>
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
                :
                <>
                  <ProfileLink />
                  <li className="header__nav-item">
                    <a
                      className="header__nav-link"
                      href="#"
                      onClick={(event) => handleLogoutClick(event)}
                    >
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
