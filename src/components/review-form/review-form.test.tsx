import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import ReviewForm from './review-form';
import { datatype } from 'faker';

describe('Component: ReviewForm', () => {
  const mockId = datatype.uuid();

  it('should render correctly', () => {
    const FORM_CONTAINER_TEST_ID = 'review-form-container';
    const TEXTAREA_TEST_ID = 'review-form-textarea';
    const { withStoreComponent } = withStore(<ReviewForm id={mockId} />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const formContainer = screen.getByTestId(FORM_CONTAINER_TEST_ID);
    const textareaContainer = screen.getByTestId(TEXTAREA_TEST_ID);

    expect(formContainer).toBeInTheDocument();
    expect(textareaContainer).toBeInTheDocument();
  });

  it('should render correctly when user enter review', async () => {
    const TEXTAREA_TEST_ID = 'review-form-textarea';
    const TEXTAREA_VALUE = 'keks';
    const { withStoreComponent } = withStore(<ReviewForm id={mockId} />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    await userEvent.type(
      screen.getByTestId(TEXTAREA_TEST_ID),
      TEXTAREA_VALUE,
    );

    expect(screen.getByDisplayValue(TEXTAREA_VALUE)).toBeInTheDocument();
  });
});
