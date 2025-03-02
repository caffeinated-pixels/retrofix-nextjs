import { useBrowseContext } from '@/context/BrowseContext'
import {
  InfoIcon,
  MoreInfoButton,
  PlayButton,
  PlayIcon,
} from '../buttons/styled'
import {
  BillboardContainer,
  ButtonWrapper,
  FeaturedContainer,
  FeaturedSynopsis,
  FeaturedTitle,
  MaturityRating,
  Vignette,
} from './styled'
import { useLargeModal } from '@/components/browse/hooks/useLargeModal'
import { LargeMediaModal } from '../modals/LargeMediaModal'

export const Billboard = () => {
  const { randomShow } = useBrowseContext()

  const { displayModal, handleShowModal, handleCloseModal } = useLargeModal()
  console.log(
    '🚀 turbo ~ Billboard.tsx:39 ~ Billboard ~ displayModal:',
    displayModal
  )

  // TODO: implement useNavigateToWatch
  // const handlePlay = useNavigateToWatch(randomShow)
  const handlePlay = () => {}

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
      {displayModal && (
        <LargeMediaModal
          handleCloseModal={handleCloseModal}
          item={randomShow}
        />
      )}
    </BillboardContainer>
  )
}
