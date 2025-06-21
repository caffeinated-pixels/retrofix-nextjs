import { HOME } from '@/constants/routes'

import { Logo, LogoWrapper, StyledNextLink } from './styled'

type SiteLogoProps = {
  isBrowsePage?: boolean
  isGetTheAppPage?: boolean
}

export const SiteLogo = ({ isBrowsePage, isGetTheAppPage }: SiteLogoProps) => {
  return (
    <LogoWrapper
      $isBrowsePage={isBrowsePage}
      $isGetTheAppPage={isGetTheAppPage}
    >
      <StyledNextLink href={HOME}>
        <Logo src='../images/misc/logo.svg' alt='RetroFix home' />
      </StyledNextLink>
    </LogoWrapper>
  )
}
