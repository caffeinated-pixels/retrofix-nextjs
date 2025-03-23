import styled from 'styled-components'

export const SlideTrackWrapper = styled.div`
  position: relative;
  overflow: hidden;

  &:hover > button > i,
  &:focus-within > button > i {
    display: block;
  }
`

export const GoBackBox = styled.button`
  position: absolute;
  width: 4%;
  top: 0;
  bottom: 0;
  z-index: 10;

  color: inherit;
  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background: rgba(20, 20, 20, 0.5);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  &:hover {
    background: rgba(20, 20, 20, 0.7);
  }

  &:focus-visible {
    outline: auto;
    outline-offset: -1px;
  }
`
export const GoForwardBox = styled(GoBackBox)`
  right: 0;
`

export const ArrowIcon = styled.i`
  font-size: 3rem;

  @media (hover: hover) {
    display: none;
  }
`

export const Track = styled.div<{ $trackOffset: string }>`
  display: flex;
  padding-left: 4%;
  transform: translateX(${({ $trackOffset }) => $trackOffset});
  transition: transform 750ms ease;
`
