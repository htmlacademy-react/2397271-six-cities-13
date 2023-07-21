import React, {ReactNode} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useLocation } from 'react-router-dom';
import {appRoute} from '../../const';

function Layout({children}:ReactNode): ReactNode {
  const location = useLocation();
  const currentRoute = Object.values(appRoute).find(
    (route) => {
      if (route.path.indexOf(':id') !== -1) {
        return location.pathname.indexOf(route.path.slice(0, route.path.indexOf(':id'))) !== -1;
      } else {
        return route.path === location.pathname;
      }
    }
  );
  return (
    <div className='page page--gray page--main'>
      {currentRoute.hasHeader && <Header />}
      {children}
      {currentRoute.hasFooter && <Footer/>}
    </div>
  );
}

export default Layout;
