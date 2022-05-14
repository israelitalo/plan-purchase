import React from 'react';
import { SubtitleStyled } from './styles';

interface SubtitleProps {
  type: 'bold' | 'hightLight';
  title: string;
}

const Subtitle = ({ type, title }: SubtitleProps) => {
  return <SubtitleStyled type={type}>{title}</SubtitleStyled>;
};

export default Subtitle;
