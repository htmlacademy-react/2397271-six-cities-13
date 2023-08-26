import React from 'react';
import {Cities} from '../../const';
import classNames from 'classnames';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {CityNameType} from '../../types/location';
import {selectCity, selectSort} from '../../store/app-process/selectors';
import {changeCity} from '../../store/app-process/app-process';

function CityFilter(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity: CityNameType = useAppSelector(selectCity);
  const sort: string = useAppSelector(selectSort);

  const handleCityClick = (event:React.MouseEvent<HTMLElement>, city: CityNameType) => {
    event.preventDefault();
    dispatch(changeCity({city, sort}));
  };

  return (
    <section className="locations container" data-testid='city-filter-container'>
      <ul className="locations__list tabs__list">
        {
          Cities.map((city) =>
            (
              <li className="locations__item" key={city} data-testid='city-filter-item'>
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
