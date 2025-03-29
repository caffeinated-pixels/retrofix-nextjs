'use client'
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react'

import { mediaCollection } from '@/fixtures/mediaCollection'
import { type BrowseData } from '@/helpers/getBrowseData'
import {
  getRandomShow,
  sortStreamingContent,
} from '@/helpers/sortStreamingContent'
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

type BrowseContextProviderProps = PropsWithChildren<{
  initialData: BrowseData
}>

export const BrowseContextProvider = ({
  children,
  initialData,
}: BrowseContextProviderProps) => {
  const [browseData, setBrowseData] = useState<BrowseData>(initialData)

  const setCategory = useCallback((category: string) => {
    setBrowseData((prev: BrowseData) => {
      if (prev.activeCategory === category) return prev

      const sortedStreamingContent = sortStreamingContent(
        mediaCollection,
        category
      )

      const randomShow = getRandomShow(sortedStreamingContent)

      return {
        activeCategory: category,
        sortedContent: sortedStreamingContent,
        randomShow,
      }
    })
  }, [])

  return (
    <BrowseContext.Provider
      value={{
        activeCategory: browseData.activeCategory,
        setCategory,
        mediaCollection,
        sortedContent: browseData.sortedContent,
        randomShow: browseData.randomShow,
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
