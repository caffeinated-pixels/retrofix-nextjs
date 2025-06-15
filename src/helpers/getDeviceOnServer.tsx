'server-only'

import isMobile from 'ismobilejs'
import { headers } from 'next/headers'

export const getDeviceOnServer = () => {
  const headersList = headers()
  const userAgent = headersList.get('user-agent')
  const isMobileOrTablet = isMobile(userAgent || '').any

  return isMobileOrTablet
}
