import Header from '../../components/header/header';
import CityFilter from '../../components/city-filter/city-filter';
import {useAppSelector} from '../../hooks';
import Loader from '../../components/loader/loader';
import {selectFetchOffersStatus, selectOffersBySortAndCity} from '../../store/offers-data/selectors';
import {FetchStatus} from '../../const';
import Cities from '../../components/cities/cities';
import {OfferPreviewType} from '../../types/offer';
import classNames from 'classnames';

function Main():JSX.Element {
  const selectedAndSortedOffers: OfferPreviewType[] = useAppSelector(selectOffersBySortAndCity);
  const fetchOffersStatus: FetchStatus = useAppSelector(selectFetchOffersStatus);


  if (fetchOffersStatus === FetchStatus.Idle) {
    return <Loader />;
  }

  return (
    <div className='page page--gray page--main' data-testid='main-container'>
      <Header />
      <main className={
        classNames('page__main page__main--index', {
          'page__main--index-empty': !selectedAndSortedOffers.length
        })
      }
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityFilter />
        </div>
        <Cities />
      </main>
    </div>);
}

export default Main;
