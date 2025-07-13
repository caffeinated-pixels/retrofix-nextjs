import { mediaCollection } from '@/fixtures/mediaCollection'

import {
  getRandomItemFromArray,
  getRandomShow,
  getUniqueGenresList,
  sortStreamingContent,
} from '../sortStreamingContent'

const miniMediaCollection = [
  mediaCollection[0], // film, sci-fi
  mediaCollection[1], // film, sci-fi
  mediaCollection[9], // series, sci-fi
  mediaCollection[10], // series, sci-fi
  mediaCollection[16], // film, horror
  mediaCollection[31], // series, drama
]

describe('sortStreamingContent helper functions', () => {
  describe('getUniqueGenresList', () => {
    it('should return an array of unique genres', () => {
      const result = getUniqueGenresList(miniMediaCollection)
      expect(result).toEqual(['sci-fi', 'horror', 'drama'])
    })
  })

  describe('getRandomItemFromArray', () => {
    it('should return a single item from the array', () => {
      const testArray = [1, 2, 3, 4, 5]
      const result = getRandomItemFromArray(testArray)
      expect(testArray.includes(result)).toBe(true)
    })

    it('should return a random item from the array', () => {
      const testArray = [1]
      const result = getRandomItemFromArray(testArray)
      expect(result).toBe(1)
    })
  })

  describe('getRandomShow', () => {
    it('should return a random show from the sorted content', () => {
      const sortedContent = [
        { genre: 'sci-fi', content: [mediaCollection[0], mediaCollection[1]] },
        {
          genre: 'horror',
          content: [mediaCollection[16], mediaCollection[17]],
        },
      ]
      const result = getRandomShow(sortedContent)

      const expectedItems = [
        mediaCollection[0],
        mediaCollection[1],
        mediaCollection[16],
        mediaCollection[17],
      ]
      expect(expectedItems).toContain(result)
    })
  })

  describe('sortStreamingContent', () => {
    it('should return an array of tv shows for the series category', () => {
      const result = sortStreamingContent(miniMediaCollection, 'series')

      const expectedResult = [
        { genre: 'sci-fi', content: [mediaCollection[9], mediaCollection[10]] },

        { genre: 'drama', content: [mediaCollection[31]] },
      ]

      expect(result).toEqual(expectedResult)
    })

    it('should return an array of films for the films category', () => {
      const result = sortStreamingContent(miniMediaCollection, 'films')

      const expectedResult = [
        { genre: 'sci-fi', content: [mediaCollection[0], mediaCollection[1]] },
        { genre: 'horror', content: [mediaCollection[16]] },
      ]

      expect(result).toEqual(expectedResult)
    })

    it('should return an array of everything for the home category', () => {
      const result = sortStreamingContent(miniMediaCollection, 'home')

      const expectedResult = [
        {
          genre: 'sci-fi',
          content: [
            mediaCollection[0],
            mediaCollection[1],
            mediaCollection[9],
            mediaCollection[10],
          ],
        },
        { genre: 'horror', content: [mediaCollection[16]] },
        { genre: 'drama', content: [mediaCollection[31]] },
      ]

      expect(result).toEqual(expectedResult)
    })
  })
})
