'use client'

import { BrowseDesktopLayout } from '@/components/browse/BrowseDesktopLayout'
import { BrowseMobileLayout } from '@/components/browse/BrowseMobileLayout'
import { useWindowWidth } from '@/hooks/useWindowWidth'

export default function BrowsePage() {
  const width = useWindowWidth()
  const isMobile = width ? width < 768 : false

  return isMobile ? <BrowseMobileLayout /> : <BrowseDesktopLayout />
}
