'use client'

import {
  Avatar,
  Name,
  ListItem,
  NavLink,
  Title,
  MainContainer,
  ChooseAvatar,
  ProfileListContainer,
} from '@/components/profile/styled'
import { PageContainer } from '@/components/shared/containers/PageContainer'
import { Navbar } from '@/components/shared/navbar'
import { SemanticHeader } from '@/components/shared/SemanticHeader'
import { SiteLogo } from '@/components/shared/site-logo'
import { BROWSE, CHILDREN, MANAGE_PROFILE } from '@/constants/routes'
import { useAuth } from '@/context/AuthContext'

export default function Profile() {
  const user = useAuth()

  return (
    <PageContainer>
      <SemanticHeader>
        <Navbar>
          <SiteLogo />
        </Navbar>
      </SemanticHeader>

      <MainContainer>
        <Title>Who&apos;s watching?</Title>
        <ProfileListContainer>
          <ListItem>
            <NavLink href={BROWSE}>
              <Avatar $imgUrl={user?.photoURL ?? ''} />
              <Name>{user?.displayName}</Name>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink href={CHILDREN}>
              <Avatar $imgUrl='./images/users/kids.jpg' />
              <Name>Children</Name>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink href={MANAGE_PROFILE}>
              <ChooseAvatar $imgUrl='./images/users/retrofix.svg' />
              <Name>Choose avatar</Name>
            </NavLink>
          </ListItem>
        </ProfileListContainer>
      </MainContainer>
    </PageContainer>
  )
}
