import { render, screen } from '@testing-library/react';

import Header from '.';

describe('Header generec application', () => {
  it('Render generic header application', () => {
    render(<Header data-testid="header-payment" />);
    expect(screen.getByTestId('header-payment')).toBeInTheDocument();
  });

  it('Render back button in with prop hasGoBack true, in generic header application', () => {
    render(<Header hasGoBack data-testid="header-payment" />);
    expect(screen.getByTestId('header-button')).toBeInTheDocument();
  });
});
