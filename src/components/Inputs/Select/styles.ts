import styled from 'styled-components';
import { SelectProps } from '.';

type OmitInputProps = Omit<SelectProps, 'label' | 'helperText' | 'items'>;

export const OptionStyled = styled.option`
  background-color: var(--background);
`;

export const SelectStyled = styled.select<OmitInputProps>`
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
