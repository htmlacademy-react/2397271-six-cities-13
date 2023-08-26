import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import LoginForm from './login-form';

describe('Component: LoginForm', () => {
  const EMAIL_TEST_ID = 'login-email';
  const PASSWORD_TEST_ID = 'login-password';

  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<LoginForm />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const emailInput = screen.getByTestId(EMAIL_TEST_ID);
    const passwordInput = screen.getByTestId(PASSWORD_TEST_ID);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('should render correctly when user enter email and password', async () => {
    const EXPECTED_EMAIL_TEXT = 'asd@asd.asd';
    const EXPECTED_PASSWORD_TEXT = 'password';
    const { withStoreComponent } = withStore(<LoginForm />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    await userEvent.type(
      screen.getByTestId(EMAIL_TEST_ID),
      EXPECTED_EMAIL_TEXT,
    );
    await userEvent.type(
      screen.getByTestId(PASSWORD_TEST_ID),
      EXPECTED_PASSWORD_TEXT,
    );

    expect(screen.getByDisplayValue(EXPECTED_EMAIL_TEXT)).toBeInTheDocument();
    expect(screen.getByDisplayValue(EXPECTED_PASSWORD_TEXT)).toBeInTheDocument();
  });
});
