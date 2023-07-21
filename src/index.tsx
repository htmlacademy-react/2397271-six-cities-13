import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offerList} from './mocks/offers';
import {offer} from './mocks/offer';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offerList={offerList} offer={offer} />
  </React.StrictMode>
);
