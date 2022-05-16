import { fireEvent, render, screen } from '@testing-library/react';

import Radio from '.';

describe('Radio generec application', () => {
  it('Render generic radio application', () => {
    render(<Radio name="teste" data-testid="radio-test" />);
    expect(screen.getByTestId('radio-test')).toBeInTheDocument();
  });

  it('Radio change value', () => {
    render(<Radio name="teste" data-testid="radio-test" />);
    const radio = screen.getByTestId('radio-test');
    fireEvent.change(radio, { target: { checked: true } });
    expect(radio).toBeChecked();
  });
});
