import Link from 'next/link'
import styled from 'styled-components'
import { colors } from '@/constants/theme'

type LinkButtonProps = {
  bgcolor?: string
}

export const StyledLinkButton = styled(Link)<LinkButtonProps>`
  text-decoration: none;
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : colors.netflixRed)};
  color: #fff;
  font-size: 0.9rem;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;

  @media (min-width: 550px) {
    font-size: 1rem;
    padding: 0.44rem 1.06rem;
  }

  &:hover,
  &:focus-visible {
    background-color: ${colors.netflixRedFocus};
  }

  &:focus-visible {
    outline: auto;
  }
`
