import { PropsWithChildren } from 'react'
import { HeaderContainer, ImageGradient } from './styled'

type HeaderProps = {
  hasBorder?: boolean
  noBgOnMobile?: boolean
}

export const Header = ({
  hasBorder,
  noBgOnMobile,
  children,
}: PropsWithChildren<HeaderProps>) => {
  return (
    <HeaderContainer $hasBorder={hasBorder} noBgOnMobile={noBgOnMobile}>
      <ImageGradient>{children}</ImageGradient>
    </HeaderContainer>
  )
}
