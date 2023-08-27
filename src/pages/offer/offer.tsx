import {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import CommentForm from '../../components/review-form/review-form';
import {OfferPreviewType, ReviewType} from '../../types/offer';
import Header from '../../components/header/header';
import ReviewList from '../../components/review-list/review-list';
import OfferList from '../../components/offer-list/offer-list';
import {AppRoute, AuthorizationStatus, FavoriteState, FetchStatus, NEARBY_OFFERS_COUNT, RATING_MULTIPLIER} from '../../const';
import Map from '../../components/map/map';
import {
  changeFavoritesAction,
  fetchOfferAction,
  fetchOffersNearbyAction,
  fetchReviewsAction
} from '../../store/api-action';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {
  selectFetchOffersNearbyStatus,
  selectFetchOfferStatus,
  selectOfferData,
  selectOffersNearbyData
} from '../../store/offers-data/selectors';
import Loader from '../../components/loader/loader';
import NotFound from '../not-found/not-found';
import {selectFetchReviewsStatus, selectReviewsData} from '../../store/reviews-data/selectors';
import {selectAuthStatus} from '../../store/user-process/selectors';
import classNames from 'classnames';
import {selectChangeFavoritesStatus} from '../../store/favorites-data/selectors';
import { pluralize } from '../../helpers/pluralize';

function Offer():JSX.Element {
  const { id } = useParams() as {id : string};
  const dispatch = useAppDispatch();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchReviewsAction(id));
      dispatch(fetchOffersNearbyAction(id));
    }

    return () => {
      isMounted = false;
    };
  }, [id, dispatch]);

  const offer = useAppSelector(selectOfferData);
  const fetchOfferStatus:FetchStatus = useAppSelector(selectFetchOfferStatus);
  const offersNearby:OfferPreviewType[] = useAppSelector(selectOffersNearbyData);
  const fetchOffersNearbyStatus:FetchStatus = useAppSelector(selectFetchOffersNearbyStatus);
  const fetchReviewsStatus:FetchStatus = useAppSelector(selectFetchReviewsStatus);
  const reviews:ReviewType[] = useAppSelector(selectReviewsData);
  const authorizationStatus: AuthorizationStatus = useAppSelector(selectAuthStatus);
  const changeFavoritesStatus = useAppSelector(selectChangeFavoritesStatus);
  const slicedOffersNearby = offersNearby.slice(0, NEARBY_OFFERS_COUNT);
  const navigate = useNavigate();

  if (fetchOfferStatus === FetchStatus.Idle
  || fetchReviewsStatus === FetchStatus.Idle
  || fetchOffersNearbyStatus === FetchStatus.Idle
  ) {
    return <Loader />;
  }

  if (fetchOfferStatus === FetchStatus.Error
  || !offer) {
    return <NotFound />;
  }

  const handleFavoriteClick = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
    }
    if (changeFavoritesStatus !== FetchStatus.Idle) {
      dispatch(changeFavoritesAction({offerId: offer.id, status: offer.isFavorite ? FavoriteState.NotFavorite : FavoriteState.IsFavorite}));
    }
  };

  return (
    <div className='page' data-testid='offer-container'>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt="Photo studio" />
                </div>))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium &&
              <div className="offer__mark">
                <span>Premium</span>
              </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button
                  className={classNames('offer__bookmark-button button', {
                    'offer__bookmark-button--active': offer.isFavorite
                  })}
                  type="button"
                  onClick={() => handleFavoriteClick()}
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${Math.round(offer.rating) * RATING_MULTIPLIER}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{offer.type[0].toUpperCase() + offer.type.slice(1)}</li>
                <li className="offer__feature offer__feature--bedrooms">{offer.bedrooms} {pluralize('Bedroom', offer.bedrooms)}</li>
                <li className="offer__feature offer__feature--adults">Max {offer.maxAdults} {pluralize('adult', offer.maxAdults)}</li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {
                    offer.goods.map((item) => <li className="offer__inside-item" key={item}>{item}</li>)
                  }
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={classNames('offer__avatar-wrapper user__avatar-wrapper',
                    {
                      'offer__avatar-wrapper--pro': offer.host.isPro
                    })}>
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro &&
                  <span className="offer__user-status">
                      Pro
                  </span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{offer.description}</p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewList />
                {authorizationStatus === AuthorizationStatus.Auth &&
                <CommentForm id={id}/>}
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map
              city={offer.city}
              offerList={[...slicedOffersNearby, offer]}
              activeOffer={offer}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferList
                offerList={slicedOffersNearby}
                className={'near-places'}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
