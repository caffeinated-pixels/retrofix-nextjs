import BrowseDataProvider from '@/context/BrowseDataProvider'

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <BrowseDataProvider>{children}</BrowseDataProvider>
}
