import { HOME } from '@/constants/routes'

import { Logo, LogoWrapper, StyledNextLink } from './styled'

type SiteLogoProps = {
  isBrowsePage?: boolean
}

export const SiteLogo = ({ isBrowsePage }: SiteLogoProps) => {
  return (
    <LogoWrapper $isBrowsePage={isBrowsePage}>
      <StyledNextLink href={HOME}>
        <Logo src='../images/misc/logo.svg' alt='RetroFix home' />
      </StyledNextLink>
    </LogoWrapper>
  )
}
