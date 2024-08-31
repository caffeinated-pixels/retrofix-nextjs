import { colors } from '@/constants/theme'
import styled from 'styled-components'

export const Form = styled.form`
  margin: 10px 0 20px;
`

export const InputWrapper = styled.div`
  margin-bottom: 10px;
`

type InputProps = {
  $borderColor: string
}

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 60px;
  padding: 0 10px;

  font-size: 0.875rem;

  border: ${({ $borderColor }) => $borderColor};

  @media (min-width: 740px) {
    font-size: 1rem;
  }
`

export const HiddenLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

export const InputError = styled.p`
  color: ${colors.errTextRed};
  font-size: 0.8125rem;
  padding-top: 0.15em;
`

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Checkbox = styled.input`
  margin: 0 10px 0 0;
  flex-shrink: 0;
  height: 32px;
  width: 32px;
`

export const Label = styled.label``
