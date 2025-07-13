import { useRouter } from 'next/navigation'

import { PROFILE } from '@/constants/routes'
import { useAuth } from '@/context/AuthContext'
import { removeDotFromPhotoUrl } from '@/helpers/removeDotFromPhotoUrl'
import { useSignOut } from '@/hooks/useSignOut'
import { type SortingCategory } from '@/types/mediaContent'

import {
  NavBtn,
  NavLi,
  NavPrimary,
  NavSecondary,
  NavSlider,
  NavSliderBackground,
  NavUserLi,
  NavUserTextBottom,
  NavUserTextTop,
  NavUserTextWrapper,
  UserAvatar,
} from './styled'

type NavSliderPanelProps = {
  isMenuOpen: boolean
  activeCategory: SortingCategory
  setCategory: (category: SortingCategory) => void
}

export const NavSliderPanel = ({
  isMenuOpen,
  activeCategory,
  setCategory,
}: NavSliderPanelProps) => {
  const user = useAuth()
  const router = useRouter()
  const handleSignOut = useSignOut()

  return (
    <>
      <NavSliderBackground $isMenuOpen={isMenuOpen}></NavSliderBackground>
      <NavSlider $isMenuOpen={isMenuOpen}>
        <NavPrimary>
          <NavUserLi>
            <NavBtn onClick={() => router.push(PROFILE)}>
              <UserAvatar
                src={
                  user?.photoURL
                    ? removeDotFromPhotoUrl(user.photoURL)
                    : '/images/users/2.png'
                }
              />
              <NavUserTextWrapper>
                <NavUserTextTop>
                  {user?.displayName || 'nobody!'}
                </NavUserTextTop>
                <NavUserTextBottom>Switch Profiles</NavUserTextBottom>
              </NavUserTextWrapper>
            </NavBtn>
          </NavUserLi>
          <NavLi $noLeftPadding>
            <NavBtn onClick={handleSignOut}>Sign out of RetroFix</NavBtn>
          </NavLi>
        </NavPrimary>
        <NavSecondary>
          <NavLi $isActive={activeCategory === 'home'}>
            <NavBtn onClick={() => setCategory('home')}>Home</NavBtn>
          </NavLi>
          <NavLi $isActive={activeCategory === 'films'}>
            <NavBtn onClick={() => setCategory('films')}>Films</NavBtn>
          </NavLi>
          <NavLi $isActive={activeCategory === 'series'}>
            <NavBtn onClick={() => setCategory('series')}>Series</NavBtn>
          </NavLi>
        </NavSecondary>
      </NavSlider>
    </>
  )
}
