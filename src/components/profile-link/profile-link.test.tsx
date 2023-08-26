import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import ProfileLink from './profile-link';

describe('Component: ProfileLink', () => {
  it('should render correct', () => {
    const profileLinkTestId = 'profile-link-container';
    const { withStoreComponent } = withStore(<ProfileLink />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const profileLinkContainer = screen.getByTestId(profileLinkTestId);

    expect(profileLinkContainer).toBeInTheDocument();
  });
});
