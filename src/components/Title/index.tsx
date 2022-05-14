import React from 'react';
import { TitleStyled } from './styles';

interface TitleProps {
  title: string;
  mb: number;
}

const Title = ({ title, mb }: TitleProps) => {
  return <TitleStyled mb={mb}>{title}</TitleStyled>;
};

export default Title;
