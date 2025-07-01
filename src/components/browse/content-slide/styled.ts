import Image from 'next/image'
import styled from 'styled-components'

import { colors } from '@/constants/theme'

export const ContentSlideContainer = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  min-width: min(24%, 300px);
  background-color: ${colors.textDarkGrey};

  cursor: pointer;

  transition: all 250ms;
`
export const ContentSlideImage = styled(Image)`
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
