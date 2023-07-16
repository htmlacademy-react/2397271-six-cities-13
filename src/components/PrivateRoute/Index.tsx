import React, {ReactNode} from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {appRoute} from '../../const';

function PrivateRoute():ReactNode {
  const hasAccess = false;

  return hasAccess ? <Outlet /> : <Navigate to={appRoute.login} />;
}

export default PrivateRoute;
