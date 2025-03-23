import { useReducer } from 'react'

type SlideTrackState = {
  currentPage: number
  pageLength: number
  activeSlides: number[]
  trackOffset: string
}
export const SLIDE_TRACK_ACTION_TYPES = {
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_PAGE_LENGTH: 'SET_PAGE_LENGTH',
  SET_ACTIVE_SLIDES: 'SET_ACTIVE_SLIDES',
  SET_TRACK_OFFSET: 'SET_TRACK_OFFSET',
  RESET_STATE: 'RESET_STATE',
} as const

type SlideTrackAction = {
  type: string
  payload: number | number[] | string
}

// type SlideTrackAction =
//   | { type: typeof SLIDE_TRACK_ACTION_TYPES.SET_CURRENT_PAGE; payload: number }
//   | { type: typeof SLIDE_TRACK_ACTION_TYPES.SET_PAGE_LENGTH; payload: number }
//   | { type: typeof SLIDE_TRACK_ACTION_TYPES.SET_ACTIVE_SLIDES }
//   | { type: typeof SLIDE_TRACK_ACTION_TYPES.SET_TRACK_OFFSET; payload: string }
//   | { type: typeof SLIDE_TRACK_ACTION_TYPES.RESET_STATE }

const initialState: SlideTrackState = {
  currentPage: 0,
  pageLength: 0,
  activeSlides: [],
  trackOffset: '0px',
}

const setActiveSlides = (state: SlideTrackState) => {
  const firstSlide = state.currentPage * state.pageLength

  return Array.from(Array(state.pageLength)).map((_, i) => i + firstSlide)
}

const setTrackOffset = (state: SlideTrackState, slideWidth: number) => {
  const pageWidth = slideWidth * state.pageLength
  const trackOffset = pageWidth * state.currentPage

  return `-${trackOffset}px`
}

// FIXME: fix reducer type issues
const reducer = (state: SlideTrackState, action: SlideTrackAction) => {
  switch (action.type) {
    case SLIDE_TRACK_ACTION_TYPES.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload }
    case SLIDE_TRACK_ACTION_TYPES.SET_PAGE_LENGTH:
      return { ...state, pageLength: action.payload }
    case SLIDE_TRACK_ACTION_TYPES.SET_ACTIVE_SLIDES:
      return { ...state, activeSlides: setActiveSlides(state) }
    case SLIDE_TRACK_ACTION_TYPES.SET_TRACK_OFFSET:
      return { ...state, trackOffset: setTrackOffset(state, action.payload) }
    case SLIDE_TRACK_ACTION_TYPES.RESET_STATE:
      return { ...initialState }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const useSlideTracks = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return [state, dispatch]
}
