import styled from 'styled-components'

export const RegContainer = styled.div`
  max-width: 340px;
  margin: 0 auto 0;

  @media (min-width: 600px) {
    text-align: center;
  }
`

type RegContextBodyProps = {
  $regForm?: boolean
}

export const RegContextBody = styled.div<RegContextBodyProps>`
  font-size: 1.0625rem;
  max-width: 300px;

  @media (min-width: 600px) {
    margin: ${({ $regForm }) => ($regForm ? '' : '0 auto')};
  }
`

export const RegParagraph = styled.p``

export const RegFormContainer = styled.div`
  max-width: 440px;
  margin: 20px auto 0;
`

export const RegFormText = styled.p`
  font-size: 1.1875rem;

  & + & {
    margin-top: 10px;
  }
`

export const StepDevicesLogo = styled.div`
  width: 260px;
  height: 90px;
  display: inline-block;

  background-image: url('../images/misc/reg-devices.png');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 260px;
`

export const StepHeaderContainer = styled.div``

export const StepLogoContainer = styled.div`
  margin: 30% auto 20px;
`

export const StepCheckmarkLogo = styled.div`
  width: 50px;
  height: 50px;
  display: inline-block;

  background-image: url('../images/misc/reg-checkmark-circle.png');
  background-size: contain;
`

type RegListProps = {
  $planform?: boolean
}

export const RegList = styled.ul<RegListProps>`
  margin: 25px 0 44px;
  margin: ${({ $planform }) => ($planform ? '4px 0 20px' : '25px 0 44px')};
  font-size: 1.0625rem;
  font-size: ${({ $planform }) => ($planform ? '1rem' : '1.0625rem')};
  padding-left: 1.2em;
`

export const RegListItem = styled.li<RegListProps>`
  padding-left: 0.75em;
  text-align: left;

  &::marker {
    color: red;
    content: '\f00c';
    font-size: 1.5rem;
    font-size: ${({ $planform }) => ($planform ? '1rem' : '1.5rem')};
    font-family: 'Font Awesome 5 Free';
    font-weight: 700;
  }

  & + & {
    margin-top: ${({ $planform }) => ($planform ? '8px' : '20px')};
  }
`
