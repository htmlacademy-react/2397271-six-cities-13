import React from 'react';
import {Cities} from '../../const';
import FavoriteItem from '../favorite-item/favorite-item';
import {OfferPreviewType} from '../../types/offer';
import {selectFavoritesData} from '../../store/favorites-data/selectors';
import {useAppSelector} from '../../hooks';

function FavoritesList() {
  const favoriteOffers: OfferPreviewType[] = useAppSelector(selectFavoritesData);
  const filterOfferByCity = (city) => favoriteOffers.filter((item) => item.city.name === city);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          Cities.map((city) => {
            const sortedCards = filterOfferByCity(city);
            if (sortedCards.length) {
              return <FavoriteItem key={city} sortedCards={sortedCards} city={city}/>;
            }
          })
        }
      </ul>
    </section>
  );
}

export default FavoritesList;
