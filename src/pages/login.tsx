import React, {FormEvent, useState} from 'react';
import Header from '../components/header/header';
import {regexEmail, regexPassword} from '../helpers/validator';
import {toast} from 'react-toastify';
import {AppRoute, AuthorizationStatus, FetchStatus, ValidateErrors} from '../const';
import {store} from '../store';
import {loginAction} from '../store/api-action';
import {useAppSelector} from '../hooks';
import {Navigate} from 'react-router-dom';
import {selectAuthStatus, selectFetchAuthStatus} from '../store/user-process/selectors';
import Loader from '../components/loader/loader';

function Login() {
  const [formState, setFormState] = useState({email: '', password: ''});
  const authorizationStatus: AuthorizationStatus = useAppSelector(selectAuthStatus);
  const fetchAuthStatus:FetchStatus = useAppSelector(selectFetchAuthStatus);

  const handleFormSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!regexEmail.test(formState.email)) {
      toast.error(ValidateErrors.IncorrectEmail);
      return;
    }
    if (formState.password.length < 6) {
      toast.error(ValidateErrors.ShortPassword);
      return;
    }

    if (!regexPassword.test(formState.password)) {
      toast.error(ValidateErrors.NoNumberPassword);
      return;
    }

    store.dispatch(loginAction(formState));
  };

  if (fetchAuthStatus === FetchStatus.Idle) {
    return <Loader />;
  }

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.root} />;
  }

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              method="post"
              onSubmit={(event) => handleFormSubmit(event)}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                  onChange={
                    (event) => setFormState(
                      (prevState) => ({...prevState, email: event.target.value})
                    )
                  }
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required=""
                  onChange={
                    (event) => setFormState(
                      (prevState) => ({...prevState, password: event.target.value})
                    )
                  }
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
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
