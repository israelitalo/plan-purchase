import styled from 'styled-components';

interface TitleProps {
  mb: number;
}

export const TitleStyled = styled.h4<TitleProps>`
  font-size: 20px;
  height: 26px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: var(--black);
  margin-bottom: ${({ mb }) => `${mb}px`};
`;
