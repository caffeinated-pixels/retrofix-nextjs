'use client'

import { FirebaseError } from 'firebase/app'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'

import { RegistrationFooter } from '@/components/registration/footer/RegistrationFooter'
import { PlanFormTable } from '@/components/registration/planform-table/PlanFormTable'
import { RegListItem } from '@/components/registration/reg-list/RegListItem'
import { RegList } from '@/components/registration/reg-list/styled'
import { RegContentContainer } from '@/components/registration/RegContentContainer'
import { StepIndicator } from '@/components/registration/StepIndicator'
import { StepTitle } from '@/components/registration/StepTitle'
import {
  RegContextBody,
  StepHeaderContainer,
} from '@/components/registration/styled'
import { PageContainer } from '@/components/shared/containers/PageContainer'
import { NavLink } from '@/components/shared/nav-link'
import { RegNavbar } from '@/components/shared/reg-navbar'
import { SubmitButton } from '@/components/shared/submit-button'
import { SIGN_IN } from '@/constants/routes'
import { colors } from '@/constants/theme'
import { useSignUpContext } from '@/context/SignUpContext'
import { FALLBACK_ERROR } from '@/lib/firebase/authErrors'
import { registerWithFirebase } from '@/lib/firebase/registerWithFirebase'

const RegContainerPlanForm = styled.div``

export default function PlanformPage() {
  const { globalFirstName, globalEmail, globalPassword } = useSignUpContext()
  const router = useRouter()

  const completeRegistration = async () => {
    const { success, error } = await registerWithFirebase(
      globalFirstName,
      globalEmail,
      globalPassword
    )

    if (success) {
      router.replace(`${SIGN_IN}?rs=true`)
    } else {
      const errorMessage =
        error instanceof FirebaseError ? error.message : FALLBACK_ERROR
      alert(errorMessage)
    }
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
              <RegListItem planform>
                Content that&apos;s literally unwatchable.
              </RegListItem>
              <RegListItem planform>
                Recommendations based on someone else&apos;s tastes.
              </RegListItem>
              <RegListItem planform>None of these plans are real!</RegListItem>
            </RegList>
          </RegContextBody>
        </RegContainerPlanForm>
        <PlanFormTable />
        <SubmitButton maxWidth='440px' onClick={completeRegistration}>
          Complete Registration
        </SubmitButton>
      </RegContentContainer>
      <RegistrationFooter />
    </PageContainer>
  )
}
