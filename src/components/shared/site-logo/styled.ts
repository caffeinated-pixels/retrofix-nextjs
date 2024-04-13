import Link from 'next/link'
import styled from 'styled-components'

export const LogoWrapper = styled.div`
  width: 5.5rem;
  height: 1.5rem;

  @media (min-width: 550px) {
    width: 6.75rem;
    height: 2rem;
  }

  @media (min-width: 950px) {
    width: 8.375rem;
    height: 2.25rem;
  }

  @media (min-width: 1450px) {
    width: 10.4375rem;
    height: 2.8125rem;
  }
`

export const StyledNextLink = styled(Link)`
  &:focus-visible {
    outline: auto;
  }
`

export const Logo = styled.img`
  filter: invert(42%) sepia(79%) saturate(2023%) hue-rotate(164deg)
    brightness(98%) contrast(103%);
`
