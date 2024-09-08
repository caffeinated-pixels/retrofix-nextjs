'use client'

import PlanFormTable from '@/components/registration/planform-table'
import { RegContentContainer } from '@/components/registration/RegContentContainer'
import { StepIndicator } from '@/components/registration/StepIndicator'
import { StepTitle } from '@/components/registration/StepTitle'
import {
  RegContextBody,
  RegList,
  RegListItem,
  StepHeaderContainer,
} from '@/components/registration/styled'
import { PageContainer } from '@/components/shared/containers/PageContainer'
import { Footer } from '@/components/shared/footer'
import { NavLink } from '@/components/shared/nav-link'
import { RegNavbar } from '@/components/shared/reg-navbar'
import { SubmitButton } from '@/components/shared/submit-button'
import { PLAN_FORM, PROFILE, REG_FORM, SIGN_IN } from '@/constants/routes'
import { colors } from '@/constants/theme'
import { useSignUpContext } from '@/context/SignUpContext'
import { footerHomeRegistration } from '@/fixtures/footer-content'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'

const RegContainerPlanForm = styled.div``

export default function PlanformPage() {
  const { globalFirstName, globalEmail, globalPassword } = useSignUpContext()
  const router = useRouter()

  const completeRegistration = async () => {
    // const user = await firebaseRegistratio(
    //   globalFirstName,
    //   globalEmail,
    //   globalPassword
    // )
    // if (user?.email) {
    //   router.push(PROFILE)
    // } else {
    //   router.push(REG_FORM)
    // }
  }

  return (
    <PageContainer $bgColor={colors.bgWhite} $txtColor={colors.textDarkGrey}>
      <RegNavbar>
        <NavLink href={SIGN_IN}>Sign In</NavLink>
      </RegNavbar>
      <RegContentContainer>
        <RegContainerPlanForm>
          <StepHeaderContainer>
            <StepIndicator currentStep='2' />
            <StepTitle>Choose the plan that&apos;s right for you</StepTitle>
          </StepHeaderContainer>
          <RegContextBody $regForm={true}>
            <RegList $planform>
              <RegListItem $planform>
                Content that&apos;s literally unwatchable.
              </RegListItem>
              <RegListItem $planform>
                Recommendations based on someone else&apos;s tastes.
              </RegListItem>
              <RegListItem $planform>None of these plans are real!</RegListItem>
            </RegList>
          </RegContextBody>
        </RegContainerPlanForm>
        <PlanFormTable />
        <SubmitButton
          // route={PLAN_FORM}
          maxWidth='440px'
          onClick={completeRegistration}
        >
          Complete Registration
        </SubmitButton>
      </RegContentContainer>
      <Footer
        footerContent={footerHomeRegistration}
        bgColor={colors.bgLightGrey}
        borderTop={colors.borderLightGrey}
      />
    </PageContainer>
  )
}
