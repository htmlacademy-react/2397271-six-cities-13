import {Cities} from '../../const';
import FavoriteItem from '../favorite-item/favorite-item';
import {OfferPreviewType} from '../../types/offer';
import {selectFavoritesData} from '../../store/favorites-data/selectors';
import {useAppSelector} from '../../hooks';
import { CityNameType } from '../../types/location';

function FavoritesList(): JSX.Element {
  const favoriteOffers: OfferPreviewType[] = useAppSelector(selectFavoritesData);
  const filterOfferByCity = (city: CityNameType) => favoriteOffers.filter((item) => item.city.name === city);

  return (
    <section className="favorites" data-testid='favorites-list'>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          Cities.map((city) => {
            const sortedCards = filterOfferByCity(city);
            if (sortedCards.length) {
              return <FavoriteItem key={city} sortedCards={sortedCards} city={city}/>;
            }
          })
        }
      </ul>
    </section>
  );
}

export default FavoritesList;
