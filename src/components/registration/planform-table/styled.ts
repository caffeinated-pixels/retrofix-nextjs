import styled from 'styled-components'

import { colors } from '@/constants/theme'

export const PlanFormContainer = styled.div``

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (min-width: 600px) {
    width: 60%;
    margin-left: auto;
  }
`

export const PlanSelector = styled.label`
  position: relative;
  width: 100%;
  text-align: center;
  padding: 8px 4px;
`

export const RadioButton = styled.input`
  position: absolute;
  opacity: 0;
`

type PlanNameBoxProps = {
  $isChecked: boolean
}

export const PlanNameBox = styled.span<PlanNameBoxProps>`
  background-color: ${colors.netflixRed};
  color: #fff;
  font-size: 1.0625rem;
  font-weight: 700;
  border-radius: 2px;

  width: 100%;
  height: 75px;
  padding: 1px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  opacity: ${({ $isChecked }) => ($isChecked ? '1' : '0.6')};

  @media (min-width: 600px) {
    padding: 0;
    width: 90px;
    height: 90px;
  }

  @media (min-width: 950px) {
    padding: 0;
    width: 120px;
    height: 120px;
  }

  [type='radio']:focus + &,
  [type='radio']:active + & {
    box-shadow: 0 0 3px 0 ${colors.netflixRed};
  }

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);

    border: 0 solid transparent;
    border-width: ${({ $isChecked }) => ($isChecked ? '15px' : '0')};
    border-top-color: ${colors.netflixRed};
  }
`

export const SmallPrint = styled.small`
  display: block;
  font-size: 0.8125rem;
  color: ${colors.textMedGrey};

  @media (min-width: 600px) {
    padding: 0 150px 0 16px;
  }

  &:last-of-type {
    margin-top: 10px;
  }
`
