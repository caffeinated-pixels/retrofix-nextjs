import styled from 'styled-components'
import GetStartedForm from '../../shared/get-started-form'
import faqContentData from '../../../fixtures/faq-content.json'
import { AccordionItem } from './AccordionItem'
import { AccordionContextProvider } from '@/context/AccordionContext'
import { cardBorderBottom } from '@/constants/theme'

const FaqContainer = styled.section`
  padding: 50px 0;
  border-bottom: ${cardBorderBottom};

  @media (min-width: 550px) {
    padding: 70px 45px;
  }
`

const Title = styled.h2`
  text-align: center;
  font-size: 1.625rem;
  line-height: 1.15;
  padding: 0 5%;

  @media (min-width: 550px) {
    font-size: 2.5rem;
  }

  @media (min-width: 950px) {
    font-size: 3.125rem;
  }
`

const AccordionWrapper = styled.div`
  margin: 1.25em auto;
  max-width: 815px;
  font-size: 1.125rem;
  line-height: normal;

  @media (min-width: 550px) {
    width: 90%;
    margin: 1.5em auto;
    font-size: 1.25rem;
  }

  @media (min-width: 950px) {
    width: 75%;
    margin: 2em auto;
    font-size: 1.625rem;
  }
`

const FormWrapper = styled.div`
  padding: 0 5%;

  @media (min-width: 550px) {
    padding: 0;
  }
`

export const FaqSection = () => {
  const accordionItems = faqContentData.map(({ id, question, answer }) => (
    <AccordionItem key={id} id={id} question={question} answer={answer} />
  ))

  return (
    <FaqContainer>
      <Title>Frequently Asked Questions</Title>
      <AccordionContextProvider>
        <AccordionWrapper>{accordionItems}</AccordionWrapper>
      </AccordionContextProvider>
      <FormWrapper>
        <GetStartedForm />
      </FormWrapper>
    </FaqContainer>
  )
}
