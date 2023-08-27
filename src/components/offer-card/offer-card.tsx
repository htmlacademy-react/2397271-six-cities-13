import {memo} from 'react';
import classNames from 'classnames';
import {Link, useNavigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus, FavoriteState, FetchStatus, OFFER_CARD_TEST_ID, RATING_MULTIPLIER} from '../../const';
import {OfferPreviewType} from '../../types/offer';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeFavoritesAction} from '../../store/api-action';
import {selectChangeFavoritesStatus} from '../../store/favorites-data/selectors';
import { getCardPath } from '../../helpers/offers';
import { selectAuthStatus } from '../../store/user-process/selectors';

export interface OfferCardProps {
  card: OfferPreviewType;
  className?: string;
  onMouseEnter?: (card:OfferPreviewType) => void;
  onMouseLeave?: () => void;
}

const OfferCard = memo(({card, className = '', onMouseEnter, onMouseLeave}:OfferCardProps):JSX.Element => {
  const changeFavoritesStatus = useAppSelector(selectChangeFavoritesStatus);
  const authStatus = useAppSelector(selectAuthStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    if (authStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
    }
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
    onMouseLeave={() => onMouseLeave && onMouseLeave()}
    data-testid={OFFER_CARD_TEST_ID}
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
        <Link to={getCardPath(card.id)}>
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
          <Link to={getCardPath(card.id)}>{card.title}</Link>
        </h2>
        <p className="place-card__type">{card.type[0].toUpperCase() + card.type.slice(1)}</p>
      </div>
    </article>
  );
});

OfferCard.displayName = 'OfferCard';


export default OfferCard;
