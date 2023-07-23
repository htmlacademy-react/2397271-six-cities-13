import React, {ReactNode, useEffect, useState} from 'react';
import OfferFilter from '../components/offer-filter/offer-filter';
import OfferList from '../components/offer-list/offer-list';
import Map from '../components/map/map';
import {OfferPreviewProps} from '../types/offer-props';
import Header from '../components/header/header';
import {Cities} from '../const';
import CityFilter from '../components/city-filter/city-filter';

interface MainProps {
  offerList: OfferPreviewProps[];
}

function Main({offerList}:MainProps):ReactNode {
  const [currentCity, setCurrentCity] = useState<typeof Cities[number]>(Cities[0]);
  const [activeOffer, setActiveOffer] = useState<OfferPreviewProps | null>(null);

  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityFilter currentCity={currentCity} setCurrentCity={setCurrentCity} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offerList.length} places to stay in {currentCity}</b>
              <OfferFilter />
              <div className="cities__places-list places__list tabs__content">
                <OfferList
                  offerList={offerList}
                  className='cities'
                  handleMouseEnter={(offer:OfferPreviewProps) => {
                    setActiveOffer(offer);
                  }}
                >
                </OfferList>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={offerList[0].city} offerList={offerList} activeOffer={activeOffer}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>);
}

export default Main;
