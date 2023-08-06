import React, {ReactNode, useState} from 'react';
import OfferFilter from '../components/offer-filter/offer-filter';
import OfferList from '../components/offer-list/offer-list';
import Map from '../components/map/map';
import {OfferPreviewType} from '../types/offer';
import Header from '../components/header/header';
import CityFilter from '../components/city-filter/city-filter';
import {useAppSelector} from '../hooks';
import {useSelector} from 'react-redux';
import {CityNameType} from '../types/location';
import {selectOffersByCity, selectOffersBySortAndCity} from '../store/selectors/offers';

function Main():ReactNode {
  const [activeOffer, setActiveOffer] = useState<OfferPreviewType | null>(null);
  const currentCity: CityNameType = useAppSelector((state) => state.city);

  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityFilter />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{useSelector(selectOffersByCity).length} places to stay in {currentCity}</b>
              <OfferFilter />
              <div className="cities__places-list places__list tabs__content">
                <OfferList
                  offerList={useSelector(selectOffersBySortAndCity)}
                  className='cities'
                  handleMouseEnter={(offer:OfferPreviewType) => {
                    setActiveOffer(offer);
                  }}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={useSelector(selectOffersByCity)[0].city}
                  offerList={useSelector(selectOffersByCity)}
                  activeOffer={activeOffer}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>);
}

export default Main;
