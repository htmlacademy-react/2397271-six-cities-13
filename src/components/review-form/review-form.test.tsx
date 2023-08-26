import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import ReviewForm from './review-form';

describe('Component: ReviewForm', () => {
  it('should render correctly', () => {
    const formContainerTestId = 'review-form-container';
    const textareaTestId = 'review-form-textarea';
    const { withStoreComponent } = withStore(<ReviewForm />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const formContainer = screen.getByTestId(formContainerTestId);
    const textareaContainer = screen.getByTestId(textareaTestId);

    expect(formContainer).toBeInTheDocument();
    expect(textareaContainer).toBeInTheDocument();
  });

  it('should render correctly when user enter review', async () => {
    const textareaTestId = 'review-form-textarea';
    const textareaValue = 'keks';
    const { withStoreComponent } = withStore(<ReviewForm />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    await userEvent.type(
      screen.getByTestId(textareaTestId),
      textareaValue,
    );

    expect(screen.getByDisplayValue(textareaValue)).toBeInTheDocument();
  });
});
