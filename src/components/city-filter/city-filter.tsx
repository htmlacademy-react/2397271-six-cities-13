import React from 'react';
import {Cities} from '../../const';
import * as classNames from 'classnames';

interface CityFilterProps {
  currentCity: typeof Cities[number];
  setCurrentCity: (string) => void;
}

function CityFilter({currentCity, setCurrentCity}:CityFilterProps) {
  const handleCityClick = (event:React.MouseEvent<HTMLLinkElement>, city:typeof Cities[number]) => {
    event.preventDefault();
    setCurrentCity(city);
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
