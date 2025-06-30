import Image from 'next/image'
import styled from 'styled-components'

export const StoryCardsContainer = styled.div``

export const StoryCard = styled.section`
  border-bottom: 8px solid #222;
`

type ContentWrapperProps = {
  direction: string
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
  margin: 0 auto;
  padding: 50px 5%;
  box-sizing: content-box;

  @media (min-width: 550px) {
    padding: 70px 45px;
  }

  @media (min-width: 950px) {
    display: flex;
    flex-direction: ${({ direction }) => direction};
    align-items: center;
    max-width: 1100px;
  }
`

export const TextWrapper = styled.div<ContentWrapperProps>`
  text-align: center;
  padding: 15px 0;

  @media (min-width: 950px) {
    width: 50vw;
    text-align: left;
    padding: ${({ direction }) =>
      direction === 'row' ? '0 3rem 0 0' : '0 0 0 3rem'};
  }
`

export const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.1;

  @media (min-width: 550px) {
    font-size: 2.5rem;
  }

  @media (min-width: 950px) {
    font-size: 3.125rem;
  }
`

export const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  max-width: 640px;
  margin: 1rem auto;

  @media (min-width: 550px) {
    font-size: 1.25rem;
  }

  @media (min-width: 950px) {
    font-size: 1.625rem;
  }
`

type ImageWrapperProps = {
  $negativeMargin: string
}

// some images need a negative margin-top to reduce white space
export const ImageWrapper = styled.div<ImageWrapperProps>`
  margin: ${({ $negativeMargin }) => $negativeMargin};
  position: relative;
  aspect-ratio: 4/3;
  z-index: -1;

  @media (min-width: 950px) {
    width: 48%;
    margin: 0;
  }
`

export const StoryImage = styled(Image)`
  margin: 0 auto;
`
