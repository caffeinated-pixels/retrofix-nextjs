'server only'

import { mediaCollection } from '@/fixtures/mediaCollection'
import {
  sortStreamingContent,
  getRandomShow,
} from '@/helpers/sortStreamingContent'
import { type MediaItem, type SortedContent } from '@/types/mediaContent'

export type BrowseData = {
  initialSortedContent: SortedContent[]
  initialRandomShow: MediaItem
}

/**
 * server side function for getting the browse data
 * which is used to initialize the BrowseContext via the BrowseDataProvider
 */
export const getBrowseData = (category: string = 'home'): BrowseData => {
  const sortedStreamingContent = sortStreamingContent(mediaCollection, category)
  const randomShow = getRandomShow(sortedStreamingContent)

  return {
    initialSortedContent: sortedStreamingContent,
    initialRandomShow: randomShow,
  }
}
