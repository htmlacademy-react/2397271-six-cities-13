import {ChangeEvent, FormEvent, useState} from 'react';
import {REGEX_PASSWORD} from '../../helpers/validator';
import {loginAction} from '../../store/api-action';
import {store} from '../../store';

function LoginForm():JSX.Element {
  const [formState, setFormState] = useState({email: '', password: ''});

  const handleEmailChange = (event:ChangeEvent<HTMLInputElement>) => {
    setFormState(
      (prevState) => ({...prevState, email: event.target.value})
    );
  };

  const checkPassword = formState.password.length >= 2 && REGEX_PASSWORD.test(formState.password);

  const handlePasswordChange = (event:ChangeEvent<HTMLInputElement>) => {
    setFormState(
      (prevState) => ({...prevState, password: event.target.value})
    );
  };

  const handleFormSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (checkPassword) {
      store.dispatch(loginAction(formState));
    }
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        method="post"
        onSubmit={handleFormSubmit}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            required
            data-testid='login-email'
            onChange={handleEmailChange}
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required
            data-testid='login-password'
            onChange={handlePasswordChange}
          />
        </div>
        <button
          className="login__submit form__submit button"
          type="submit"
          disabled={!checkPassword}
        >Sign in</button>
      </form>
    </section>
  );
}

export default LoginForm;
