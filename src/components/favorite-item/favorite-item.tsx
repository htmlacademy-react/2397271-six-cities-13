import {OfferPreviewType} from '../../types/offer';
import {Cities} from '../../const';
import OfferCard from '../offer-card/offer-card';
import React from 'react';

interface FavoriteItemProps {
  sortedCards: OfferPreviewType[];
  city: typeof Cities[number];
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

export default FavoriteItem;
