import React from 'react';
import {Link} from 'react-router-dom';
import {appRoute} from '../const';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

function NotFound() {
  return (
    <div className='page page--favorites-empty'>
      <Header />
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty favorites--not-found">
            <h1 className="visually-hidden">Not found</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Page not found</b>
              <Link className="favorites__status-description" to={appRoute.root.path}>To main page</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
