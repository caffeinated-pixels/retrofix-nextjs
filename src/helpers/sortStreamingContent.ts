import {
  type MediaCollection,
  MediaItem,
  SortedContent,
} from '@/types/mediaContent'

/**
 * Extracts a list of unique genres from the media collection
 * more performant method using Set instead of reduce, but requires es2015+
 * 1. maps through content array to extract genre property
 * 2. filters out any empty strings
 * 3. creates a new Set (removes duplicates)
 * 4. spreads the set into a new array
 * @param contentArray - Collection of media items
 * @returns Array of unique genre strings
 */
const getUniqueGenresList = (contentArray: MediaCollection) => {
  return [
    ...new Set(
      contentArray.map((item) => item.genre).filter((genre) => genre !== '')
    ),
  ]
}

/* 
1. Filter content by category; don't filter 'home' (i.e. contains both 'films' & 'series')

2. Create a list of all genres

3. Create an object containing the films & shows for each genre, i.e {genre, content}
We do this by mapping through the genreList arr. Use each genre to filter streamingContent arr.

4. Return an array containing these genre objects.
*/

export const sortStreamingContent = (
  unsortedContent: MediaCollection,
  category: string
): SortedContent[] => {
  const filteredByCategory =
    category === 'home'
      ? unsortedContent
      : unsortedContent.filter((content) => content.category === category)

  const genreList = getUniqueGenresList(filteredByCategory)
  const sortedByGenre = genreList.map((genre) => ({
    genre,
    content: filteredByCategory.filter((item) => item.genre === genre),
  }))

  return sortedByGenre
}

/**
 * Retrieves a random item from the provided array.
 * @param array - The array to select a random item from.
 * @returns A random item from the provided array.
 */
const getRandomItemFromArray = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)]
}

/**
 * Retrieves a random media item from the sorted streaming content.
 * @param sortedContent - An array of sorted streaming content, where each item contains a genre and its associated content.
 * @returns A random media item from the sorted streaming content.
 */
export const getRandomShow = (sortedContent: SortedContent[]): MediaItem => {
  const randomGenre = getRandomItemFromArray(sortedContent)
  return getRandomItemFromArray(randomGenre.content)
}
