import {AuthorizationStatus, DEFAULT_CITY, DEFAULT_OFFER_SORT, FetchStatus, NameSpace} from '../../const';
import {State} from '../../types/root-state';
import {makeFakeOffers} from './offers';
import {makeFakeOffer} from './offer';
import {makeFakeReviews} from './reviews';

export const makeFakeStore = ():State => ({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.Unknown,
    userData: {
      email: '',
      isPro: false,
      name: '',
      avatarUrl: '',
    },
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
    fetchReviewsStatus: FetchStatus.Idle,
    sendReviewStatus: FetchStatus.Success,
  }
});
