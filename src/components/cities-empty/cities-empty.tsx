import React from 'react';
import {CityNameType} from '../../types/location';
import {selectCity} from '../../store/app-process/selectors';
import {useAppSelector} from '../../hooks';

function CitiesEmpty() {
  const currentCity: CityNameType = useAppSelector(selectCity);

  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
}

export default CitiesEmpty;
