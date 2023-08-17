import {OfferPreviewType, OfferType} from '../types/offer';

export const changeFavoriteOffers = (
  offers: OfferPreviewType[],
  activeOffer: OfferType,
  favoriteOffer: OfferPreviewType
) => {
  offers.map((offer) => {
    if (offer.id === favoriteOffer.id) {
      offer.isFavorite = favoriteOffer.isFavorite;
    }

    if (activeOffer && activeOffer.id === favoriteOffer.id) {
      activeOffer.isFavorite = favoriteOffer.isFavorite;
    }
  });
};
