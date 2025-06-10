import { useRouter } from 'next/navigation'
import { useMemo } from 'react'

import { MainContainer } from '@/components/shared/containers/MainContainer'
import { GET_THE_APP } from '@/constants/routes'
import { useBrowseContext } from '@/context/BrowseContext'

import {
  ContentBox,
  ContentImage,
  GenreContainer,
  GenreContainersWrapper,
  GenreRow,
  GenreTitle,
} from './styled'

export const StreamingContentMobile = () => {
  const { sortedContent } = useBrowseContext()
  const router = useRouter()

  const genreContainers = useMemo(() => {
    return sortedContent.map(({ genre, content }) => (
      <GenreContainer key={genre}>
        <GenreTitle>{genre}</GenreTitle>
        <GenreRow>
          {content.map((item) => (
            <ContentBox
              key={item.title}
              onClick={() => router.push(`${GET_THE_APP}/${item.id}`)}
            >
              <ContentImage
                src={`/images/${item.category}/${item.genre}/${item.slug}/thumb.jpg`}
                alt={item.title}
              />
            </ContentBox>
          ))}
        </GenreRow>
      </GenreContainer>
    ))
  }, [sortedContent, router])
  // useMemo will only rerender the genreContainers when sortedContent changes

  return (
    <MainContainer>
      <GenreContainersWrapper>{genreContainers}</GenreContainersWrapper>
    </MainContainer>
  )
}
