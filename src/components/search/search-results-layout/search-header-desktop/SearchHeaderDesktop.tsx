import { useRouter } from 'next/navigation'

import {
  BellIcon,
  CloseIcon,
  CloseSearchButton,
  Container,
  Navbar,
  NavPrimary,
  NavPrimaryBtn,
  NavPrimaryItem,
  NavSecondary,
  NavSecondaryItem,
  SearchForm,
  SearchIcon,
  SearchInputDesktop,
  SearchWrapper,
} from '@/components/browse/Header/styled'
import { NavDropDown } from '@/components/shared/nav-dropdown/navDropdown'
import { SemanticHeader } from '@/components/shared/SemanticHeader'
import { SiteLogo } from '@/components/shared/site-logo'
import { BROWSE } from '@/constants/routes'
import { useBrowseContext } from '@/context/BrowseContext'

type SearchHeaderDesktopProps = {
  searchInput: string
  handleSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export const SearchHeaderDesktop = ({
  searchInput,
  handleSearchInput,
  handleSubmit,
}: SearchHeaderDesktopProps) => {
  const { activeCategory, setCategory } = useBrowseContext()
  const router = useRouter()

  const handleChangeCategory = (category: string) => {
    setCategory(category)
    router.push(BROWSE)
  }

  // TODO: can we use the same component for Browse and Search?
  return (
    <SemanticHeader>
      <Container>
        <Navbar $padding='0 4vw'>
          <SiteLogo isBrowsePage />

          <NavPrimary>
            <NavPrimaryItem>
              <NavPrimaryBtn
                $isActive={activeCategory === 'home'}
                onClick={() => handleChangeCategory('home')}
              >
                Home
              </NavPrimaryBtn>
            </NavPrimaryItem>

            <NavPrimaryItem>
              <NavPrimaryBtn
                $isActive={activeCategory === 'films'}
                onClick={() => handleChangeCategory('films')}
              >
                Films
              </NavPrimaryBtn>
            </NavPrimaryItem>

            <NavPrimaryItem>
              <NavPrimaryBtn
                $isActive={activeCategory === 'series'}
                onClick={() => handleChangeCategory('series')}
              >
                Series
              </NavPrimaryBtn>
            </NavPrimaryItem>
          </NavPrimary>

          <NavSecondary>
            <NavSecondaryItem>
              <SearchForm onSubmit={handleSubmit}>
                <SearchWrapper $isSearchOpen={true}>
                  <SearchIcon className='fas fa-search' />
                  <SearchInputDesktop
                    autoFocus
                    $isSearchOpen={true}
                    placeholder='Search'
                    value={searchInput}
                    onChange={handleSearchInput}
                  />
                  <CloseSearchButton
                    aria-label='close search'
                    onClick={() => router.push(BROWSE)}
                  >
                    <CloseIcon className='fas fa-times' />
                  </CloseSearchButton>
                </SearchWrapper>
              </SearchForm>
            </NavSecondaryItem>

            <NavSecondaryItem>
              <BellIcon className='fas fa-bell' />
            </NavSecondaryItem>

            <NavSecondaryItem>
              <NavDropDown />
            </NavSecondaryItem>
          </NavSecondary>
        </Navbar>
      </Container>
    </SemanticHeader>
  )
}
