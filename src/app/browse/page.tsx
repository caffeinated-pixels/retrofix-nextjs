'use client'

import BrowseHeaderDesktop from '@/components/browse/Header/BrowseHeaderDesktop'
import { BrowsePageContainer } from '@/components/shared/containers/BrowsePageContainer'
import { Footer } from '@/components/shared/footer'
import { footerHomeContent } from '@/fixtures/footer-content'

export default function BrowsePage() {
  /**
   * TODO: In the orginial app, I created two layoutss for the browse page.
   * One for mobile and one for desktop.
   * For now, I'm just going to use the desktop layout.
   */
  return (
    <BrowsePageContainer>
      <BrowseHeaderDesktop />
      {/* <h1>Browse Page</h1> */}
      <Footer footerContent={footerHomeContent} increasedPadding />
    </BrowsePageContainer>
  )
}

// TODO: use getServerSideProps to get fetch media collection and pass it to the BrowseContextProvider
