import { render, screen } from '@testing-library/react';

import Title from '.';

describe('Title generec application', () => {
  it('Render generic title application', () => {
    render(<Title data-testid="title-payment" title="Testando" mb={0} />);
    expect(screen.getByTestId('title-payment')).toBeInTheDocument();
  });
});
