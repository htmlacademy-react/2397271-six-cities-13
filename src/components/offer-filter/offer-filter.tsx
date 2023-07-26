import React, {ReactNode, useState} from 'react';
import {OfferSortType} from '../../types/offer';
import * as classNames from 'classnames';

interface OfferFilterProps {
  activeSort: OfferSortType;
  setSort: (sort:OfferSortType) => void;
  sortList: string[];
}

function OfferFilter({activeSort, setSort, sortList}:OfferFilterProps):ReactNode {
  const [isOpened, setIsOpened] = useState(false);

  const handleChangeClick = (sort:OfferSortType) => {
    setSort(sort);
    setIsOpened(!isOpened);
  };
  // TODO добавить закрытие по клику вне селекта

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => setIsOpened(!isOpened)}
      >
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames(
        'places__options places__options--custom',
        {'places__options--opened': isOpened})}
      >
        {sortList.map((sort) =>
          (
            <li
              key={sort}
              className={classNames(
                'places__option',
                {'places__option--active': sort === activeSort}
              )}
              tabIndex="0"
              onClick={() => handleChangeClick(sort)}
            >
              {sort}
            </li>
          )
        )}
      </ul>
    </form>
  );
}

export default OfferFilter;
