import React, {useCallback, useState} from 'react';
import OfferFilter from '../offer-filter/offer-filter';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import {useAppSelector} from '../../hooks';
import {OfferPreviewType} from '../../types/offer';
import {CityNameType} from '../../types/location';
import {selectCity} from '../../store/app-process/selectors';
import CitiesEmpty from '../cities-empty/cities-empty';

interface CitiesProps {
  selectedOffers: OfferPreviewType[];
}

function Cities({selectedOffers}:CitiesProps) {
  const [activeOffer, setActiveOffer] = useState<OfferPreviewType | null>(null);
  const currentCity: CityNameType = useAppSelector(selectCity);

  const handleActiveOffer = useCallback((offer:OfferPreviewType) => {
    setActiveOffer(offer);
  }, []);

  return (
    <div className="cities">
      {
        !selectedOffers.length
          ?
          <CitiesEmpty currentCity={currentCity}/>
          :
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{selectedOffers.length} places to stay in {currentCity}</b>
              <OfferFilter />
              <div className="cities__places-list places__list tabs__content">
                <OfferList
                  offerList={selectedOffers}
                  className='cities'
                  handleMouseEnter={handleActiveOffer}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={selectedOffers[0].city}
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
