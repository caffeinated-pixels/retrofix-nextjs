import styled from 'styled-components'

import React from 'react'
import { colors } from '@/constants/theme'
import { useAccordionContext } from '@/context/AccordionContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AccordionItemWrapper = styled.div`
  margin-bottom: 8px;
`

const QuestionHeader = styled.h3`
  font-weight: inherit;
  font-size: inherit;
`

const HeaderButton = styled.button`
  width: 100%;
  text-align: left;
  border-radius: 0;
  border: none;
  background-color: ${colors.accordionGrey};
  color: #fff;
  padding: 0.8em 1.2em;
  margin-bottom: 1px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    filter: brightness(1.3);
  }
`

type OpenIconProps = {
  $isActive: boolean
}

const OpenIcon = styled(FontAwesomeIcon)<OpenIconProps>`
  transform: ${({ $isActive }) => ($isActive ? 'rotate(45deg)' : null)};
`

const AnswerPanel = styled.div`
  white-space: pre-line; // need this to make the line breaks work
  background-color: ${colors.accordionGrey};
  padding: 1.2em;
  margin-bottom: 8px;
  overflow: hidden;
`

type AccordionItemProps = {
  id: number
  answer: string
  question: string
}

export const AccordionItem = ({ id, answer, question }: AccordionItemProps) => {
  const { activeAccordionItem, setToggle } = useAccordionContext()

  return (
    <AccordionItemWrapper>
      <QuestionHeader>
        <HeaderButton
          aria-disabled='false'
          aria-expanded={activeAccordionItem === question}
          aria-controls={`answer-${id}`}
          id={`question-${id}`}
          onClick={() => setToggle(question)}
        >
          {question}
          <OpenIcon
            icon={faPlus}
            $isActive={activeAccordionItem === question}
          />
        </HeaderButton>
      </QuestionHeader>
      <AnswerPanel
        id={`answer-${id}`}
        role='region'
        aria-labelledby={`question-${id}`}
        hidden={activeAccordionItem !== question}
      >
        {answer}
      </AnswerPanel>
    </AccordionItemWrapper>
  )
}

// aria attributes based on https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html
