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
