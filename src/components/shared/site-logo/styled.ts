import Link from 'next/link'
import styled from 'styled-components'

export const StyledNextLink = styled(Link)`
  &:focus-visible {
    outline: auto;
  }
`

export const Logo = styled.img`
  filter: invert(42%) sepia(79%) saturate(2023%) hue-rotate(164deg)
    brightness(98%) contrast(103%);
`
