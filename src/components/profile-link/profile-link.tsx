import React from 'react';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {UserData} from '../../types/user';
import {selectUserData} from '../../store/user-process/selectors';
import {useAppSelector} from '../../hooks';

function ProfileLink() {
  const user: UserData = useAppSelector(selectUserData);

  return (
    <li className='header__nav-item user'>
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.favorites}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
          <img src={user.avatarUrl} alt={user.name} />
        </div>
        <span className="header__user-name user__name">{user.email}</span>
        <span className="header__favorite-count">{31}</span>
      </Link>
    </li>
  );
}

export default ProfileLink;
