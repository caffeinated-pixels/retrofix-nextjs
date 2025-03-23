import { useBrowseContext } from '@/context/BrowseContext'
import { useMemo } from 'react'
import { GenreContainer, GenreContainersWrapper, GenreTitle } from './styled'
import { MainContainer } from '@/components/shared/containers/MainContainer'
import { SlideTrack } from '../slide-track/SlideTrack'

export const StreamingContentDesktop = () => {
  const { sortedContent } = useBrowseContext()

  const genreContainers = useMemo(() => {
    return sortedContent.map(({ genre, content }) => (
      <GenreContainer key={genre}>
        <GenreTitle>{genre}</GenreTitle>
        <SlideTrack content={content} />
      </GenreContainer>
    ))
  }, [sortedContent])
  // useMemo will only rerender the genreContainers when sortedContent changes

  return (
    <MainContainer>
      <GenreContainersWrapper>{genreContainers}</GenreContainersWrapper>
    </MainContainer>
  )
}
