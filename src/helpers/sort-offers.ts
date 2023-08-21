import {OfferPreviewType} from '../types/offer';
import {OfferSortList} from '../const';

export const sortOffers = (offers:OfferPreviewType[], sort: OfferSortList) => {
  const offersCopy = [...offers];
  switch (sort) {
    case(OfferSortList.PriceLowToHigh):
      return offersCopy.sort((a, b) => a.price - b.price);
      break;
    case(OfferSortList.PriceHighToLow):
      return offersCopy.sort((a, b) => b.price - a.price);
      break;
    case(OfferSortList.RatingHighToLow):
      return offersCopy.sort((a, b) => b.rating - a.rating);
      break;
    default:
      return offersCopy;
  }
};
