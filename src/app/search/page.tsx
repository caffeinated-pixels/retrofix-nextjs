'use client'
import Fuse from 'fuse.js'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { SearchHeaderDesktop } from '@/components/search/search-results-layout/search-header-desktop/SearchHeaderDesktop'
import { SearchResultsLayout } from '@/components/search/search-results-layout/SearchResultsLayout'
import { BrowsePageContainer } from '@/components/shared/containers/BrowsePageContainer'
import { Footer } from '@/components/shared/footer'
import { BROWSE } from '@/constants/routes'
import { useWindowWidthContext } from '@/context/WindowWidthContext'
import { footerHomeContent } from '@/fixtures/footer-content'
import { mediaCollection } from '@/fixtures/mediaCollection'
import { MediaItem } from '@/types/mediaContent'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [searchInput, setSearchInput] = useState(searchParams.get('q') || '')
  const [searchResults, setSearchResults] =
    useState<MediaItem[]>(mediaCollection)

  const router = useRouter()
  const width = useWindowWidthContext()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)

    if (e.target.value.trim() === '') {
      // return to browse page if searchInput becomes empty
      router.push(BROWSE)
    } else {
      // sync URL param and searchInput
      router.push(`?q=${e.target.value}`)
    }
  }

  useEffect(() => {
    const fuse = new Fuse(mediaCollection, {
      keys: ['description', 'title', 'cast'],
    })

    const fuseResults = fuse.search(searchInput).map((result) => result.item)
    setSearchResults(fuseResults)
  }, [searchInput])

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
            handleSubmit={handleSubmit}
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
