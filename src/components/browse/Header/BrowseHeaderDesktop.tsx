import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { useBrowseSearch } from '../hooks/useBrowseSearch'
import { BrowseSearchHeaderDesktop } from './BrowseSearchHeaderDesktop'

export const BrowseHeaderDesktop = () => {
  const searchParams = useSearchParams()

  const [isSearchOpen, setIsSearchOpen] = useState(
    searchParams.has('sp') ? true : false
  )

  const { handleSearchInput } = useBrowseSearch()

  const ref = useRef<HTMLInputElement>(null)

  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState)
  }

  useEffect(() => {
    if (isSearchOpen) {
      ref.current?.focus()
    }
  }, [isSearchOpen])

  return (
    <BrowseSearchHeaderDesktop
      isBrowsePage={true}
      isSearchOpen={isSearchOpen}
      toggleSearch={toggleSearch}
      handleSearchInput={handleSearchInput}
      searchInput=''
      ref={ref}
    />
  )
}
