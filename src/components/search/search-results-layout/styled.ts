import styled from 'styled-components'

import { breakpoints } from '@/constants/theme'

export const LayoutContainer = styled.div`
  padding: 70px 4vw 0;
`

export const ResultsGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  grid-column-gap: max(3.5px, 0.4vw);
  grid-row-gap: 40px;

  @media (min-width: ${breakpoints.mobile}px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    grid-column-gap: unset;
    grid-row-gap: 48px;
  }
`

export const Container = styled.div`
  cursor: pointer;

  transition: all 250ms;
`
export const ContentImage = styled.img`
  object-fit: cover;

  &:hover,
  &:focus-visible {
    transform: scale(0.98);
    filter: brightness(0.5);
  }

  &:focus-visible {
    outline: auto;
  }
`
