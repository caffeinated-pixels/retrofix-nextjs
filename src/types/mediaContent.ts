// Base type with common properties
interface MediaBase {
  id: string
  title: string
  description: string
  category: 'films' | 'series'
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
  category: 'films'
  director: string
}

// Series-specific type
interface Series extends MediaBase {
  category: 'series'
}

// Union type representing either a film or series
export type MediaItem = Film | Series

// The entire collection
export type MediaCollection = MediaItem[]

export type SortedContent = {
  genre: string
  content: MediaCollection
}
