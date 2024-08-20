'use client'
import { RegNavbar } from '@/components/shared/reg-navbar'
import { SemanticHeader } from '@/components/shared/SemanticHeader'
import { HOME } from '@/constants/routes'
import Link from 'next/link'
import styled from 'styled-components'

type PageBackgroundProps = {
  $bgImage: string
}

export const PageBackground = styled.div<PageBackgroundProps>`
  background-image: url(${({ $bgImage }) => $bgImage});
  background-size: cover;
  background-position: center;
  height: 100vh;

  display: flex;
  flex-direction: column;
`

export const MainContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MessageContainer = styled.div`
  max-width: 600px;
  padding: 0 1em;

  text-align: center;

  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.5) 0,
    rgba(0, 0, 0, 0.2) 45%,
    rgba(0, 0, 0, 0.1) 55%,
    rgba(0, 0, 0, 0) 70%
  );
`

export const HomeLink = styled(Link)`
  border-radius: 4px;
  padding: 8px 24px 8px 20px;
  margin-top: min(2vw, 1em);

  background-color: #fff;
  font-weight: 700;
  color: #000;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }

  &:focus {
    outline: 2px solid white;
    outline-offset: 2px;
  }
`

export const Title = styled.h1`
  font-size: clamp(2rem, 1rem + 4vw, 3.25rem);
  text-align: center;
`
export const Message = styled.p`
  font-size: clamp(1rem, 0.75rem + 2vw, 1.75rem);
  margin-top: clamp(0.5em, 2vw, 0.5em);
  margin-bottom: clamp(0.5em, 6vw, 1em);
`

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
