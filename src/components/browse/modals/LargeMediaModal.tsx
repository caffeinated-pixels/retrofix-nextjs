import { createPortal } from 'react-dom'
import {
  Background,
  ButtonWrapper,
  CloseButton,
  CloseIcon,
  DetailsContainer,
  Header,
  LeftDetailsBox,
  MatchScore,
  MaturityRating,
  Metadata,
  MetaDataContainer,
  ModalContainer,
  People,
  Resolution,
  RightDetailsBox,
  RoundButton,
  RoundButtonIcon,
  Synopsis,
  Title,
  TitleBox,
} from './styled'
import { useEffect } from 'react'
import { PlayButton, PlayIcon } from '../buttons/styled'
import { MediaItem } from '@/types/mediaContent'
import { useMounted } from '@/hooks/useMounted'
import { useRootElement } from '@/hooks/useRootElement'

const modalRoot = document.getElementById('modal-root')

type LargeContentModalProps = {
  handleCloseModal: (e?: MouseEvent) => void
  item: MediaItem
}

export const LargeMediaModal = ({
  handleCloseModal,
  item,
}: LargeContentModalProps) => {
  const mounted = useMounted()
  console.log('🚀 turbo ~ largeMediaModal.tsx:41 ~ mounted:', mounted)
  const target = useRootElement('modal-root', mounted)
  console.log('🚀 turbo ~ largeMediaModal.tsx:44 ~ target:', target)

  // TODO: implement useNavigateToWatch
  //   const handlePlay = useNavigateToWatch(item)
  const handlePlay = () => {}

  const imgUrl = `/images/${item.category}/${item.genre}/${item.slug}/large.jpg`

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseModal()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleCloseModal])

  // Only render on client-side
  //   if (!mounted) return null

  //   const target = document.getElementById('modal-root')
  //   console.log('🚀 turbo ~ largeMediaModal.tsx:63 ~ target:', target)

  //   if (!target) return null

  return (
    modalRoot &&
    target &&
    createPortal(
      <Background>
        <ModalContainer>
          <Header $imgUrl={imgUrl}>
            <TitleBox>
              <Title>{item.title}</Title>
              <ButtonWrapper>
                <PlayButton onClick={handlePlay} autoFocus>
                  <PlayIcon className='fas fa-play' />
                  Play
                </PlayButton>
                <RoundButton aria-label='Rate thumbs up'>
                  <RoundButtonIcon className='fas fa-thumbs-up' />
                </RoundButton>
                <RoundButton aria-label='Rate thumbs down'>
                  <RoundButtonIcon className='fas fa-thumbs-down' />
                </RoundButton>
              </ButtonWrapper>
            </TitleBox>
            <CloseButton aria-label='close' onClick={handleCloseModal}>
              <CloseIcon className='fas fa-times' />
            </CloseButton>
          </Header>
          <DetailsContainer>
            <LeftDetailsBox>
              <MetaDataContainer>
                <MatchScore>157% Match</MatchScore>
                <Metadata>{item.year}</Metadata>
                <MaturityRating>TV-{item.maturity}</MaturityRating>
                <Metadata>{item.length}</Metadata>
                <Resolution>64K</Resolution>
              </MetaDataContainer>
              <Synopsis>{item.description}</Synopsis>
            </LeftDetailsBox>
            <RightDetailsBox>
              {item.director && (
                <People $firstWord='Director: '>{item.director}</People>
              )}
              {item.cast && <People $firstWord='Cast: '>{item.cast}</People>}
              {item.cast && (
                <People $firstWord='Genres: '>
                  {item.genre}
                  {item.subgenres ? `, ${item.subgenres}` : ''}
                </People>
              )}
            </RightDetailsBox>
          </DetailsContainer>
        </ModalContainer>
      </Background>,
      target
    )
  )
}
