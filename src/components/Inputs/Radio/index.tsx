import React, { InputHTMLAttributes } from 'react';
import { Container, InputRadioStyled } from './styles';

export type InputProps = {
  id?: string;
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Radio = ({ id, name, onChange, value, ...rest }: InputProps) => {
  return (
    <Container>
      <InputRadioStyled
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type="radio"
        {...rest}
      />
    </Container>
  );
};

export default Radio;
