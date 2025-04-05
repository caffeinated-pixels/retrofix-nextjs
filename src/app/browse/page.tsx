'use client'

import { BrowseHeaderDesktop } from '@/components/browse/Header/BrowseHeaderDesktop'
import { StreamingContentDesktop } from '@/components/browse/streaming-content/StreamingContentDesktop'
import { BrowsePageContainer } from '@/components/shared/containers/BrowsePageContainer'
import { Footer } from '@/components/shared/footer'
import { WindowWidthContextProvider } from '@/context/WindowWidthContext'
import { footerHomeContent } from '@/fixtures/footer-content'

export default function BrowsePage() {
  /**
   * TODO: In the orginial app, I created two layoutss for the browse page.
   * One for mobile and one for desktop.
   * For now, I'm just going to use the desktop layout.
   */
  return (
    <WindowWidthContextProvider>
      <BrowsePageContainer>
        <BrowseHeaderDesktop />
        <StreamingContentDesktop />
        <Footer footerContent={footerHomeContent} increasedPadding />
      </BrowsePageContainer>
    </WindowWidthContextProvider>
  )
}
