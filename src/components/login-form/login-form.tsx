import React, {FormEvent, useState} from 'react';
import {regexEmail, regexPassword} from '../../helpers/validator';
import {toast} from 'react-toastify';
import {ValidateErrors} from '../../const';
import {loginAction} from '../../store/api-action';
import {store} from '../../store';

function LoginForm() {
  const [formState, setFormState] = useState({email: '', password: ''});

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

  return (
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
            data-testid='login-email'
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
            data-testid='login-password'
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
  );
}

export default LoginForm;
