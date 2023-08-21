import React from 'react';
import {FetchStatus} from '../../const';
import {OfferPreviewType} from '../../types/offer';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import {useAppSelector} from '../../hooks';
import {selectFavoritesData, selectFetchFavoritesStatus} from '../../store/favorites-data/selectors';
import Loader from '../../components/loader/loader';
import classNames from 'classnames';
import FavoritesList from '../../components/favorites-list/favorites-list';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';

function Favorites() {
  const fetchFavoritesStatus = useAppSelector(selectFetchFavoritesStatus);
  const favoriteOffers: OfferPreviewType[] = useAppSelector(selectFavoritesData);

  if (fetchFavoritesStatus === FetchStatus.Idle) {
    return <Loader />;
  }

  return (
    <div className='page' data-testid='favorites-container'>
      <Header />
      <main className={classNames('page__main page__main--favorites', {
        'page__main--favorites-empty': !favoriteOffers.length
      })}
      >
        <div className="page__favorites-container container">
          {favoriteOffers.length
            ? <FavoritesList />
            : <FavoritesEmpty />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
