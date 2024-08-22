import { colors } from '@/constants/theme'
import styled from 'styled-components'

type SubmitButtonContainerProps = {
  $maxWidth?: string
}

const SubmitButtonContainer = styled.div<SubmitButtonContainerProps>`
  max-width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth : '340px')};
  margin: 24px auto 0;
`

type ButtonProps = {
  $boldText?: boolean
}

const Button = styled.button<ButtonProps>`
  width: 100%;
  min-height: 48px;
  background-color: ${colors.netflixRed};
  border: none;
  cursor: pointer;

  color: #fff;
  font-size: 1.0625rem;
  font-weight: ${({ $boldText }) => ($boldText ? '700' : '')};
  letter-spacing: 0.025rem;

  border-radius: 2px;

  &:hover,
  &:focus-visible {
    background-color: ${colors.netflixRedFocus};
  }

  &:focus-visible {
    outline: auto;
  }
`

type SubmitButtonProps = {
  onClick: () => void
  maxWidth?: string
  boldText?: boolean
  children: React.ReactNode
}

export const SubmitButton = ({
  onClick,
  maxWidth,
  boldText,
  children,
}: SubmitButtonProps) => {
  return (
    <SubmitButtonContainer $maxWidth={maxWidth}>
      <Button onClick={onClick} $boldText={boldText}>
        {children}
      </Button>
    </SubmitButtonContainer>
  )
}
