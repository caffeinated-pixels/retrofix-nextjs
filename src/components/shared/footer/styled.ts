import Link from 'next/link'
import styled from 'styled-components'

import { colors } from '@/constants/theme'

type FooterContainerProps = {
  $increasedPadding?: boolean
  $bgColor?: string
  $borderTop?: string
  $borderOnlyOnMobile?: boolean
}

export const FooterContainer = styled.footer<FooterContainerProps>`
  color: ${colors.textMedGrey};
  background-color: ${({ $bgColor }) => ($bgColor ? $bgColor : null)};
  border-top: ${({ $borderTop }) =>
    $borderTop ? `1px solid ${$borderTop}` : null};

  padding: ${({ $increasedPadding }) =>
    $increasedPadding ? '50px 5%' : '30px 0'};
  line-height: normal;

  @media (min-width: 550px) {
    padding: 75px 45px;
    padding: ${({ $increasedPadding }) =>
      $increasedPadding ? '75px 45px' : '30px 0'};
  }

  @media (min-width: 750px) {
    border-top: ${({ $borderOnlyOnMobile }) =>
      $borderOnlyOnMobile ? '0' : ''};
  }
`
export const FooterWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  font-size: 0.8125rem;
`

export const ContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

export const TopText = styled.p`
  margin: 0 0 30px;
  font-size: 1rem;
`

export const UnorderedList = styled.ul`
  padding: 0;
  margin: 0;
  max-width: 1000px;
  font-size: 13px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 740px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 16px;
  min-width: 100px;
  padding-right: 12px;
`

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`

export const BottomText = styled.p`
  margin-top: 1.5em;
`

export const CreditText = styled.p`
  text-align: center;
  margin-top: 1em;
`

export const CreditLink = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`
