import React, {ReactNode} from 'react';
import Main from '../../pages/main/main';
import {Route, Routes} from 'react-router-dom';
import Offer from '../../pages/offer/offer';
import Login from '../../pages/login/login';
import NotFound from '../../pages/not-found/not-found';
import {AppRoute} from './../../const';
import PrivateRoute from './../private-route/private-route';
import Favorites from '../../pages/favorites/favorites';
import 'react-toastify/dist/ReactToastify.css';

function App(): ReactNode {
  return (
    <Routes>
      <Route index path={AppRoute.Root} element={<Main />}/>
      <Route path={AppRoute.Offer} element={<Offer/>}/>
      <Route path={AppRoute.Login} element={<Login/>}/>
      <Route element={<PrivateRoute/>}>
        <Route path={AppRoute.Favorites} element={<Favorites/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
