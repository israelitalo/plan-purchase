import React from 'react';
import { SubtitleStyled } from './styles';

interface SubtitleProps {
  type: 'bold' | 'hightLight';
  title: string;
  center?: boolean;
}

const Subtitle = ({ type, title, center }: SubtitleProps) => {
  return (
    <SubtitleStyled type={type} center={center}>
      {title}
    </SubtitleStyled>
  );
};

export default Subtitle;
