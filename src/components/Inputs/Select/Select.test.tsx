import { fireEvent, render, screen } from '@testing-library/react';

import Select from '.';

describe('Select generec application', () => {
  it('Render generic select application', () => {
    render(
      <Select
        items={[{ label: '1', value: '1' }]}
        label="Teste"
        name="teste"
        data-testid="select-test"
      />,
    );
    expect(screen.getByTestId('select-test')).toBeInTheDocument();
  });

  it('Select change value', () => {
    render(
      <Select
        items={[
          { label: '1', value: '1' },
          { label: '2', value: '2' },
        ]}
        label="Teste"
        name="teste"
        data-testid="select-test"
      />,
    );
    const select = screen.getByTestId('select-test');
    fireEvent.change(select, { target: { value: '2' } });
    expect(select).toHaveValue('2');
  });
});
