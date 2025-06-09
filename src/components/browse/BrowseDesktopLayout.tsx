import { BrowseHeaderDesktop } from '@/components/browse/Header/BrowseHeaderDesktop'
import { StreamingContentDesktop } from '@/components/browse/streaming-content/StreamingContentDesktop'

export const BrowseDesktopLayout = () => {
  return (
    <>
      <BrowseHeaderDesktop />
      <StreamingContentDesktop />
    </>
  )
}
