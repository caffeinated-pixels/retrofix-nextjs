import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { PORFOLIO_URL, REPO_URL } from '@/constants/routes'

import {
  BottomText,
  ContentWrapper,
  CreditLink,
  CreditText,
  CustomLink,
  FooterContainer,
  FooterWrapper,
  ListItem,
  TopText,
  UnorderedList,
} from './styled'

type FooterProps = {
  footerContent: {
    title: string
    body: string[]
    bottomText?: string
  }
  increasedPadding?: boolean
  bgColor?: string
  textColor?: string
  borderTop?: string
  borderOnlyOnMobile?: boolean
}

export const Footer = ({
  footerContent,
  increasedPadding,
  textColor,
  bgColor,
  borderTop,
  borderOnlyOnMobile,
}: FooterProps) => {
  const listItems = footerContent.body.map((item, i) => (
    <ListItem key={i}>
      <CustomLink href='#'>{item}</CustomLink>
    </ListItem>
  ))

  return (
    <FooterContainer
      $increasedPadding={increasedPadding}
      $bgColor={bgColor}
      $textColor={textColor}
      $borderTop={borderTop}
      $borderOnlyOnMobile={borderOnlyOnMobile}
    >
      <FooterWrapper>
        <ContentWrapper>
          <TopText>{footerContent.title}</TopText>
          <UnorderedList>{listItems}</UnorderedList>
          {footerContent.bottomText ? (
            <BottomText>{footerContent.bottomText}</BottomText>
          ) : null}
          <CreditText>
            Coded by <CreditLink href={PORFOLIO_URL}>Stevie Gill</CreditLink> |{' '}
            <FontAwesomeIcon icon={faGithubSquare} aria-label='Github logo' />{' '}
            <CreditLink href={REPO_URL}>Repo</CreditLink>
          </CreditText>
        </ContentWrapper>
      </FooterWrapper>
    </FooterContainer>
  )
}
