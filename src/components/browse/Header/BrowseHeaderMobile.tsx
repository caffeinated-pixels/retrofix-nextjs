import { useEffect, useState } from 'react'

import { SemanticHeader } from '@/components/shared/SemanticHeader'
import { SiteLogo } from '@/components/shared/site-logo'
import { useBrowseContext } from '@/context/BrowseContext'

import { useBrowseSearch } from '../hooks/useBrowseSearch'
import { NavSliderPanel } from '../nav-slider-panel/NavSliderPanel'
import {
  BurgerButton,
  BurgerButtonIcon,
  Container,
  LogoWrapperMobile,
  Navbar,
  SearchForm,
  SearchInput,
} from './styled'

export const BrowseHeaderMobile = () => {
  const { activeCategory, setCategory } = useBrowseContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { handleSubmit, handleSearchInput } = useBrowseSearch()

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  useEffect(() => toggleMenu, [activeCategory])

  return (
    <SemanticHeader>
      <Container>
        <Navbar>
          <BurgerButton aria-label='Main menu' onClick={toggleMenu}>
            <BurgerButtonIcon src='../images/icons/hamburger.gif' />
          </BurgerButton>

          <LogoWrapperMobile>
            <SiteLogo isBrowsePage />
          </LogoWrapperMobile>

          <SearchForm onSubmit={handleSubmit}>
            <SearchInput placeholder='Search' onChange={handleSearchInput} />
          </SearchForm>
          <NavSliderPanel
            isMenuOpen={isMenuOpen}
            activeCategory={activeCategory}
            setCategory={setCategory}
          />
        </Navbar>
      </Container>
    </SemanticHeader>
  )
}
