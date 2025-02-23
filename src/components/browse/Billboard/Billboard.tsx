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

const randomShow = {
  title: 'From Bedrooms to Billions: The Amiga Years!',
  description:
    'How the Commodore Amiga helped influence a generation of Developers to take Video Gaming to a whole new level.',
  category: 'films',
  genre: 'documentaries',
  maturity: 'PG',
  year: '2016',
  length: '2h 32m',
  director: 'Anthony Caulfield, Nicola Caulfield',
  cast: 'Shahid Ahmad, Richard Aplin, Brian Bagnall',
  slug: 'amiga-years',
  id: '64',
}

export const Billboard = () => {
  // const { randomShow } = useBrowseContext()

  // TODO: implement useLargeModal
  // const { displayModal, handleShowModal, handleCloseModal } = useLargeModal()
  const handleShowModal = () => {}

  // TODO: implement useNavigateToWatch
  // const handlePlay = useNavigateToWatch(randomShow)
  const handlePlay = () => {}

  // TODO: make more robust/type safe
  const imgUrl = randomShow.slug
    ? `/images/${randomShow.category}/${randomShow.genre}/${randomShow.slug}/large.jpg`
    : ''

  return (
    <BillboardContainer className='container' $imgUrl={imgUrl}>
      <Vignette>
        <FeaturedContainer>
          <FeaturedTitle>{randomShow.title}</FeaturedTitle>
          <FeaturedSynopsis>{randomShow.description}</FeaturedSynopsis>
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
          <MaturityRating>TV-{randomShow.maturity}</MaturityRating>
        </FeaturedContainer>
      </Vignette>
      {/* {displayModal && (
        <LargeContentModal
          handleCloseModal={handleCloseModal}
          item={randomShow}
        />
      )} */}
    </BillboardContainer>
  )
}
