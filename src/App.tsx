import React, {ReactNode} from 'react';
import Main from './pages/Main';
import {OfferDataProps} from './components/OfferCard/OfferDataProps';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Offer from './pages/Offer';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Index from './components/Layout';
import {appRoute} from './const';
import PrivateRoute from './components/PrivateRoute';
import Favorites from './pages/Favorites';

interface AppProps {
  offerData: OfferDataProps[];
}

function App({offerData}: AppProps):ReactNode {
  return (
    <BrowserRouter>
      <Index >
        <Routes>
          <Route index path={appRoute.root.path} element={<Main offerData={offerData}/>}/>
          <Route path={appRoute.offer.path} element={<Offer />} />
          <Route path={appRoute.login.path} element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path={appRoute.favorites.path} element={<Favorites offerData={offerData}/>} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Index>
    </BrowserRouter>
  );
}

export default App;
