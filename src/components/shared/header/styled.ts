import { cardBorderBottom } from '@/constants/theme'
import styled from 'styled-components'

type HeaderProps = {
  $hasBorder?: boolean
  noBgOnMobile?: boolean
}

export const HeaderContainer = styled.div<HeaderProps>`
  width: 100%;
  border-bottom: ${({ $hasBorder }) => ($hasBorder ? cardBorderBottom : '')};
  background-image: ${({ noBgOnMobile }) =>
    noBgOnMobile ? `url('')` : `url('../images/misc/videodrome.jpg')`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 740px) {
    background-image: url('../images/misc/videodrome.jpg');
  }
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
