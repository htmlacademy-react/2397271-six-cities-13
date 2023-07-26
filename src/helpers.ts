import {OfferPreviewType} from './types/offer';
import {Cities} from './const';

export const filterOffersByCity = (offers:OfferPreviewType[], city: typeof Cities[number]) =>
  offers.filter((offer) => offer.city.name === city);
