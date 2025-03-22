'server only'

import { BrowseContextProvider } from '@/context/BrowseContext'
import { getBrowseData } from '@/helpers/getBrowseData'

/**
 * server component for initializing state in the BrowseContext
 * we use this to avoid hydration errors when getting the first random show
 * wraps the layout instead of the BrowseContextProvider
 */
export default function BrowseDataProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const initialData = getBrowseData()

  return (
    <BrowseContextProvider initialData={initialData}>
      {children}
    </BrowseContextProvider>
  )
}
