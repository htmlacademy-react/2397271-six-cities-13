import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import thunk from 'redux-thunk';
import {Action} from 'redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../types/root-state';
import {AppThunkDispatch, extractActionsTypes} from '../utils/mocks/thunk';
import {
  changeFavoritesAction,
  checkAuthAction,
  fetchFavoritesAction,
  fetchOfferAction,
  fetchOffersAction,
  fetchOffersNearbyAction,
  fetchReviewsAction,
  loginAction,
  logoutAction,
  sendReviewAction
} from './api-action';
import {APIRoute} from '../const';
import * as tokenStorage from '../services/token';
import {redirectToRoute} from './action';
import {AuthData} from '../types/user';
import {makeFakeOffers} from '../utils/mocks/offers';
import {makeFakeOffer} from '../utils/mocks/offer';
import {datatype} from 'faker';
import {makeFakeReviews} from '../utils/mocks/reviews';
import {describe} from 'vitest';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ 'OFFERS': {offers: [], offersNearby: []}});
  });

  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with thunk "checkAuthAction', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        fetchFavoritesAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" when server response 400', async() => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(400);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });

  describe('loginAction', () => {
    it('should dispatch "loginAction.pending", "redirectToRoute", "loginAction.fulfilled" when server response 200', async() => {
      const fakeUser: AuthData = { email: 'test@test.ru', password: '123456' };
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);

      await store.dispatch(loginAction(fakeUser));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        redirectToRoute.type,
        loginAction.fulfilled.type,
      ]);
    });

    it('should call "saveToken" once with the received token', async () => {
      const fakeUser: AuthData = { email: 'test@test.ru', password: '123456' };
      const fakeServerReplay = { token: 'secret' };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction(fakeUser));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(fakeServerReplay.token);
    });

  });

  describe('logoutAction', () => {
    it('should dispatch "logoutAction.pending", "logoutAction.fulfilled" when server response 204', async() => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
    });

    it('should one call "dropToken" with "logoutAction"', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(logoutAction());

      expect(mockDropToken).toBeCalledTimes(1);
    });
  });

  describe('fetchOffersAction', () => {
    it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.fulfilled", when server response 200', async () => {
      const mockOffers = makeFakeOffers();
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, mockOffers);

      await store.dispatch(fetchOffersAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.fulfilled.type,
      ]);

      expect(fetchOffersActionFulfilled.payload)
        .toEqual(mockOffers);
    });

    it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

      await store.dispatch(fetchOffersAction());
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.rejected.type,
      ]);
    });
  });

  describe('fetchOfferAction', () => {
    it('should dispatch "fetchOfferAction.pending", "fetchOfferAction.fulfilled", when server response 200', async () => {
      const mockOffer = makeFakeOffer();
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockOffer.id}`).reply(200, mockOffer);

      await store.dispatch(fetchOfferAction(mockOffer.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOfferActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOfferAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.fulfilled.type,
      ]);

      expect(fetchOfferActionFulfilled.payload)
        .toEqual(mockOffer);
    });

    it('should dispatch "fetchOfferAction.pending", "fetchOffersAction.rejected" when server response 400', async () => {
      const mockId = datatype.uuid();
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockId}`).reply(400);

      await store.dispatch(fetchOfferAction('mockId'));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.rejected.type,
      ]);
    });
  });

  describe('fetchOffersNearbyAction', () => {
    it('should dispatch "fetchOffersNearbyAction.pending", "fetchOffersNearbyAction.fulfilled", when server response 200', async () => {
      const mockId = datatype.uuid();
      const mockOffers = makeFakeOffers();
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockId}${APIRoute.Nearby}`).reply(200, mockOffers);

      await store.dispatch(fetchOffersNearbyAction(mockId));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOfferActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffersNearbyAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOffersNearbyAction.pending.type,
        fetchOffersNearbyAction.fulfilled.type,
      ]);

      expect(fetchOfferActionFulfilled.payload)
        .toEqual(mockOffers);
    });

    it('should dispatch "fetchOffersNearbyAction.pending", "fetchOffersNearbyAction.rejected" when server response 400', async () => {
      const mockId = datatype.uuid();
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${mockId}${APIRoute.Nearby}`).reply(400);

      await store.dispatch(fetchOffersNearbyAction(mockId));
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchOffersNearbyAction.pending.type,
        fetchOffersNearbyAction.rejected.type,
      ]);
    });
  });

  describe('fetchFavoritesAction', () => {
    it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.fulfilled", when server response 200', async () => {
      const mockOffers = makeFakeOffers();
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, mockOffers);

      await store.dispatch(fetchFavoritesAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavoritesAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFavoritesAction.pending.type,
        fetchFavoritesAction.fulfilled.type,
      ]);

      expect(fetchOffersActionFulfilled.payload)
        .toEqual(mockOffers);
    });

    it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(400, []);

      await store.dispatch(fetchFavoritesAction());
      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchFavoritesAction.pending.type,
        fetchFavoritesAction.rejected.type,
      ]);
    });
  });

  describe('changeFavoritesAction', () => {
    it('should dispatch "changeFavoritesAction.pending", "changeFavoritesAction.rejected" when server response 400', async () => {
      const mockId = datatype.uuid();
      const favoriteStatus = datatype.number(1);
      const mockOffer = makeFakeOffer();
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${mockId}/${favoriteStatus}`).reply(200, mockOffer);

      await store.dispatch(changeFavoritesAction({offerId: mockId, status: favoriteStatus}));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof changeFavoritesAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        changeFavoritesAction.pending.type,
        changeFavoritesAction.fulfilled.type,
      ]);

      expect(fetchOffersActionFulfilled.payload)
        .toEqual(mockOffer);
    });

    it('should dispatch "changeFavoritesAction.pending", "changeFavoritesAction.fulfilled", when server response 200"', async () => {
      const mockId = datatype.uuid();
      const favoriteStatus = datatype.number(1);
      mockAxiosAdapter.onPost(`${APIRoute.Favorite}/${mockId}/${favoriteStatus}`).reply(400);

      await store.dispatch(changeFavoritesAction({offerId: mockId, status: favoriteStatus}));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        changeFavoritesAction.pending.type,
        changeFavoritesAction.rejected.type,
      ]);
    });
  });

  describe('fetchReviewsAction', () => {
    it('should dispatch "fetchReviewsAction.pending", "fetchReviewsAction.rejected" when server response 400', async () => {
      const mockId = datatype.uuid();
      const mockReviews = makeFakeReviews();
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/${mockId}`).reply(200, mockReviews);

      await store.dispatch(fetchReviewsAction(mockId));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchReviewsAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.fulfilled.type,
      ]);

      expect(fetchOffersActionFulfilled.payload)
        .toEqual(mockReviews);
    });

    it('should dispatch "fetchReviewsAction.pending", "fetchReviewsAction.fulfilled", when server response 200"', async () => {
      const mockId = datatype.uuid();
      mockAxiosAdapter.onGet(`${APIRoute.Comments}/${mockId}`).reply(400);

      await store.dispatch(fetchReviewsAction(mockId));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.rejected.type,
      ]);
    });
  });

  describe('sendReviewAction', () => {
    it('should dispatch "sendReviewAction.pending", "sendReviewAction.fulfilled" when server response 200', async () => {
      const mockId = datatype.uuid();
      const mockReview = {offerId: mockId, comment: 'i need some sleep', rating: 5};
      mockAxiosAdapter.onPost(`${APIRoute.Comments}/${mockId}`).reply(200, mockReview);

      await store.dispatch(sendReviewAction(mockReview));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof sendReviewAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        sendReviewAction.pending.type,
        sendReviewAction.fulfilled.type,
      ]);

      expect(fetchOffersActionFulfilled.payload)
        .toEqual(mockReview);
    });

    it('should dispatch "sendReviewAction.pending", "sendReviewAction.rejected" when server response 400', async () => {
      const mockId = datatype.uuid();
      const mockReview = {offerId: mockId, comment: 'i need some sleep', rating: 5};
      mockAxiosAdapter.onPost(`${APIRoute.Comments}/${mockId}`).reply(400);

      await store.dispatch(sendReviewAction(mockReview));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        sendReviewAction.pending.type,
        sendReviewAction.rejected.type,
      ]);
    });
  });
});
