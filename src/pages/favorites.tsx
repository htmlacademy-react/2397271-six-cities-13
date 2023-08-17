import React from 'react';
import {Cities, FetchStatus} from '../const';
import {OfferPreviewType} from '../types/offer';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import FavoriteItem from '../components/favorite-item/favorite-item';
import {useAppSelector} from '../hooks';
import {selectFavoritesData, selectFetchFavoritesStatus} from '../store/favorites-data/selectors';
import Loader from '../components/loader/loader';
import * as classNames from 'classnames';

function Favorites() {
  const fetchFavoritesStatus = useAppSelector(selectFetchFavoritesStatus);
  const favoriteOffers: OfferPreviewType[] = useAppSelector(selectFavoritesData);
  const sortOfferByCity = (city) => favoriteOffers.filter((item) => item.city.name === city);

  if (fetchFavoritesStatus === FetchStatus.Idle) {
    return <Loader />;
  }

  return (
    <div className='page'>
      <Header />
      <main className={classNames('page__main page__main--favorites', {
        'page__main--favorites-empty': !favoriteOffers.length
      })}
      >
        <div className="page__favorites-container container">
          {favoriteOffers.length
            ?
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  Cities.map((city) => {
                    const sortedCards = sortOfferByCity(city);
                    if (sortedCards.length) {
                      return <FavoriteItem key={city} sortedCards={sortedCards} city={city}/>;
                    }
                  })
                }
              </ul>
            </section>
            :
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
