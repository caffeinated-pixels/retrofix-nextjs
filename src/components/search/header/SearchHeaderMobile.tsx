import { useRouter } from 'next/navigation'
import { useState } from 'react'

import {
  BurgerButton,
  BurgerButtonIcon,
  Container,
  LogoWrapperMobile,
  Navbar,
  SearchForm,
  SearchInput,
} from '@/components/browse/Header/styled'
import { NavSliderPanel } from '@/components/browse/nav-slider-panel/NavSliderPanel'
import { SemanticHeader } from '@/components/shared/SemanticHeader'
import { SiteLogo } from '@/components/shared/site-logo'
import { BROWSE } from '@/constants/routes'
import { useBrowseContext } from '@/context/BrowseContext'

type SearchHeaderMobileProps = {
  searchInput: string
  handleSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchHeaderMobile = ({
  searchInput,
  handleSearchInput,
}: SearchHeaderMobileProps) => {
  const { activeCategory, setCategory } = useBrowseContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  const handleCategory = (category: string) => {
    setCategory(category)
    router.push(BROWSE)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <SemanticHeader>
      <Container>
        <Navbar>
          <BurgerButton aria-label='Main menu' onClick={toggleMenu}>
            <BurgerButtonIcon src='./images/icons/hamburger.gif' />
          </BurgerButton>

          <LogoWrapperMobile>
            <SiteLogo isBrowsePage />
          </LogoWrapperMobile>

          <SearchForm onSubmit={handleSubmit}>
            <SearchInput
              autoFocus
              placeholder='Search'
              value={searchInput}
              onChange={handleSearchInput}
            />
          </SearchForm>
          <NavSliderPanel
            isMenuOpen={isMenuOpen}
            activeCategory={activeCategory}
            setCategory={handleCategory}
          />
        </Navbar>
      </Container>
    </SemanticHeader>
  )
}
