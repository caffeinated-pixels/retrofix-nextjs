import { useLargeModal } from '@/components/browse/hooks/useLargeModal'
import { useBrowseContext } from '@/context/BrowseContext'

import {
  InfoIcon,
  MoreInfoButton,
  PlayButton,
  PlayIcon,
} from '../buttons/styled'
import { useNavigateToWatch } from '../hooks/useNavigateToWatch'
import { LargeMediaModal } from '../modals/LargeMediaModal'
import {
  BillboardContainer,
  ButtonWrapper,
  FeaturedContainer,
  FeaturedSynopsis,
  FeaturedTitle,
  MaturityRating,
  Vignette,
} from './styled'

export const Billboard = () => {
  const { randomShow } = useBrowseContext()

  const { displayModal, handleShowModal, handleCloseModal } = useLargeModal()

  const handlePlay = useNavigateToWatch(randomShow)

  // TODO: make more robust/type safe
  const imgUrl = randomShow?.slug
    ? `/images/${randomShow.category}/${randomShow.genre}/${randomShow.slug}/large.jpg`
    : ''

  // TODO: add proper loading states
  return (
    <BillboardContainer className='container' $imgUrl={imgUrl}>
      <Vignette>
        <FeaturedContainer>
          <FeaturedTitle>{randomShow?.title || 'Loading...'}</FeaturedTitle>
          <FeaturedSynopsis>{randomShow?.description}</FeaturedSynopsis>
          <ButtonWrapper>
            <PlayButton onClick={handlePlay}>
              <PlayIcon className='fas fa-play' />
              Play
            </PlayButton>
            <MoreInfoButton onClick={handleShowModal}>
              <InfoIcon className='fas fa-info-circle' />
              More Info
            </MoreInfoButton>
          </ButtonWrapper>
          <MaturityRating>TV-{randomShow?.maturity}</MaturityRating>
        </FeaturedContainer>
      </Vignette>
      {displayModal && randomShow && (
        <LargeMediaModal
          handleCloseModal={handleCloseModal}
          item={randomShow}
        />
      )}
    </BillboardContainer>
  )
}
