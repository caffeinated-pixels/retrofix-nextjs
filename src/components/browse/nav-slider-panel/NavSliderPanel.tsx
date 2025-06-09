import { useRouter } from 'next/navigation'

import { PROFILE } from '@/constants/routes'
import { useAuth } from '@/context/AuthContext'

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
  activeCategory: string
  setCategory: (category: string) => void
}

export const NavSliderPanel = ({
  isMenuOpen,
  activeCategory,
  setCategory,
}: NavSliderPanelProps) => {
  const user = useAuth()
  const signOut = () => console.log(' turbo sign out') // FIXME: add sign out
  const router = useRouter()

  return (
    <>
      <NavSliderBackground $isMenuOpen={isMenuOpen}></NavSliderBackground>
      <NavSlider $isMenuOpen={isMenuOpen}>
        <NavPrimary>
          <NavUserLi>
            <NavBtn onClick={() => router.push(PROFILE)}>
              <UserAvatar src={user?.photoURL || './images/users/2.png'} />
              <NavUserTextWrapper>
                <NavUserTextTop>
                  {user?.displayName || 'nobody!'}
                </NavUserTextTop>
                <NavUserTextBottom>Switch Profiles</NavUserTextBottom>
              </NavUserTextWrapper>
            </NavBtn>
          </NavUserLi>
          <NavLi $noLeftPadding>
            <NavBtn onClick={signOut}>Sign out of RetroFix</NavBtn>
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
