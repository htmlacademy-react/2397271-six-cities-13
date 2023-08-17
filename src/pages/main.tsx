import React, {ReactNode} from 'react';
import Header from '../components/header/header';
import CityFilter from '../components/city-filter/city-filter';
import {useAppSelector} from '../hooks';
import Loader from '../components/loader/loader';
import {selectFetchOffersStatus} from '../store/offers-data/selectors';
import {FetchStatus} from '../const';
import Cities from '../components/cities/cities';

function Main():ReactNode {

  const fetchOffersStatus: FetchStatus = useAppSelector(selectFetchOffersStatus);


  if (fetchOffersStatus === FetchStatus.Idle) {
    return <Loader />;
  }

  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityFilter />
        </div>
        <Cities />
      </main>
    </div>);
}

export default Main;
