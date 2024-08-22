import styled from 'styled-components'

type RegContextBodyProps = {
  $regForm?: boolean
}

export const RegContextBody = styled.div<RegContextBodyProps>`
  font-size: 1.0625rem;
  max-width: 300px;

  @media (min-width: 600px) {
    margin: ${({ $regForm }) => ($regForm ? '' : '0 auto')};
  }
`
