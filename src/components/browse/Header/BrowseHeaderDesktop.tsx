import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { NavDropDown } from '@/components/shared/nav-dropdown/navDropdown'
import { SiteLogo } from '@/components/shared/site-logo'
import { useBrowseContext } from '@/context/BrowseContext'

import { SemanticHeader } from '../../shared/SemanticHeader'
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

export const BrowseHeaderDesktop = () => {
  const searchParams = useSearchParams()

  const [isSearchOpen, setIsSearchOpen] = useState(
    searchParams.get('sp') ? true : false
  )
  const { activeCategory, setCategory } = useBrowseContext()

  const { handleSubmit, handleSearchInput } = useBrowseSearch()

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
                    ref={ref}
                    $isSearchOpen={isSearchOpen}
                    placeholder='Search'
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
        <Billboard />
      </Container>
    </SemanticHeader>
  )
}
