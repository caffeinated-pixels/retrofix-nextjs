'server only'

import { mediaCollection } from '@/fixtures/mediaCollection'
import {
  getRandomShow,
  sortStreamingContent,
} from '@/helpers/sortStreamingContent'
import {
  type MediaItem,
  type SortedContent,
  SortingCategory,
} from '@/types/mediaContent'

export type BrowseData = {
  activeCategory: SortingCategory
  sortedContent: SortedContent[]
  randomShow: MediaItem
}

/**
 * server side function for getting the browse data
 * which is used to initialize the BrowseContext via the BrowseDataProvider
 */
export const getBrowseData = (
  category: SortingCategory = 'home'
): BrowseData => {
  const sortedStreamingContent = sortStreamingContent(mediaCollection, category)
  const randomShow = getRandomShow(sortedStreamingContent)

  return {
    activeCategory: category,
    sortedContent: sortedStreamingContent,
    randomShow: randomShow,
  }
}
