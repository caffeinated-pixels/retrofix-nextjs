'use client'

import { BrowseDesktopLayout } from '@/components/browse/BrowseDesktopLayout'
import { BrowseMobileLayout } from '@/components/browse/BrowseMobileLayout'
import { BrowsePageContainer } from '@/components/shared/containers/BrowsePageContainer'
import { Footer } from '@/components/shared/footer'
import { footerHomeContent } from '@/fixtures/footer-content'

type BrowseClientComponentProps = {
  isMobile: boolean
}

export const BrowseClientComponent = ({
  isMobile,
}: BrowseClientComponentProps) => {
  return (
    <BrowsePageContainer>
      {isMobile ? <BrowseMobileLayout /> : <BrowseDesktopLayout />}
      <Footer footerContent={footerHomeContent} increasedPadding />
    </BrowsePageContainer>
  )
}
