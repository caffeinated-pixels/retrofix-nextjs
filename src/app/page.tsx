'use client'
import HeaderFeature from '@/components/home/header-feature'
import StoryCards from '@/components/home/StoryCards'
import { SemanticHeader } from '@/components/shared/SemanticHeader'
import { MainContainer } from '@/components/shared/containers/MainContainer'
import { Header } from '@/components/shared/header'
import { LinkButton } from '@/components/shared/link-button'
import { Navbar } from '@/components/shared/navbar'
import SiteLogo from '@/components/shared/site-logo'
import { SIGN_IN } from '@/constants/routes'
import { FaqSection } from '@/components/home/faq-section/FaqSection'
import { Footer } from '@/components/shared/footer'
import { footerHomeContent } from '@/fixtures/footer-content'

export default function Home() {
  return (
    <>
      <SemanticHeader>
        <Header hasBorder>
          <Navbar>
            <SiteLogo />
            <LinkButton href={SIGN_IN}>Sign In</LinkButton>
          </Navbar>
          <HeaderFeature />
        </Header>
      </SemanticHeader>

      <MainContainer>
        <StoryCards />
        <FaqSection />
      </MainContainer>
      <Footer footerContent={footerHomeContent} increasedPadding />
    </>
  )
}
