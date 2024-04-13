'use client'
import { SemanticHeader } from '@/components/shared/SemanticHeader'
import { Header } from '@/components/shared/header'
import { LinkButton } from '@/components/shared/link-button'
import { Navbar } from '@/components/shared/navbar'
import SiteLogo from '@/components/shared/site-logo'
import { SIGN_IN } from '@/constants/routes'

export default function Home() {
  return (
    <>
      <SemanticHeader>
        <Header hasBorder>
          <Navbar>
            <SiteLogo />
            <LinkButton href={SIGN_IN}>Sign In</LinkButton>
          </Navbar>
          {/* <HeaderFeature /> */}
        </Header>
      </SemanticHeader>

      {/* <MainContainer>
        <StoryCards />
        <FaqSection />
      </MainContainer>
      <Footer footerContent={footerHomeContent} increasedPadding /> */}
    </>
  )
}
