'use client'
import {
  HomeLink,
  MainContainer,
  Message,
  MessageContainer,
  PageBackground,
  PageBackgroundImage,
  Title,
} from '@/components/not-found/styled'
import { RegNavbar } from '@/components/shared/reg-navbar'
import { SemanticHeader } from '@/components/shared/SemanticHeader'
import { HOME } from '@/constants/routes'

export default function Children() {
  return (
    <PageBackground>
      <PageBackgroundImage
        src='/images/films/horror/Halloween/large.jpg'
        alt=''
        fill
      />
      <SemanticHeader>
        <RegNavbar noBorder />
      </SemanticHeader>
      <MainContainer>
        <MessageContainer>
          <Title>No kids profiles!</Title>
          <Message>
            Children are as evil as pineapple on a pizza, so RetroFix is a
            no-kids zone!
          </Message>
          <HomeLink href={HOME}>RetroFix Home</HomeLink>
        </MessageContainer>
      </MainContainer>
    </PageBackground>
  )
}
