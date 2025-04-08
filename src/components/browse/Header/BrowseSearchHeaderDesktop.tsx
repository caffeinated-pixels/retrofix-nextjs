import { forwardRef } from 'react'

import { NavDropDown } from '@/components/shared/nav-dropdown/navDropdown'
import { SemanticHeader } from '@/components/shared/SemanticHeader'
import { SiteLogo } from '@/components/shared/site-logo'
import { useBrowseContext } from '@/context/BrowseContext'

import { Billboard } from '../Billboard/Billboard'
import { useBrowseSearch } from '../hooks/useBrowseSearch'
import {
  BellIcon,
  CloseIcon,
  CloseSearchButton,
  Container,
  IconButton,
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
} from './styled'

type BrowseSearchHeaderDesktopProps = {
  isBrowsePage: boolean
  isSearchOpen: boolean
  toggleSearch: () => void
  searchInput: string
  handleSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const BrowseSearchHeaderDesktop = forwardRef<
  HTMLInputElement,
  BrowseSearchHeaderDesktopProps
>(
  (
    {
      isBrowsePage,
      isSearchOpen,
      toggleSearch,
      handleSearchInput,
      searchInput,
    },
    ref
  ) => {
    const { handleSubmit } = useBrowseSearch()
    const { activeCategory, setCategory } = useBrowseContext()

    return (
      <SemanticHeader>
        <Container>
          <Navbar $padding='0 4vw'>
            <SiteLogo isBrowsePage />

            <NavPrimary>
              <NavPrimaryItem>
                <NavPrimaryBtn
                  $isActive={activeCategory === 'home'}
                  onClick={() => setCategory('home')}
                >
                  Home
                </NavPrimaryBtn>
              </NavPrimaryItem>

              <NavPrimaryItem>
                <NavPrimaryBtn
                  $isActive={activeCategory === 'films'}
                  onClick={() => setCategory('films')}
                >
                  Films
                </NavPrimaryBtn>
              </NavPrimaryItem>

              <NavPrimaryItem>
                <NavPrimaryBtn
                  $isActive={activeCategory === 'series'}
                  onClick={() => setCategory('series')}
                >
                  Series
                </NavPrimaryBtn>
              </NavPrimaryItem>
            </NavPrimary>

            <NavSecondary>
              <NavSecondaryItem>
                <SearchForm onSubmit={handleSubmit}>
                  <SearchWrapper $isSearchOpen={isSearchOpen}>
                    <IconButton
                      onClick={toggleSearch}
                      aria-label='open search box'
                    >
                      <SearchIcon className='fas fa-search' />
                    </IconButton>

                    <SearchInputDesktop
                      autoFocus
                      ref={ref}
                      $isSearchOpen={isSearchOpen}
                      placeholder='Search'
                      value={searchInput}
                      onChange={handleSearchInput}
                    />

                    {isSearchOpen && (
                      <CloseSearchButton
                        aria-label='close search'
                        onClick={toggleSearch}
                      >
                        <CloseIcon className='fas fa-times' />
                      </CloseSearchButton>
                    )}
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
          {isBrowsePage && <Billboard />}
        </Container>
      </SemanticHeader>
    )
  }
)

BrowseSearchHeaderDesktop.displayName = 'BrowseSearchHeaderDesktop'
