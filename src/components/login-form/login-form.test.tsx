import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import LoginForm from './login-form';

describe('Component: LoginForm', () => {
  it('should render correctly', () => {
    const emailTestId = 'login-email';
    const passwordTestId = 'login-password';
    const { withStoreComponent } = withStore(<LoginForm />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const emailInput = screen.getByTestId(emailTestId);
    const passwordInput = screen.getByTestId(passwordTestId);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('should render correctly when user enter email and password', async () => {
    const emailTestId = 'login-email';
    const passwordTestId = 'login-password';
    const expectedEmailText = 'asd@asd.asd';
    const expectedPasswordText = 'password';
    const { withStoreComponent } = withStore(<LoginForm />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    await userEvent.type(
      screen.getByTestId(emailTestId),
      expectedEmailText,
    );
    await userEvent.type(
      screen.getByTestId(passwordTestId),
      expectedPasswordText,
    );

    expect(screen.getByDisplayValue(expectedEmailText)).toBeInTheDocument();
    expect(screen.getByDisplayValue(expectedPasswordText)).toBeInTheDocument();
  });
});
