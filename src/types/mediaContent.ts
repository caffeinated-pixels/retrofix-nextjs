export type Category = 'films' | 'series'
export type SortingCategory = 'home' | Category

// Base type with common properties
interface MediaBase {
  id: string
  title: string
  description: string
  category: Category
  genre: string
  subgenres?: string
  maturity: string
  year: string
  length: string
  slug: string
  cast: string
}

// Film-specific type
interface Film extends MediaBase {
  category: Extract<Category, 'films'>
  director: string
}

// Series-specific type
interface Series extends MediaBase {
  category: Extract<Category, 'series'>
}

// Union type representing either a film or series
export type MediaItem = Film | Series

// The entire collection
export type MediaCollection = MediaItem[]

export type SortedContent = {
  genre: string
  content: MediaCollection
}
