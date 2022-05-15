import React from 'react';
import { TitleStyled } from './styles';

interface TitleProps {
  title: string;
  mb: number;
  mt?: number;
}

const Title = ({ title, mb, mt }: TitleProps) => {
  return (
    <TitleStyled mb={mb} mt={mt}>
      {title}
    </TitleStyled>
  );
};

export default Title;
