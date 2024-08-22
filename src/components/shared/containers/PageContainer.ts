import { colors } from '@/constants/theme'
import styled from 'styled-components'

type PageContainerProps = {
  $bgColor?: string
  $txtColor?: string
}

export const PageContainer = styled.div<PageContainerProps>`
  background-color: ${({ $bgColor }) => ($bgColor ? $bgColor : colors.bgBlack)};
  color: ${({ $txtColor }) => ($txtColor ? $txtColor : colors.bgWhite)};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  letter-spacing: 0.2px;
`
