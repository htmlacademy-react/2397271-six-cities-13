import Header from '../../components/header/header';
import {AppRoute, AuthorizationStatus, Cities, DEFAULT_OFFER_SORT, FetchStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {Link, Navigate} from 'react-router-dom';
import {selectAuthStatus, selectFetchAuthStatus} from '../../store/user-process/selectors';
import Loader from '../../components/loader/loader';
import LoginForm from '../../components/login-form/login-form';
import { changeCity } from '../../store/app-process/app-process';
import { CityNameType } from '../../types/location';

function Login():JSX.Element {
  const authorizationStatus: AuthorizationStatus = useAppSelector(selectAuthStatus);
  const fetchAuthStatus:FetchStatus = useAppSelector(selectFetchAuthStatus);
  const randomCity:CityNameType = Cities[Math.floor(Math.random() * Cities.length)];
  const dispatch = useAppDispatch();

  if (fetchAuthStatus === FetchStatus.Idle) {
    return <Loader />;
  }

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Root} />;
  }

  return (
    <div className="page page--gray page--login" data-testid='login-container'>
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Root}
                onClick={() => dispatch(changeCity({city: randomCity, sort: DEFAULT_OFFER_SORT}))}
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
