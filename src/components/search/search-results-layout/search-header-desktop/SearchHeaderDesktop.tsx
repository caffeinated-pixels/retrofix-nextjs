import { useRouter } from 'next/navigation'

import { BrowseSearchHeaderDesktop } from '@/components/browse/Header/BrowseSearchHeaderDesktop'
import { BROWSE } from '@/constants/routes'

type SearchHeaderDesktopProps = {
  searchInput: string
  handleSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchHeaderDesktop = ({
  searchInput,
  handleSearchInput,
}: SearchHeaderDesktopProps) => {
  const router = useRouter()

  const toggleSearch = () => {
    router.push(BROWSE)
  }

  return (
    <BrowseSearchHeaderDesktop
      isBrowsePage={false}
      isSearchOpen={true}
      toggleSearch={toggleSearch}
      handleSearchInput={handleSearchInput}
      searchInput={searchInput}
    />
  )
}
