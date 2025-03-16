'use client'
import {
  HomeLink,
  MainContainer,
  Message,
  MessageContainer,
  PageBackground,
  Title,
} from '@/components/not-found/styled'
import { RegNavbar } from '@/components/shared/reg-navbar'
import { SemanticHeader } from '@/components/shared/SemanticHeader'
import { HOME } from '@/constants/routes'

export default function PageNotFound() {
  return (
    <PageBackground $bgImage='/images/misc/no-more-table.jpg'>
      <SemanticHeader>
        <RegNavbar noBorder />
      </SemanticHeader>
      <MainContainer>
        <MessageContainer>
          <Title>
            No more website! <br /> Where you going, pal?!
          </Title>
          <Message>
            Next time you have the chance to visit RetroFix, don&apos;t
            hesitate!
          </Message>
          <HomeLink href={HOME}>RetroFix Home</HomeLink>
        </MessageContainer>
      </MainContainer>
    </PageBackground>
  )
}
