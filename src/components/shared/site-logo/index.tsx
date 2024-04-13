import { HOME } from '@/constants/routes'
import { Logo, LogoWrapper, StyledNextLink } from './styled'

export default function SiteLogo({ ...restProps }) {
  return (
    <LogoWrapper>
      <StyledNextLink href={HOME}>
        <Logo
          src='../images/misc/logo.svg'
          alt='RetroFix home'
          {...restProps}
        />
      </StyledNextLink>
    </LogoWrapper>
  )
}
