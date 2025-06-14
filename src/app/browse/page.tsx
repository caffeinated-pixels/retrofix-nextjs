import isMobile from 'ismobilejs'
import { headers } from 'next/headers'

import BrowseClientComponent from '@/components/browse/BrowseClientComponent'

export default async function BrowsePage() {
  const headersList = headers()
  const userAgent = headersList.get('user-agent')
  const isMobileOrTablet = isMobile(userAgent || '').any

  return <BrowseClientComponent isMobileOrTablet={isMobileOrTablet} />
}
