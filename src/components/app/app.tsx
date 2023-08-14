import React, {ReactNode} from 'react';
import Main from '../../pages/main';
import {Route, Routes} from 'react-router-dom';
import Offer from '../../pages/offer';
import Login from '../../pages/login';
import NotFound from '../../pages/not-found';
import {AppRoute} from './../../const';
import PrivateRoute from './../private-route/private-route';
import Favorites from '../../pages/favorites';
import {CommentType, OfferPreviewType, OfferType} from '../../types/offer';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

interface AppProps {
  offerList: OfferPreviewType[];
  offer: OfferType;
  comments: CommentType[];
}

function App({offerList, offer, comments}: AppProps): ReactNode {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route index path={AppRoute.root} element={<Main offerList={offerList}/>}/>
        <Route path={AppRoute.offer} element={<Offer offer={offer} comments={comments} nearbyOfferList={offerList}/>}/>
        <Route path={AppRoute.login} element={<Login/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path={AppRoute.favorites} element={<Favorites offerList={offerList}/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <ToastContainer
        autoClose={3000}
      />
    </HistoryRouter>
  );
}

export default App;
