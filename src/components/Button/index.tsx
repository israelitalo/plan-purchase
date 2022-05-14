import React, { ButtonHTMLAttributes } from 'react';
import { Container, ButtonStyled } from './styles';

type ButtonProps = {
  title: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <Container>
      <ButtonStyled {...rest}>{title}</ButtonStyled>
    </Container>
  );
};

export default Button;
