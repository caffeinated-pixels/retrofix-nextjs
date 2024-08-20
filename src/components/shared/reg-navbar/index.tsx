'use client'
import { colors } from '@/constants/theme'
import styled from 'styled-components'
import SiteLogo from '../site-logo'

type NavContainerProps = {
  $noBorder?: boolean
}

const NavContainer = styled.nav<NavContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 45px;

  border-bottom: ${({ $noBorder }) =>
    $noBorder ? '' : `1px solid ${colors.borderLightGrey}`};

  @media (min-width: 500px) {
    height: 75px;
  }

  @media (min-width: 740px) {
    height: 90px;
  }
`
const LogoWrapper = styled.div`
  width: 75px;
  height: 20px;
  margin-left: 3%;

  @media (min-width: 500px) {
    width: 167px;
    height: 45px;
  }
`

type RegNavbarProps = {
  children?: React.ReactNode
  noBorder?: boolean
}

export const RegNavbar = ({ children, noBorder }: RegNavbarProps) => {
  return (
    <NavContainer $noBorder={noBorder}>
      <LogoWrapper>
        <SiteLogo />
      </LogoWrapper>
      {children}
    </NavContainer>
  )
}
