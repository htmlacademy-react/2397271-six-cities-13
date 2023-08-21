import React, {ReactNode} from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';
import Loader from '../loader/loader';
import {selectAuthStatus} from '../../store/user-process/selectors';

function PrivateRoute():ReactNode {
  const authorizationStatus: AuthorizationStatus = useAppSelector(selectAuthStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Loader />;
  }

  return authorizationStatus === AuthorizationStatus.Auth ? <Outlet /> : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
