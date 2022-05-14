import styled from 'styled-components';

interface ContainerProps {
  type: 'bold' | 'hightLight';
}

export const SubtitleStyled = styled.p<ContainerProps>`
  font-size: 16px;
  height: 21px;
  line-height: 21px;
  letter-spacing: -0.02em;

  ${({ type }) =>
    type === 'bold'
      ? `
    color: var(--black);
    width: 311px;
  `
      : `
      color: var(--gray-500);
    width: 194px;
      `}
`;
