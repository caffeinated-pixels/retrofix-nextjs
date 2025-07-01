import { RegNavbar } from '@/components/shared/reg-navbar'
import { SemanticHeader } from '@/components/shared/SemanticHeader'
import { HOME } from '@/constants/routes'

import {
  HomeLink,
  MainContainer,
  Message,
  MessageContainer,
  PageBackground,
  PageBackgroundImage,
  Title,
} from './styled'

type FullPageBackgroundProps = {
  imageUrl: string
  title: string
  message: string
}

export const FullPageBackground = ({
  imageUrl,
  title,
  message,
}: FullPageBackgroundProps) => {
  return (
    <PageBackground>
      <PageBackgroundImage src={imageUrl} alt='' fill />
      <SemanticHeader>
        <RegNavbar noBorder />
      </SemanticHeader>
      <MainContainer>
        <MessageContainer>
          <Title>{title}</Title>
          <Message>{message}</Message>
          <HomeLink href={HOME}>RetroFix Home</HomeLink>
        </MessageContainer>
      </MainContainer>
    </PageBackground>
  )
}
