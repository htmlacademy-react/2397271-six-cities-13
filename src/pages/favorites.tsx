import React from 'react';
import {cities} from '../const';
import OfferCard from '../components/offer-card/offer-card';
import {OfferPreviewProps} from '../types/offer-props';

interface FavoritesProps {
  offerList: OfferPreviewProps[];
}

interface FavoriteItemProps {
  sortedCards: OfferPreviewProps[];
  city: typeof cities[number];
}

function FavoriteItem({sortedCards, city}:FavoriteItemProps) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {sortedCards.map((card) => <OfferCard card={card} key={card.id} className='favorites'/>)}
      </div>
    </li>
  );
}


function Favorites({offerList}:FavoritesProps) {
  const sortOfferByCity = (city) => offerList.filter((item) => item.city.name === city);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {
              cities.map((city) => {
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
  );
}

export default Favorites;
