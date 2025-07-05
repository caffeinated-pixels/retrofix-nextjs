'use client'
import { FaqSection } from '@/components/home/faq-section/FaqSection'
import HeaderFeature from '@/components/home/header-feature'
import { StoryCards } from '@/components/home/story-cards/StoryCards'
import { MainContainer } from '@/components/shared/containers/MainContainer'
import { Footer } from '@/components/shared/footer'
import { HeroHeader } from '@/components/shared/hero-header/HeroHeader'
import { LinkButton } from '@/components/shared/link-button'
import { Navbar } from '@/components/shared/navbar'
import { SemanticHeader } from '@/components/shared/SemanticHeader'
import { SiteLogo } from '@/components/shared/site-logo'
import { SIGN_IN } from '@/constants/routes'
import { colors } from '@/constants/theme'
import { footerHomeContent } from '@/fixtures/footer-content'

export default function Home() {
  return (
    <>
      <SemanticHeader>
        <HeroHeader hasBorder>
          <Navbar>
            <SiteLogo />
            <LinkButton href={SIGN_IN}>Sign In</LinkButton>
          </Navbar>
          <HeaderFeature />
        </HeroHeader>
      </SemanticHeader>

      <MainContainer>
        <StoryCards />
        <FaqSection />
      </MainContainer>
      <Footer footerContent={footerHomeContent} increasedPadding />
    </>
  )
}
