import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

type RegListProps = {
  $planform?: boolean
}

export const RegList = styled.ul<RegListProps>`
  margin: 25px 0 44px;
  margin: ${({ $planform }) => ($planform ? '4px 0 20px' : '25px 0 44px')};
  font-size: 1.0625rem;
  font-size: ${({ $planform }) => ($planform ? '1rem' : '1.0625rem')};
  padding: 0;
`

export const ListItem = styled.li<RegListProps>`
  display: flex;
  align-items: flex-start;
  text-align: left;

  & + & {
    margin-top: ${({ $planform }) => ($planform ? '8px' : '20px')};
  }
`

export const StyledIcon = styled(FontAwesomeIcon)<RegListProps>`
  color: red;
  font-size: ${({ $planform }) => ($planform ? '1rem' : '1.5rem')};
  margin-right: 0.75rem;
  margin-top: ${({ $planform }) => ($planform ? '0.1rem' : '0.2rem')};
  stroke: red;
  stroke-width: 30;
`
