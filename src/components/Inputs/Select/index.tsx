import React, { SelectHTMLAttributes } from 'react';
import { HelperText, Label, Container } from '../Input/styles';
import { OptionStyled, SelectStyled } from './styles';

export type SelectProps = {
  id?: string;
  name: string;
  label: string;
  helperText?: string;
  error?: boolean;
  items: Array<{
    value: string;
    label: string;
  }>;
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({
  name,
  label,
  onChange,
  value,
  helperText,
  error,
  items,
  ...rest
}: SelectProps) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <SelectStyled id={name} name={name} value={value} onChange={onChange} error={error} {...rest}>
        <OptionStyled disabled value="" hidden>
          Selecionar
        </OptionStyled>
        {items.map((item) => (
          <OptionStyled key={item.value} value={item.value}>
            {item.label}
          </OptionStyled>
        ))}
      </SelectStyled>
      {error && <HelperText>{helperText}</HelperText>}
    </Container>
  );
};

export default Select;
