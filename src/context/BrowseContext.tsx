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
  useRef,
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
  const previousCategoryRef = useRef(activeCategory)

  useEffect(() => {
    // Only update if the category has actually changed
    if (previousCategoryRef.current === activeCategory) {
      return
    }

    previousCategoryRef.current = activeCategory

    const sortedStreamingContent = sortStreamingContent(
      mediaCollection,
      activeCategory
    )

    setSortedContent(sortedStreamingContent)

    if (sortedStreamingContent.length > 0) {
      const randomShow = getRandomShow(sortedStreamingContent)
      setRandomShow(randomShow)
    }
  }, [activeCategory])

  const setCategory = useCallback((category: string) => {
    setActiveCategory(category)
  }, [])

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
