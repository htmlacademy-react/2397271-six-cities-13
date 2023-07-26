import {OfferPreviewType, OfferSortType} from '../types/offer';
import {Cities} from '../const';
import {useMemo} from 'react';
import {CityNameType} from '../types/location';

const useFilteredOffers = (
  offerList:OfferPreviewType[],
  filter: typeof Cities[number],
  sort
) => {
  const filteredOffers = useMemo(() => {
    if (offerList.length && sort) {
      return offerList.filter((offer) => offer.city.name === filter);
    }
    return offerList;
  }, [offerList, filter, sort]);

  return filteredOffers;
};

export const useOffers = (
  offerList: OfferPreviewType[],
  filter: CityNameType,
  sort: OfferSortType
) => {
  const filteredOffers = useFilteredOffers(offerList, filter, sort);

  const sortedAndFilteredOffers = useMemo(() => {
    switch (sort) {
      case('Price: low to high'):
        return filteredOffers.sort((a, b) => a.price - b.price);
        break;
      case('Price: high to low'):
        return filteredOffers.sort((a, b) => b.price - a.price);
        break;
      case('Top rated first'):
        return filteredOffers.sort((a, b) => b.rating - a.rating);
        break;
      default:
        return filteredOffers;
    }
  }, [sort, filteredOffers]);

  return sortedAndFilteredOffers;
};
