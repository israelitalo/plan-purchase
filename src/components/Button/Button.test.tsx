import { render, screen } from '@testing-library/react';

import Button from '.';

describe('Button generec application', () => {
  it('Render generic button application', () => {
    render(<Button title="Button" data-testid="button-test" />);
    expect(screen.getByTestId('button-test')).toBeInTheDocument();
  });
});
