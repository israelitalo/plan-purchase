import React, { InputHTMLAttributes } from 'react';
import { Container, HelperText, InputStyled, Label } from './styles';

export type InputProps = {
  id?: string;
  name: string;
  label: string;
  helperText?: string;
  placeholder?: string;
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  name,
  label,
  onChange,
  value,
  helperText,
  placeholder,
  error,
  ...rest
}: InputProps) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <InputStyled
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        error={error}
        {...rest}
      />
      {error && <HelperText>{helperText}</HelperText>}
    </Container>
  );
};

export default Input;
