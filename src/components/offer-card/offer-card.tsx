import React, {memo, ReactNode} from 'react';
import * as classNames from 'classnames';
import {Link} from 'react-router-dom';
import {AppRoute, FavoriteState, FetchStatus, RATING_MULTIPLIER} from '../../const';
import {OfferPreviewType} from '../../types/offer';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeFavoritesAction} from '../../store/api-action';
import {selectChangeFavoritesStatus} from '../../store/favorites-data/selectors';

export interface OfferCardProps {
  card: OfferPreviewType;
  className?: string;
  onMouseEnter?: (card:OfferPreviewType) => void;
}

const OfferCard = memo(({card, className = '', onMouseEnter}:OfferCardProps):ReactNode => {
  const changeFavoritesStatus = useAppSelector(selectChangeFavoritesStatus);
  const getCardPath = () => AppRoute.offer.slice(0, AppRoute.offer.indexOf(':id')) + card.id;
  const dispatch = useAppDispatch();

  const handleFavoriteClick = () => {
    if (changeFavoritesStatus !== FetchStatus.Idle) {
      dispatch(changeFavoritesAction({offerId: card.id, status: card.isFavorite ? FavoriteState.NotFavorite : FavoriteState.IsFavorite}));
    }
  };

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
          <button
            className={classNames('place-card__bookmark-button button', {
              'place-card__bookmark-button--active': card.isFavorite
            })}
            type="button"
            onClick={handleFavoriteClick}
          >
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
});

OfferCard.displayName = 'OfferCard';


export default OfferCard;
