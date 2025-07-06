import { SearchClientComponent } from '@/components/search/SearchClientComponent'
import { getDeviceOnServer } from '@/helpers/getDeviceOnServer'

export default function SearchPage() {
  const { isMobile } = getDeviceOnServer()
  return <SearchClientComponent isMobile={isMobile} />
}
