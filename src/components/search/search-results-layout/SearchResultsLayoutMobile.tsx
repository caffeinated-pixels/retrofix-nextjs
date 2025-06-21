import { useRouter } from 'next/navigation'

import { GET_THE_APP } from '@/constants/routes'
import { MediaItem } from '@/types/mediaContent'

import {
  Container,
  ContentImage,
  LayoutContainer,
  ResultsGallery,
} from './styled'

type SearchResultsLayoutProps = {
  searchResults: MediaItem[]
}

export const SearchResultsLayoutMobile = ({
  searchResults,
}: SearchResultsLayoutProps) => {
  const router = useRouter()

  const results = searchResults.map((show, i) => {
    const imgUrl = `/images/${show.category}/${show.genre}/${show.slug}/thumb.jpg`

    return (
      <Container key={`result-${i}`}>
        <ContentImage
          tabIndex={0}
          src={imgUrl}
          alt={show.title}
          onClick={() => router.push(`${GET_THE_APP}/${show.id}`)}
        />
      </Container>
    )
  })

  return (
    <LayoutContainer>
      <ResultsGallery>{results}</ResultsGallery>
    </LayoutContainer>
  )
}
