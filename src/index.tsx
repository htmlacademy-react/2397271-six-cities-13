import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offerList} from './mocks/offers';
import {offer} from './mocks/offer';
import {comments} from './mocks/comments';
import {store} from './store';
import {Provider} from 'react-redux';
import {checkAuthAction, fetchOffersAction} from './store/api-action';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <ToastContainer />
      <App offerList={offerList} offer={offer} comments={comments}/>
    </Provider>
  </React.StrictMode>
);
