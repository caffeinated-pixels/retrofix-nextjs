import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { CHILDREN, PROFILE } from '@/constants/routes'
import { useAuth } from '@/context/AuthContext'
import { useSignOut } from '@/hooks/useSignOut'

import {
  Avatar,
  AvatarWrapper,
  CalloutIcon,
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
        <CalloutIcon
          className='fas fa-caret-up'
          $isDropDownOpen={isDropDownOpen}
        />
      </AvatarWrapper>

      <DropDownIcon
        className={isDropDownOpen ? 'fas fa-caret-down' : 'fas fa-caret-up'}
      />

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
                <EditIcon className='fas fa-edit' />
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
