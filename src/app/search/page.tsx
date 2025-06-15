import SearchClientComponent from '@/components/search/SearchClientComponent'
import { getDeviceOnServer } from '@/helpers/getDeviceOnServer'

export default function SearchPage() {
  const isMobileOrTablet = getDeviceOnServer()
  return <SearchClientComponent isMobileOrTablet={isMobileOrTablet} />
}
