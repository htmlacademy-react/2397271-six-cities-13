import React, {ReactNode} from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';
import Loader from '../loader/loader';

function PrivateRoute():ReactNode {
  const authorizationStatus: AuthorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Loader />;
  }

  return authorizationStatus === AuthorizationStatus.Auth ? <Outlet /> : <Navigate to={AppRoute.login} />;
}

export default PrivateRoute;
