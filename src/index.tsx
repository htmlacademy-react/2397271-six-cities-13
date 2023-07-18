import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {OfferData} from './mocks/offers';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offerData={OfferData} />
  </React.StrictMode>
);
