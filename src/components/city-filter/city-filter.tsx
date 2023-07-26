import React, {useEffect} from 'react';
import {Cities} from '../../const';
import * as classNames from 'classnames';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity, filterOfferList} from '../../store/action';

function CityFilter() {
  const dispatch = useAppDispatch();
  const currentCity: typeof Cities[number] = useAppSelector((state) => state.city);
  const offersList = useAppSelector((state) => state.offers);

  useEffect(() => {
    dispatch(filterOfferList({offers: offersList, city: currentCity}));
  }, [currentCity, offersList, dispatch]);

  const handleCityClick = (event:React.MouseEvent<HTMLLinkElement>, city:typeof Cities[number]) => {
    event.preventDefault();
    dispatch(changeCity({city: city}));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          Cities.map((city) =>
            (
              <li className="locations__item" key={city}>
                <a
                  className={
                    classNames('locations__item-link tabs__item', {'tabs__item--active': currentCity === city})
                  }
                  href="#"
                  onClick={(event) => handleCityClick(event, city)}
                >
                  <span>{city}</span>
                </a>
              </li>
            )
          )
        }
      </ul>
    </section>
  );
}

export default CityFilter;
