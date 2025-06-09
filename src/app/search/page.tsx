'use client'
import Fuse from 'fuse.js'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { SearchHeaderDesktop } from '@/components/search/search-results-layout/search-header-desktop/SearchHeaderDesktop'
import { SearchResultsLayout } from '@/components/search/search-results-layout/SearchResultsLayout'
import { BrowsePageContainer } from '@/components/shared/containers/BrowsePageContainer'
import { Footer } from '@/components/shared/footer'
import { BROWSE } from '@/constants/routes'
import { footerHomeContent } from '@/fixtures/footer-content'
import { mediaCollection } from '@/fixtures/mediaCollection'
import { sanitizeSearchInput } from '@/helpers/sanitizeSearchInput'
import { useWindowWidth } from '@/hooks/useWindowWidth'
import { MediaItem } from '@/types/mediaContent'

const fuse = new Fuse(mediaCollection, {
  keys: ['description', 'title', 'cast'],
})

export default function SearchPage() {
  const [searchInput, setSearchInput] = useState(
    decodeURIComponent(useSearchParams().get('q') || '')
  )
  const [searchResults, setSearchResults] =
    useState<MediaItem[]>(mediaCollection)

  const router = useRouter()
  const width = useWindowWidth()

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawInput = e.target.value

    setSearchInput(rawInput)

    if (rawInput.trim() === '') {
      // return to browse page if searchInput becomes empty
      router.push(`${BROWSE}?sp=true`)
    } else {
      // Sanitize the input
      const sanitizedInput = sanitizeSearchInput(rawInput)
      const fuseResults = fuse
        .search(sanitizedInput)
        .map((result) => result.item)
      setSearchResults(fuseResults)
      // sync URL param and searchInput; Encode for URL safety
      const encodedQuery = encodeURIComponent(sanitizedInput)
      router.push(`?q=${encodedQuery}`)
    }
  }

  return (
    <BrowsePageContainer>
      {width && width < 768 ? (
        <>
          <h1>Mobile search page goes here</h1>
          {/* <SearchHeaderMobile
            handleSubmit={handleSubmit}
            searchInput={searchInput}
            handleSearchInput={handleSearchInput}
          />
          <SearchResultsLayoutMobile searchResults={searchResults} /> */}
        </>
      ) : (
        <>
          <SearchHeaderDesktop
            searchInput={searchInput}
            handleSearchInput={handleSearchInput}
          />
          <SearchResultsLayout searchResults={searchResults} />
        </>
      )}

      <Footer footerContent={footerHomeContent} increasedPadding />
    </BrowsePageContainer>
  )
}
