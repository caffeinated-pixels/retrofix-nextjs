'use client'

import { BrowseDesktopLayout } from '@/components/browse/BrowseDesktopLayout'
import { BrowseMobileLayout } from '@/components/browse/BrowseMobileLayout'
import { BrowsePageContainer } from '@/components/shared/containers/BrowsePageContainer'
import { Footer } from '@/components/shared/footer'
import { footerHomeContent } from '@/fixtures/footer-content'
import { useWindowWidth } from '@/hooks/useWindowWidth'

export default function BrowsePage() {
  const width = useWindowWidth()
  const isMobile = width ? width < 768 : false

  return (
    <BrowsePageContainer>
      {isMobile ? <BrowseMobileLayout /> : <BrowseDesktopLayout />}
      <Footer footerContent={footerHomeContent} increasedPadding />
    </BrowsePageContainer>
  )
}
