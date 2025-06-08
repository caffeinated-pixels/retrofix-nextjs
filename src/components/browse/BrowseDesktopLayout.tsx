import { BrowseHeaderDesktop } from '@/components/browse/Header/BrowseHeaderDesktop'
import { StreamingContentDesktop } from '@/components/browse/streaming-content/StreamingContentDesktop'
import { BrowsePageContainer } from '@/components/shared/containers/BrowsePageContainer'
import { Footer } from '@/components/shared/footer'
import { footerHomeContent } from '@/fixtures/footer-content'

export const BrowseDesktopLayout = () => {
  return (
    <BrowsePageContainer>
      <BrowseHeaderDesktop />
      <StreamingContentDesktop />
      <Footer footerContent={footerHomeContent} increasedPadding />
    </BrowsePageContainer>
  )
}
