import { useRouter } from 'next/navigation'

import { ContentSlideImage } from '@/components/browse/content-slide/styled'
import { GET_THE_APP } from '@/constants/routes'
import { MediaItem } from '@/types/mediaContent'

import { Container, LayoutContainer, ResultsGallery } from './styled'

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
        <ContentSlideImage
          tabIndex={0}
          src={imgUrl}
          alt={show.title}
          onClick={() => router.push(`${GET_THE_APP}/${show.id}`)}
          fill
          sizes='(min-width: 768px) 33vw, 50vw'
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
