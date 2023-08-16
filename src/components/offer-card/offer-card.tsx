import React, {ReactNode} from 'react';
import * as classNames from 'classnames';
import {Link} from 'react-router-dom';
import {AppRoute, RATING_MULTIPLIER} from '../../const';
import {OfferPreviewType} from '../../types/offer';

export interface OfferCardProps {
  card: OfferPreviewType;
  className?: string;
  onMouseEnter?: (card:OfferPreviewType) => void;
}

function OfferCard({card, className = '', onMouseEnter}:OfferCardProps):ReactNode {
  const getCardPath = () => AppRoute.offer.slice(0, AppRoute.offer.indexOf(':id')) + card.id;

  return (
    <article className={
      classNames({
        [`${className}__card`]: className,
        'place-card': true,
      })
    }
    onMouseEnter={() => onMouseEnter && onMouseEnter(card)}
    >
      {card.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={
        classNames({
          [`${className}__image-wrapper`]: className,
          'place-card__image-wrapper': true,
        })
      }
      >
        <Link to={getCardPath()}>
          <img className="place-card__image" src={card.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className={
        classNames({
          [`${className}__card-info`]: className,
          'place-card__info': true,
        })
      }
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{card.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(card.rating) * RATING_MULTIPLIER }%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={getCardPath()}>{card.title}</Link>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
