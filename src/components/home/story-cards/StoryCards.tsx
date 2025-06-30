import storyContentData from '../../../fixtures/storycard-content.json'
import {
  ContentWrapper,
  ImageWrapper,
  StoryCard,
  StoryCardsContainer,
  StoryImage,
  Subtitle,
  TextWrapper,
  Title,
} from './styled'

export const StoryCards = () => {
  const storyContent = storyContentData.map((item) => (
    <StoryCard key={item.id}>
      <ContentWrapper direction={item.direction}>
        <TextWrapper direction={item.direction}>
          <Title>{item.title}</Title>
          <Subtitle>{item.subtitle}</Subtitle>
        </TextWrapper>
        <ImageWrapper $negativeMargin={item.negativeMargin}>
          <StoryImage src={item.image} alt={item.alt} fill />
        </ImageWrapper>
      </ContentWrapper>
    </StoryCard>
  ))

  return <StoryCardsContainer>{storyContent}</StoryCardsContainer>
}
