import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons/faThumbsDown'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import { MouseEvent, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { useMounted } from '@/hooks/useMounted'
import { useRootElement } from '@/hooks/useRootElement'
import { MediaItem } from '@/types/mediaContent'

import { PlayButton, PlayIcon } from '../buttons/styled'
import { useNavigateToWatch } from '../hooks/useNavigateToWatch'
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

type LargeContentModalProps = {
  handleCloseModal: (e?: MouseEvent<HTMLButtonElement>) => void
  item: MediaItem
}

export const LargeMediaModal = ({
  handleCloseModal,
  item,
}: LargeContentModalProps) => {
  const mounted = useMounted()
  const target = useRootElement('modal-root', mounted)

  const handlePlay = useNavigateToWatch(item)

  const imgUrl = `/images/${item.category}/${item.genre}/${item.slug}/large.jpg`

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseModal()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleCloseModal])

  return (
    mounted &&
    target &&
    createPortal(
      <Background>
        <ModalContainer>
          <Header $imgUrl={imgUrl}>
            <TitleBox>
              <Title>{item.title}</Title>
              <ButtonWrapper>
                <PlayButton onClick={handlePlay} autoFocus>
                  <PlayIcon icon={faPlay} />
                  Play
                </PlayButton>
                <RoundButton aria-label='Rate thumbs up'>
                  <RoundButtonIcon icon={faThumbsUp} />
                </RoundButton>
                <RoundButton aria-label='Rate thumbs down'>
                  <RoundButtonIcon icon={faThumbsDown} />
                </RoundButton>
              </ButtonWrapper>
            </TitleBox>
            <CloseButton aria-label='close' onClick={handleCloseModal}>
              <CloseIcon icon={faTimes} />
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
              {item.category === 'films' && item.director && (
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
