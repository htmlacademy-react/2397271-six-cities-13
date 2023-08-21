import React from 'react';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {UserData} from '../../types/user';
import {selectUserData} from '../../store/user-process/selectors';
import {useAppSelector} from '../../hooks';
import {selectFavoritesData} from '../../store/favorites-data/selectors';

function ProfileLink() {
  const user: UserData = useAppSelector(selectUserData);
  const favorites = useAppSelector(selectFavoritesData);

  return (
    <li className='header__nav-item user' data-testid='profile-link-container'>
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
          <img src={user.avatarUrl} alt="" />
        </div>
        <span className="header__user-name user__name">{user.email}</span>
        <span className="header__favorite-count">{favorites.length}</span>
      </Link>
    </li>
  );
}

export default ProfileLink;
