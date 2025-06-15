import BrowseClientComponent from '@/components/browse/BrowseClientComponent'
import { getDeviceOnServer } from '@/helpers/getDeviceOnServer'

export default function BrowsePage() {
  const isMobileOrTablet = getDeviceOnServer()

  return <BrowseClientComponent isMobileOrTablet={isMobileOrTablet} />
}
