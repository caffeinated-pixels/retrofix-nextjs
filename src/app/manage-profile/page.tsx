'use client'

import { updateProfile } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

import { ProfileList } from '@/components/profile/ProfileList'
import { MainContainer, Title } from '@/components/profile/styled'
import { PageContainer } from '@/components/shared/containers/PageContainer'
import { Navbar } from '@/components/shared/navbar'
import { SemanticHeader } from '@/components/shared/SemanticHeader'
import { SiteLogo } from '@/components/shared/site-logo'
import { PROFILE } from '@/constants/routes'
import { useAuth } from '@/context/AuthContext'

export default function ManageProfile() {
  const router = useRouter()
  const user = useAuth()

  const handleClick = useCallback(
    async (id: number) => {
      if (!user) return

      try {
        await updateProfile(user, {
          photoURL: `/images/users/${id}.png`,
        })
        router.push(PROFILE)
      } catch (error) {
        // TODO: handle error
        console.warn(error)
      }
    },
    [user, router]
  )

  return (
    <PageContainer>
      <SemanticHeader>
        <Navbar>
          <SiteLogo />
        </Navbar>
      </SemanticHeader>

      <MainContainer>
        <Title>Choose an avatar</Title>
        <ProfileList handleClick={handleClick} />
      </MainContainer>
    </PageContainer>
  )
}
