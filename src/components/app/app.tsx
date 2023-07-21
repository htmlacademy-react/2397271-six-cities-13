import React, {ReactNode} from 'react';
import Main from '../../pages/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Offer from '../../pages/offer';
import Login from '../../pages/login';
import NotFound from '../../pages/not-found';
import Layout from './../layout/layout';
import {AppRoute} from './../../const';
import PrivateRoute from './../private-route/private-route';
import Favorites from '../../pages/favorites';
import {OfferPreviewProps, OfferProps} from '../../types/offer-props';

interface AppProps {
  offerList: OfferPreviewProps[];
  offer: OfferProps;
}

function App({offerList, offer}: AppProps): ReactNode {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={AppRoute.root} element={<Main offerList={offerList}/>}/>
        <Route path={AppRoute.offer} element={<Offer offer={offer}/>}/>
        <Route path={AppRoute.login} element={<Login/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path={AppRoute.favorites} element={<Favorites offerList={offerList}/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
