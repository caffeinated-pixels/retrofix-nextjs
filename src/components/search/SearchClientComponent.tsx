'use client'
import Fuse from 'fuse.js'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { SearchHeaderDesktop } from '@/components/search/search-results-layout/search-header-desktop/SearchHeaderDesktop'
import { SearchResultsLayout } from '@/components/search/search-results-layout/SearchResultsLayout'
import { BrowsePageContainer } from '@/components/shared/containers/BrowsePageContainer'
import { Footer } from '@/components/shared/footer'
import { BROWSE } from '@/constants/routes'
import { footerHomeContent } from '@/fixtures/footer-content'
import { mediaCollection } from '@/fixtures/mediaCollection'
import { sanitizeSearchInput } from '@/helpers/sanitizeSearchInput'
import { MediaItem } from '@/types/mediaContent'

import { SearchHeaderMobile } from './header/SearchHeaderMobile'

const fuse = new Fuse(mediaCollection, {
  keys: ['description', 'title', 'cast'],
})

type SearchClientComponentProps = {
  isMobileOrTablet: boolean
}

export default function SearchClientComponent({
  isMobileOrTablet,
}: SearchClientComponentProps) {
  const [searchInput, setSearchInput] = useState(
    decodeURIComponent(useSearchParams().get('q') || '')
  )
  const [searchResults, setSearchResults] =
    useState<MediaItem[]>(mediaCollection)

  const router = useRouter()

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
      {isMobileOrTablet ? (
        <>
          <SearchHeaderMobile
            searchInput={searchInput}
            handleSearchInput={handleSearchInput}
          />
          {/* <SearchResultsLayoutMobile searchResults={searchResults} /> */}
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
