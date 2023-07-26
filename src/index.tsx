import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offerList} from './mocks/offers';
import {offer} from './mocks/offer';
import {comments} from './mocks/comments';
import {store} from './store';
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App offerList={offerList} offer={offer} comments={comments}/>
    </Provider>
  </React.StrictMode>
);
