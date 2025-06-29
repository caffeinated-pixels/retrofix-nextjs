import { memo } from 'react'

import { MediaItem } from '@/types/mediaContent'

import { useLargeModal } from '../hooks/useLargeModal'
import { LargeMediaModal } from '../modals/LargeMediaModal'
import { ContentSlideContainer, ContentSlideImage } from './styled'

type ContentSlideProps = {
  item: MediaItem
  isSlideOnCurrentPage?: boolean
}

const ContentSlideComponent = ({
  item,
  isSlideOnCurrentPage,
}: ContentSlideProps) => {
  const { displayModal, handleShowModal, handleKeyDown, handleCloseModal } =
    useLargeModal()
  const imgUrl = `/images/${item.category}/${item.genre}/${item.slug}/thumb.jpg`

  const tabIndex = isSlideOnCurrentPage ? 0 : -1

  return (
    <ContentSlideContainer onClick={handleShowModal}>
      <ContentSlideImage
        tabIndex={tabIndex}
        src={imgUrl}
        alt={item.title}
        onKeyDown={handleKeyDown}
        fill
        sizes='(min-width: 1400px) 300px, 24vw'
      />
      {displayModal && (
        <LargeMediaModal handleCloseModal={handleCloseModal} item={item} />
      )}
    </ContentSlideContainer>
  )
}

// memoize ContentSlide to prevent unnecessary rerenders everytime window resizes (via SlideTrack)
export const ContentSlide = memo(ContentSlideComponent)
