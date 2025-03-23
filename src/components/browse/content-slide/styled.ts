import styled from 'styled-components'

export const ContentSlideContainer = styled.div`
  min-width: min(24%, 300px);
  padding: 0 0.2vw;

  cursor: pointer;

  transition: all 250ms;
`
export const ContentSlideImage = styled.img`
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
