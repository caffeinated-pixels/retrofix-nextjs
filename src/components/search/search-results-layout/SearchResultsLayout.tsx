import { ContentSlide } from '@/components/browse/content-slide/ContentSlide'
import { MediaItem } from '@/types/mediaContent'

import { LayoutContainer, ResultsGallery } from './styled'

type SearchResultsLayoutProps = {
  searchResults: MediaItem[]
}

export const SearchResultsLayout = ({
  searchResults,
}: SearchResultsLayoutProps) => {
  const results = searchResults.map((show, i) => {
    return <ContentSlide key={`result-${i}`} item={show} />
  })

  return (
    <LayoutContainer>
      <ResultsGallery>{results}</ResultsGallery>
    </LayoutContainer>
  )
}
