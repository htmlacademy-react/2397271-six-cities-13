import React from 'react';
import {Cities} from '../const';
import {OfferPreviewType} from '../types/offer';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import FavoriteItem from '../components/favorite-item/favorite-item';

interface FavoritesProps {
  offerList: OfferPreviewType[];
}

function Favorites({offerList}:FavoritesProps) {
  const sortOfferByCity = (city) => offerList.filter((item) => item.city.name === city);

  return (
    <div className='page'>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
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
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
