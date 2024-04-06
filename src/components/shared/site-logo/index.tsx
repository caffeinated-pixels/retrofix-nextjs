import { HOME } from '@/constants/routes'
import { Logo, StyledNextLink } from './styled'
// import { Link as RouterLink } from 'react-router-dom'
// import { HOME } from '../constants/routes'

export default function SiteLogo({ ...restProps }) {
  return (
    <StyledNextLink href={HOME}>
      <Logo src='../images/misc/logo.svg' alt='RetroFix home' {...restProps} />
    </StyledNextLink>
  )
}
