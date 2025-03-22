'use client'
import { mediaCollection } from '@/fixtures/mediaCollection'
import {
  getRandomShow,
  sortStreamingContent,
} from '@/helpers/sortStreamingContent'
import {
  createContext,
  useState,
  useEffect,
  useContext,
  PropsWithChildren,
  useCallback,
} from 'react'
import {
  type MediaCollection,
  type MediaItem,
  type SortedContent,
} from '@/types/mediaContent'
import { type BrowseData } from '@/helpers/getBrowseData'

type BrowseContextType = {
  activeCategory: string
  setCategory: (category: string) => void
  mediaCollection: MediaCollection
  sortedContent: SortedContent[]
  randomShow: MediaItem | null
}

const BrowseContext = createContext<BrowseContextType | null>(null)

type BrowseContextProviderProps = PropsWithChildren<{
  initialData?: BrowseData
}>

export const BrowseContextProvider = ({
  children,
  initialData,
}: BrowseContextProviderProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('home')
  const [sortedContent, setSortedContent] = useState<SortedContent[]>(
    initialData?.initialSortedContent || []
  )
  const [randomShow, setRandomShow] = useState<MediaItem | null>(
    initialData?.initialRandomShow || null
  )

  useEffect(() => {
    // Fallback if initialData is not provided
    if (!initialData) {
      const sortedStreamingContent = sortStreamingContent(
        mediaCollection,
        'home'
      )

      setSortedContent(sortedStreamingContent)

      if (sortedStreamingContent.length > 0) {
        const randomShow = getRandomShow(sortedStreamingContent)
        setRandomShow(randomShow)
      }
    }
  }, [initialData])

  const setCategory = useCallback(
    (category: string) => {
      setActiveCategory(category)

      const sortedStreamingContent = sortStreamingContent(
        mediaCollection,
        activeCategory
      )

      setSortedContent(sortedStreamingContent)

      if (sortedStreamingContent.length > 0) {
        const randomShow = getRandomShow(sortedStreamingContent)
        setRandomShow(randomShow)
      }
    },
    [activeCategory]
  )

  return (
    <BrowseContext.Provider
      value={{
        activeCategory,
        setCategory,
        mediaCollection,
        sortedContent,
        randomShow,
      }}
    >
      {children}
    </BrowseContext.Provider>
  )
}

export const useBrowseContext = () => {
  const context = useContext(BrowseContext)
  if (!context) {
    throw new Error(
      'useBrowseContext must be used within a BrowseContextProvider'
    )
  }
  return context
}
