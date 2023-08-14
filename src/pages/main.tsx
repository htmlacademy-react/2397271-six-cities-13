import React, {ReactNode, useState} from 'react';
import OfferFilter from '../components/offer-filter/offer-filter';
import OfferList from '../components/offer-list/offer-list';
import Map from '../components/map/map';
import {OfferPreviewType} from '../types/offer';
import Header from '../components/header/header';
import CityFilter from '../components/city-filter/city-filter';
import {useAppSelector} from '../hooks';
import {CityNameType} from '../types/location';
import Loader from '../components/loader/loader';
import {
  selectCity,
  selectFetchOffersStatus,
  selectOffersByCity,
  selectOffersBySortAndCity
} from '../store/offers-data/selectors';
import {FetchStatus} from '../const';

function Main():ReactNode {
  const [activeOffer, setActiveOffer] = useState<OfferPreviewType | null>(null);
  const currentCity: CityNameType = useAppSelector(selectCity);
  const fetchOffersStatus: FetchStatus = useAppSelector(selectFetchOffersStatus);
  const selectedOffers = useAppSelector(selectOffersByCity);
  const selectedAndSortedOffers = useAppSelector(selectOffersBySortAndCity);

  if (fetchOffersStatus === FetchStatus.Idle) {
    return <Loader />;
  }

  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityFilter />
        </div>
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
                      handleMouseEnter={(offer:OfferPreviewType) => {
                        setActiveOffer(offer);
                      }}
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
      </main>
    </div>);
}

export default Main;
