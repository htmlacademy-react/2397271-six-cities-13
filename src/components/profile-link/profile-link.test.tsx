import {render, screen} from '@testing-library/react';
import {withHistory, withStore} from '../../utils/mocks/mock-component';
import ProfileLink from './profile-link';

describe('Component: ProfileLink', () => {
  it('should render correct', () => {
    const PROFILE_LINK_TEST_ID = 'profile-link-container';
    const { withStoreComponent } = withStore(<ProfileLink />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    const profileLinkContainer = screen.getByTestId(PROFILE_LINK_TEST_ID);

    expect(profileLinkContainer).toBeInTheDocument();
  });
});
