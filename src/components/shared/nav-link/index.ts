import Link from 'next/link'
import styled from 'styled-components'

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 0.875rem;
  letter-spacing: 0.2px;
  font-weight: 700;
  line-height: 3.2;
  margin: 0 10px;

  @media (min-width: 500px) {
    font-size: 1rem;
    margin: 0 3%;
  }

  @media (min-width: 740px) {
    font-size: 1.1875rem;
  }

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }

  &:visited {
    color: inherit;
  }
`
