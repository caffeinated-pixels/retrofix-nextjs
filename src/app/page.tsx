'use client'
import { SemanticHeader } from '@/components/shared/SemanticHeader'
import { Header } from '@/components/shared/header'
import { Navbar } from '@/components/shared/navbar'
import SiteLogo from '@/components/shared/site-logo'

export default function Home() {
  return (
    <>
      <SemanticHeader>
        <Header hasBorder>
          <Navbar>
            <SiteLogo />

            {/* <LinkButton to={SIGN_IN}>Sign In</LinkButton> */}
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
