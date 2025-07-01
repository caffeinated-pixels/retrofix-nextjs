import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import styled from 'styled-components'

import { colors } from '@/constants/theme'

export const Background = styled.div`
  background-color: hsla(0, 0%, 0%, 0.7);

  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`
export const ModalContainer = styled.div`
  background-color: ${colors.bgBrowseDarkGrey};
  background-color: #181818;
  width: min(98%, 1100px);
  border-radius: 6px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.75);

  animation: open 0.5s ease-in;

  @keyframes open {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
`

export const Header = styled.div`
  position: relative;
  isolation: isolate;
  height: 50vh;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  display: flex;
  justify-content: space-between;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #181818, transparent 50%);
  }
`

export const HeaderImage = styled(Image)`
  z-index: -1;
  object-fit: cover;
  object-position: 50% 0;
`

export const TitleBox = styled.div`
  align-self: flex-end;
  z-index: 10;
  width: 70%;
  margin-left: 3em;
  margin-bottom: 3em;
`

export const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 0.5em;
`

export const ButtonWrapper = styled.div``

export const RoundButton = styled.button`
  width: 32px;
  height: 32px;
  padding: 0;

  font-size: 0.75rem;

  cursor: pointer;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.7);
  background-color: rgba(42, 42, 42, 0.6);
  color: #fff;
  margin-right: 0.5em;

  &:hover {
    border-color: #fff;
  }

  &:focus {
    outline: 2px solid white;
    outline-offset: 2px;
  }
`

export const RoundButtonIcon = styled(FontAwesomeIcon)``

export const CloseButton = styled.button`
  align-self: flex-start;
  z-index: 10;
  width: 36px;
  height: 36px;

  border: 0;
  border-radius: 50%;

  background-color: #181818;
  color: #fff;

  cursor: pointer;
  margin-top: 1.25em;
  margin-right: 1.25em;
  line-height: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const CloseIcon = styled(FontAwesomeIcon)`
  font-size: 1.25rem;
`

export const DetailsContainer = styled.div`
  display: flex;
  gap: 2em;
  padding: 0 3em;
`

export const LeftDetailsBox = styled.div`
  margin-bottom: 3em;
  width: 70%;
`

export const MetaDataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`

export const MatchScore = styled.div`
  color: #46d369;
  font-weight: 700;
`

export const Metadata = styled.div``

export const MaturityRating = styled.div`
  border: solid 1px rgba(255, 255, 255, 0.4);
  padding: 0.1em 0.4em;
  line-height: 1;
`
export const Resolution = styled(MaturityRating)`
  border-radius: 3px;
  font-size: 0.65rem;
`

export const Synopsis = styled.p`
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: 1em;
`

export const RightDetailsBox = styled.div`
  width: 30%;
  line-height: 22px;
`

type PeopleProps = {
  $firstWord?: string
}

export const People = styled.div<PeopleProps>`
  font-size: 0.875rem;
  margin-bottom: 1em;
  margin-right: 0.5em;

  &::before {
    content: '${({ $firstWord }) => $firstWord}';
    color: #777;
  }
`
