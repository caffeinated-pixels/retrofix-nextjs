import styled from 'styled-components'

import { breakpoints } from '@/constants/theme'

export const GenreContainersWrapper = styled.div`
  padding-top: 60px;

  @media (min-width: ${breakpoints.mobile}px) {
    position: relative;
    margin-top: -17%;
  }
`

export const GenreContainer = styled.div`
  padding-left: 20px;

  @media (min-width: ${breakpoints.mobile}px) {
    margin-bottom: 3vw;
    padding-left: unset;
  }
`

export const GenreTitle = styled.h2`
  color: #999;
  font-size: 1.2rem;
  margin-bottom: 0.5em;

  @media (min-width: ${breakpoints.mobile}px) {
    font-size: 1.4vw;
    margin-left: 4%;
  }
`

export const GenreRow = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 40px;
`

export const ContentBox = styled.div`
  min-width: 160px;
  margin-right: 2px;
  cursor: pointer;
`
export const ContentImage = styled.img`
  height: 90px;
  object-fit: cover;
`
