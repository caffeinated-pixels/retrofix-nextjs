import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'
import { useLayoutEffect, useRef } from 'react'

import { useWindowWidth } from '@/hooks/useWindowWidth'
import { MediaItem } from '@/types/mediaContent'

import { ContentSlide } from '../content-slide/ContentSlide'
import {
  SLIDE_TRACK_ACTION_TYPES,
  useSlideTracks,
} from '../hooks/useSlideTrack'
import {
  ArrowIcon,
  GoBackBox,
  GoForwardBox,
  SlideTrackWrapper,
  Track,
} from './styled'

interface SlideTrackProps {
  content: MediaItem[]
}

export const SlideTrack = ({ content }: SlideTrackProps) => {
  const { state, dispatch } = useSlideTracks()
  const windowWidth = useWindowWidth()

  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    // clear state when content updates
    dispatch({ type: SLIDE_TRACK_ACTION_TYPES.RESET_STATE })

    // then setup state values based on current content & slideWidth
    const slideWidth =
      (ref.current?.firstChild as HTMLElement)?.getBoundingClientRect().width ??
      0
    const slideTrackWidth = ref.current?.getBoundingClientRect().width ?? 0
    const pageLength = Math.floor(slideTrackWidth / slideWidth)

    dispatch({
      type: SLIDE_TRACK_ACTION_TYPES.SET_PAGE_LENGTH,
      payload: pageLength,
    })
    dispatch({ type: SLIDE_TRACK_ACTION_TYPES.SET_ACTIVE_SLIDES })
  }, [dispatch])

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return

    // update trackOffset value when window resizes
    const slideWidth =
      (ref.current?.firstChild as HTMLElement)?.getBoundingClientRect().width ??
      0
    dispatch({
      type: SLIDE_TRACK_ACTION_TYPES.SET_TRACK_OFFSET,
      payload: slideWidth,
    })
  }, [windowWidth, state.currentPage, dispatch])

  const handleForward = () => {
    const totalNumPages = Math.ceil(content.length / state.pageLength)
    const isLastPage = totalNumPages - 1 === state.currentPage

    if (isLastPage) return

    dispatch({
      type: SLIDE_TRACK_ACTION_TYPES.SET_CURRENT_PAGE,
      payload: state.currentPage + 1,
    })
    dispatch({ type: SLIDE_TRACK_ACTION_TYPES.SET_ACTIVE_SLIDES })
  }
  const handleBack = () => {
    const isFirstPage = state.currentPage === 0
    if (isFirstPage) return

    dispatch({
      type: SLIDE_TRACK_ACTION_TYPES.SET_CURRENT_PAGE,
      payload: state.currentPage - 1,
    })
    dispatch({ type: SLIDE_TRACK_ACTION_TYPES.SET_ACTIVE_SLIDES })
  }

  return (
    <SlideTrackWrapper>
      <GoBackBox className='go-back' tabIndex={0} onClick={handleBack}>
        <ArrowIcon icon={faAngleLeft} />
      </GoBackBox>
      <Track $trackOffset={state.trackOffset} ref={ref}>
        {content.map((item, i) => (
          <ContentSlide
            key={item.title}
            item={item}
            isSlideOnCurrentPage={state.activeSlides.includes(i)}
          />
        ))}
      </Track>
      <GoForwardBox className='go-forward' tabIndex={0} onClick={handleForward}>
        <ArrowIcon icon={faAngleRight} />
      </GoForwardBox>
    </SlideTrackWrapper>
  )
}
