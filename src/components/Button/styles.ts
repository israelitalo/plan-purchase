import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
`;

export const ButtonStyled = styled.button`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: var(--blue);
  border-radius: 25px;
  color: var(--white);
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  transition: background-color 0.2s;

  &:hover:enabled {
    background-color: ${shade(0.2, '#191847')};
  }
`;
