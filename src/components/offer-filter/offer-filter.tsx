import React, {ReactNode, useState} from 'react';
import * as classNames from 'classnames';
import {changeOffersSort} from '../../store/action';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {OfferSortList} from '../../const';
import {selectSort} from '../../store/offers-data/selectors';

function OfferFilter():ReactNode {
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector(selectSort);

  const handleChangeClick = (sort:OfferSortList) => {
    dispatch(changeOffersSort({sort: sort}));
    setIsOpened(!isOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => setIsOpened(!isOpened)}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames(
        'places__options places__options--custom',
        {'places__options--opened': isOpened})}
      >
        {Object.values(OfferSortList).map((sort:OfferSortList) =>
          (
            <li
              key={sort}
              className={classNames(
                'places__option',
                {'places__option--active': sort === currentSort}
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
