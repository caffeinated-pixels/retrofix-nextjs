import { getBrowseData } from '../getBrowseData'

describe('getBrowseData', () => {
  it('should return home category by default', () => {
    const result = getBrowseData('home')
    expect(result).toEqual({
      activeCategory: 'home',
      sortedContent: expect.any(Array),
      randomShow: expect.any(Object),
    })
  })

  it('should return the correct browse data for the series category', () => {
    const result = getBrowseData('series')
    expect(result).toEqual({
      activeCategory: 'series',
      sortedContent: expect.any(Array),
      randomShow: expect.any(Object),
    })
  })

  it('should return the correct browse data for the films category', () => {
    const result = getBrowseData('films')
    expect(result).toEqual({
      activeCategory: 'films',
      sortedContent: expect.any(Array),
      randomShow: expect.any(Object),
    })
  })
})
