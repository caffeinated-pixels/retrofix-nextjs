import Link from 'next/link'
import styled, { css } from 'styled-components'

import { colors } from '@/constants/theme'

export const PageContainer = styled.div`
  position: relative;
  height: 100vh;
`

export const Header = styled.header`
  position: absolute;
  top: 0;
  width: 100vw;

  height: 10%;

  background-image: linear-gradient(
    to bottom,
    #000 0,
    #000 25%,
    transparent 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
`

export const LogoWrapper = styled.div`
  width: 120px;
`

type ShowImageProps = {
  $imgUrl: string
}

export const ShowImage = styled.div<ShowImageProps>`
  height: 80vh;
  background-image: url(${({ $imgUrl }) => $imgUrl});
  background-position: 50% 0;
  background-size: cover;
`

export const DetailsContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
`

export const MetadataBox = styled.div`
  background-image: linear-gradient(to bottom, transparent, #000);
`

export const ShowTitle = styled.h1`
  text-align: center;
  margin-bottom: 0.33em;
`

export const ShowInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3em;
  padding-bottom: 2em;
  font-size: 0.75rem;
  color: #999;
`

export const Info = styled.div``

export const MaturityRating = styled.div`
  border: 1px solid #4c4c44;
  padding: 0.1em 0.2em 0;
`

export const AppLaunchBox = styled.div`
  background-color: #000;
`

export const WatchRetroFix = styled.p`
  text-align: center;
  font-size: 4vh;
  font-weight: 700;
  margin: 0 1em;
`

export const buttonBaseCss = css`
  display: block;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  color: inherit;
`

export const AppLinkButton = styled(Link)`
  ${buttonBaseCss}
  background: ${colors.netflixRed};
  border-radius: 0.1em;
  margin: 1em auto;
  padding: 1em 0;
  width: min(80%, 400px);
`

export const ReturnLinkButton = styled(Link)`
  ${buttonBaseCss}
  width: 100vw;
  background: #141414;
  padding: 1.2em 0;
  border-top: 1px solid #1c1c1c;
  font-size: 2.5vh;
  line-height: 2;
`

export const ReturnIcon = styled.i`
  margin-right: 0.5em;
`
