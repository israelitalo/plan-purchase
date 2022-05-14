import styled from 'styled-components';
import { InputProps } from '.';

type OmitInputProps = Omit<InputProps, 'label' | 'helperText'>;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & + div {
    margin-top: 30px;
  }
`;

export const Label = styled.label`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: var(--gray-700);
  margin-bottom: 4px;
`;

export const InputStyled = styled.input<OmitInputProps>`
  width: 100%;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  background-color: transparent;
  border: 0;
  color: var(--gray-500);
  border-bottom: 1px solid var(--gray-300);
  ${({ error }) => error && `border-bottom: 1px solid var(--red);`}

  &::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: var(--gray-500);
  }
  &:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: var(--gray-500);
    opacity: 1;
  }
  &::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: var(--gray-500);
    opacity: 1;
  }
  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--gray-500);
  }
  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--gray-500);
  }
  &::placeholder {
    /* Most modern browsers support this now. */
    color: var(--gray-500);
  }
  &::-webkit-input-placeholder {
    color: var(--gray-500);
  }
`;

export const HelperText = styled.span`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: var(--red);
  margin: 4px 0;
`;
