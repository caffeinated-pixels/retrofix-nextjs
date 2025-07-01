import Image from 'next/image'
import styled from 'styled-components'

import { cardBorderBottom } from '@/constants/theme'

type HeaderProps = {
  $hasBorder?: boolean
}

export const HeaderContainer = styled.div<HeaderProps>`
  position: relative;
  width: 100%;
  border-bottom: ${({ $hasBorder }) => ($hasBorder ? cardBorderBottom : '')};
`
export const ImageGradient = styled.div`
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`

type BackgroundImageProps = {
  $noBgOnMobile?: boolean
}

export const BackgroundImage = styled(Image)<BackgroundImageProps>`
  z-index: -1;
  object-fit: cover;
  position: center;

  display: ${({ $noBgOnMobile }) => ($noBgOnMobile ? 'none' : 'block')};

  @media (min-width: 740px) {
    display: block;
  }
`
