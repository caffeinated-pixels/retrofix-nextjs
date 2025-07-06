'server-only'

import isMobile from 'ismobilejs'
import { headers } from 'next/headers'

export const getDeviceOnServer = () => {
  const headersList = headers()
  const userAgent = headersList.get('user-agent')
  const returnValues = isMobile(userAgent || '')

  return {
    isMobileOrTablet: returnValues.any,
    isMobile: returnValues.phone,
    isTablet: returnValues.tablet,
    isDesktop: !returnValues.any,
  }
}
