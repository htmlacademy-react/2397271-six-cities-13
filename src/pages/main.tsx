import React, {ReactNode, useState} from 'react';
import OfferFilter from '../components/offer-filter/offer-filter';
import OfferList from '../components/offer-list/offer-list';
import Map from '../components/map/map';
import {OfferPreviewType, OfferSortType} from '../types/offer';
import Header from '../components/header/header';
import CityFilter from '../components/city-filter/city-filter';
import {useAppSelector} from '../hooks';
import {DEFAULT_OFFER_SORT, OfferSortList} from '../const';
import {useOffers} from '../hooks/use-offers';
import {CityNameType} from '../types/location';


function Main():ReactNode {
  const currentCity = useAppSelector((state) => state.city);
  const offerList = useAppSelector((state) => state.offers);
  const [activeOffer, setActiveOffer] = useState<OfferPreviewType | null>(null);
  const [filterSort, setFilterSort] = useState<OfferSortType>(DEFAULT_OFFER_SORT);
  const sortedAndFilteredOffers = useOffers<OfferPreviewType[], CityNameType, OfferSortType>(offerList, currentCity, filterSort);

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
              <b className="places__found">{sortedAndFilteredOffers.length} places to stay in {currentCity}</b>
              <OfferFilter
                activeSort={filterSort}
                setSort={setFilterSort}
                sortList={OfferSortList}
              />
              <div className="cities__places-list places__list tabs__content">
                <OfferList
                  offerList={sortedAndFilteredOffers}
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
                  city={sortedAndFilteredOffers[0].city}
                  offerList={sortedAndFilteredOffers}
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
