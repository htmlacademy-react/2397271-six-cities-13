import {OfferPreviewType, OfferType} from '../types/offer';
import {AppRoute, OfferSortList} from '../const';

export const sortOffers = (offers:OfferPreviewType[], sort: string) => {
  const offersCopy = [...offers];
  switch (sort) {
    case(OfferSortList.PriceLowToHigh):
      return offersCopy.sort((a, b) => a.price - b.price);
    case(OfferSortList.PriceHighToLow):
      return offersCopy.sort((a, b) => b.price - a.price);
    case(OfferSortList.RatingHighToLow):
      return offersCopy.sort((a, b) => b.rating - a.rating);
    default:
      return offersCopy;
  }
};

export const changeFavoriteOffers = (
  offers: OfferPreviewType[] | null,
  activeOffer: OfferType | null,
  favoriteOffer: OfferPreviewType
) => {
  if (offers) {
    offers.map((offer) => {
      if (offer.id === favoriteOffer.id) {
        offer.isFavorite = favoriteOffer.isFavorite;
      }
    });
  }

  if (activeOffer && activeOffer.id === favoriteOffer.id) {
    activeOffer.isFavorite = favoriteOffer.isFavorite;
  }
};

export const getCardPath = (id: string) => AppRoute.Offer.slice(0, AppRoute.Offer.indexOf(':id')) + id;
