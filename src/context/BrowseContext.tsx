'use client'
import {
  mediaCollection,
  robocop as fallbackRandowShow,
} from '@/fixtures/mediaCollection'
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
  sortedContent: Array<{ genre: string; content: MediaItem[] }>
  randomShow: MediaItem
} | null

const BrowseContext = createContext<BrowseContextType>(null)

export const BrowseContextProvider = ({ children }: PropsWithChildren) => {
  const [activeCategory, setActiveCategory] = useState<string>('home')
  const [sortedContent, setSortedContent] = useState<SortedContent[]>([])
  const [randomShow, setRandomShow] = useState<MediaItem>(fallbackRandowShow)

  useEffect(() => {
    const sortedStreamingContent = sortStreamingContent(
      mediaCollection,
      activeCategory
    )

    setSortedContent(sortedStreamingContent)
  }, [activeCategory])

  useEffect(() => {
    if (sortedContent.length > 0) {
      const randomShow = getRandomShow(sortedContent)
      setRandomShow(randomShow)
    }
  }, [sortedContent])

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

export const useBrowseContext = () => useContext(BrowseContext)
