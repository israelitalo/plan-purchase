import { render, screen } from '@testing-library/react';

import Subtitle from '.';

describe('Subtitle generec application', () => {
  it('Render generic subtitle application', () => {
    render(<Subtitle title="Subtitle" type="bold" data-testid="subtitle-payment" />);
    expect(screen.getByTestId('subtitle-payment')).toBeInTheDocument();
  });
});
