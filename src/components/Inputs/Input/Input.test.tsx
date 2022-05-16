import { fireEvent, render, screen } from '@testing-library/react';

import Input from '.';

describe('Input generec application', () => {
  it('Render generic input application', () => {
    render(<Input label="Teste" name="teste" data-testid="input-test" />);
    expect(screen.getByTestId('input-test')).toBeInTheDocument();
  });

  it('Input change value', () => {
    render(<Input label="Teste" name="teste" data-testid="input-test" />);
    const input = screen.getByTestId('input-test');
    fireEvent.change(input, { target: { value: 'hello world' } });
    expect(input).toHaveValue('hello world');
  });
});
