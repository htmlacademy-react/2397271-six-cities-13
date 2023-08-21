import React from 'react';
import Header from '../../components/header/header';
import {AppRoute, AuthorizationStatus, FetchStatus} from '../../const';
import {useAppSelector} from '../../hooks';
import {Navigate} from 'react-router-dom';
import {selectAuthStatus, selectFetchAuthStatus} from '../../store/user-process/selectors';
import Loader from '../../components/loader/loader';
import LoginForm from '../../components/login-form/login-form';

function Login() {
  const authorizationStatus: AuthorizationStatus = useAppSelector(selectAuthStatus);
  const fetchAuthStatus:FetchStatus = useAppSelector(selectFetchAuthStatus);


  if (fetchAuthStatus === FetchStatus.Idle) {
    return <Loader />;
  }

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Root} />;
  }

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="src/pages/login/login#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
