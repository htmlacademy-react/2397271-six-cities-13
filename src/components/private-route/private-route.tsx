import React, {ReactNode} from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {AppRoute} from '../../const';

function PrivateRoute():ReactNode {
  const hasAccess = true;

  return hasAccess ? <Outlet /> : <Navigate to={AppRoute.login} />;
}

export default PrivateRoute;
