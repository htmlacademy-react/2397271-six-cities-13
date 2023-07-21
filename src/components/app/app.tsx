import React, {ReactNode} from 'react';
import Main from '../../pages/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Offer from '../../pages/offer';
import Login from '../../pages/login';
import NotFound from '../../pages/not-found';
import Layout from './../layout/layout';
import {appRoute} from './../../const';
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
        <Route index path={appRoute.root.path} element={<Main offerList={offerList}/>}/>
        <Route path={appRoute.offer.path} element={<Offer offer={offer}/>}/>
        <Route path={appRoute.login.path} element={<Login/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path={appRoute.favorites.path} element={<Favorites offerList={offerList}/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
