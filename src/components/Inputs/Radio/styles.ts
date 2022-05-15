import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & + div {
    margin-top: 30px;
  }
`;

export const InputRadioStyled = styled.input`
  cursor: pointer;
  outline: none;
  width: 16px;
  height: 16px;

  &[type='radio']:after {
    width: 16px;
    height: 16px;
    border-radius: 16px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: var(--background);
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid var(--gray-300);
  }

  &[type='radio']:checked:after {
    width: 14px;
    height: 14px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: var(--blue);
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid var(--gray-500);
  }
`;
