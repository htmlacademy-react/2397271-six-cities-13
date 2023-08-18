import React, {ReactNode} from 'react';
import Main from '../../pages/main';
import {Route, Routes} from 'react-router-dom';
import Offer from '../../pages/offer';
import Login from '../../pages/login';
import NotFound from '../../pages/not-found';
import {AppRoute} from './../../const';
import PrivateRoute from './../private-route/private-route';
import Favorites from '../../pages/favorites';
import 'react-toastify/dist/ReactToastify.css';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): ReactNode {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route index path={AppRoute.root} element={<Main />}/>
        <Route path={AppRoute.offer} element={<Offer/>}/>
        <Route path={AppRoute.login} element={<Login/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path={AppRoute.favorites} element={<Favorites/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
