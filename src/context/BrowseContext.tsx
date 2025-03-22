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

type BrowseContextType = {
  activeCategory: string
  setCategory: (category: string) => void
  mediaCollection: MediaCollection
  sortedContent: SortedContent[]
  randomShow: MediaItem | null
}

const BrowseContext = createContext<BrowseContextType | null>(null)

export const BrowseContextProvider = ({ children }: PropsWithChildren) => {
  const [activeCategory, setActiveCategory] = useState<string>('home')
  const [sortedContent, setSortedContent] = useState<SortedContent[]>([])
  const [randomShow, setRandomShow] = useState<MediaItem | null>(null)

  useEffect(() => {
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
