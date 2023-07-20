import React, {ReactNode} from 'react';
import Main from './pages/Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Offer from './pages/Offer';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import {appRoute} from './const';
import PrivateRoute from './components/PrivateRoute';
import Favorites from './pages/Favorites';
import {OfferPreviewProps, OfferProps} from './types/offerProps';

interface AppProps {
  offerList: OfferPreviewProps[];
  offer: OfferProps;
}

function App({offerList, offer}: AppProps):ReactNode {
  return (
    <BrowserRouter>
      <Layout >
        <Routes>
          <Route index path={appRoute.root.path} element={<Main offerList={offerList}/>}/>
          <Route path={appRoute.offer.path} element={<Offer offer={offer}/>} />
          <Route path={appRoute.login.path} element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path={appRoute.favorites.path} element={<Favorites offerList={offerList} />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
