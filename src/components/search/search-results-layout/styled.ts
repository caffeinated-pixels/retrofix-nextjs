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
  position: relative;
  aspect-ratio: 16 / 9;

  cursor: pointer;

  transition: all 250ms;
`
