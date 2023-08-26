import {AuthorizationStatus, DEFAULT_CITY, DEFAULT_OFFER_SORT, FetchStatus, NameSpace} from '../../const';
import {State} from '../../types/root-state';
import {makeFakeOffers} from './offers';
import {makeFakeOffer} from './offer';
import {makeFakeReviews} from './reviews';

export const makeFakeStore = (initialState:Partial<State>):State => ({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.Unknown,
    userData: null,
    fetchLoginStatus: FetchStatus.Idle,
    fetchAuthStatus: FetchStatus.Idle,
  },
  [NameSpace.App]: {
    sort: DEFAULT_OFFER_SORT,
    city: DEFAULT_CITY,
  },
  [NameSpace.Offers]: {
    offers: makeFakeOffers(),
    fetchOffersStatus: FetchStatus.Success,
    offer: makeFakeOffer(),
    fetchOfferStatus: FetchStatus.Success,
    offersNearby: makeFakeOffers(),
    fetchOffersNearbyStatus: FetchStatus.Success,
  },
  [NameSpace.Favorites]: {
    favorites: makeFakeOffers(true),
    fetchFavoritesStatus: FetchStatus.Success,
    changeFavoritesStatus: FetchStatus.Success,
  },
  [NameSpace.Reviews]: {
    reviews: makeFakeReviews(),
    fetchReviewsStatus: FetchStatus.Success,
    sendReviewStatus: FetchStatus.Success,
  },
  ...initialState,
});
