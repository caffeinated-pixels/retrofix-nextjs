import styled, { CSSProperties } from 'styled-components'

type MainContainerProps = {
  opacity?: CSSProperties['opacity']
}

export const MainContainer = styled.main<MainContainerProps>`
  opacity: ${({ opacity }) => (opacity ? opacity : null)};
`
