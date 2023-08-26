import {useState} from 'react';
import classNames from 'classnames';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {OfferSortList} from '../../const';
import {selectCity, selectSort} from '../../store/app-process/selectors';
import {changeSort} from '../../store/app-process/app-process';

function OfferFilter():JSX.Element {
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector(selectSort);
  const city = useAppSelector(selectCity);

  const handleChangeClick = (sort:string) => {
    dispatch(changeSort({sort, city}));
    setIsOpened(!isOpened);
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      data-testid='offer-filter-container'
    >
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
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
              tabIndex={0}
              onClick={() => handleChangeClick(sort)}
              data-testid='offer-filter-item'
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
