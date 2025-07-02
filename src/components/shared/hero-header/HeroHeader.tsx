import { PropsWithChildren } from 'react'

import { BackgroundImage, HeaderContainer, ImageGradient } from './styled'

type HeaderProps = {
  hasBorder?: boolean
  noBgOnMobile?: boolean
}

export const HeroHeader = ({
  hasBorder,
  noBgOnMobile,
  children,
}: PropsWithChildren<HeaderProps>) => {
  return (
    <HeaderContainer $hasBorder={hasBorder}>
      <BackgroundImage
        src='/images/misc/videodrome.jpg'
        alt=''
        fill
        priority
        $noBgOnMobile={noBgOnMobile}
        sizes='100vw'
      />
      <ImageGradient>{children}</ImageGradient>
    </HeaderContainer>
  )
}
