import React, {useCallback, useState} from 'react';
import OfferFilter from '../offer-filter/offer-filter';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import {selectOffersByCity, selectOffersBySortAndCity} from '../../store/offers-data/selectors';
import {useAppSelector} from '../../hooks';
import {OfferPreviewType} from '../../types/offer';
import {CityNameType} from '../../types/location';
import {selectCity} from '../../store/app-process/selectors';

function Cities() {
  const [activeOffer, setActiveOffer] = useState<OfferPreviewType | null>(null);
  const currentCity: CityNameType = useAppSelector(selectCity);
  const selectedOffers = useAppSelector(selectOffersByCity);
  const selectedAndSortedOffers = useAppSelector(selectOffersBySortAndCity);

  const handleActiveOffer = useCallback((offer:OfferPreviewType) => {
    setActiveOffer(offer);
  }, []);

  return (
    <div className="cities">
      {
        !selectedOffers.length
          ?
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
          :
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{selectedOffers.length} places to stay in {currentCity}</b>
              <OfferFilter />
              <div className="cities__places-list places__list tabs__content">
                <OfferList
                  offerList={selectedAndSortedOffers}
                  className='cities'
                  handleMouseEnter={handleActiveOffer}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={selectedAndSortedOffers[0].city}
                  offerList={selectedOffers}
                  activeOffer={activeOffer}
                />
              </section>
            </div>
          </div>
      }

    </div>
  );
}

export default Cities;
