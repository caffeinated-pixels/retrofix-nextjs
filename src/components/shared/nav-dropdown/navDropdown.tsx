import {
  faCaretDown,
  faCaretUp,
  faEdit,
} from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { CHILDREN, PROFILE } from '@/constants/routes'
import { useAuth } from '@/context/AuthContext'
import { useSignOut } from '@/hooks/useSignOut'

import {
  Avatar,
  AvatarWrapper,
  CalloutIcon,
  CalloutIconWrapper,
  DropDownIcon,
  DropDownWrapper,
  EditIcon,
  SubMenuBtn,
  SubMenuContainer,
  SubMenuItem,
  SubMenuList,
  TextSpan,
} from './styled'

export const NavDropDown = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const user = useAuth()
  const router = useRouter()

  const handleSignOut = useSignOut()

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsDropDownOpen((prevState) => !prevState)
    }
  }

  return (
    <DropDownWrapper
      onMouseEnter={() => setIsDropDownOpen(true)}
      onMouseLeave={() => setIsDropDownOpen(false)}
      onClick={() => setIsDropDownOpen((prevState) => !prevState)}
    >
      <AvatarWrapper tabIndex={0} onKeyDown={handleKeyDown}>
        <Avatar src={user?.photoURL ?? './images/users/1.png'} alt='' />
        <CalloutIconWrapper $isDropDownOpen={isDropDownOpen}>
          <CalloutIcon icon={faCaretUp} />
        </CalloutIconWrapper>
      </AvatarWrapper>

      <DropDownIcon icon={isDropDownOpen ? faCaretDown : faCaretUp} />

      {isDropDownOpen && (
        <SubMenuContainer>
          <SubMenuList>
            <SubMenuItem>
              <SubMenuBtn
                onClick={() => {
                  router.push(CHILDREN)
                }}
              >
                <Avatar src='./images/users/kids.jpg' />
                <TextSpan>Children</TextSpan>
              </SubMenuBtn>
            </SubMenuItem>
            <SubMenuItem>
              <SubMenuBtn
                onClick={() => {
                  router.push(PROFILE)
                }}
              >
                <EditIcon icon={faEdit} />
                <TextSpan>Manage Profiles</TextSpan>
              </SubMenuBtn>
            </SubMenuItem>
          </SubMenuList>

          <SubMenuList>
            <SubMenuItem>
              <SubMenuBtn onClick={handleSignOut}>
                <TextSpan>Sign out of RetroFix</TextSpan>
              </SubMenuBtn>
            </SubMenuItem>
          </SubMenuList>
        </SubMenuContainer>
      )}
    </DropDownWrapper>
  )
}
