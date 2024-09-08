'use client'

import { RegContentContainer } from '@/components/registration/RegContentContainer'
import { StepIndicator } from '@/components/registration/StepIndicator'
import { StepTitle } from '@/components/registration/StepTitle'
import {
  RegContainer,
  RegContextBody,
  RegList,
  RegListItem,
  StepCheckmarkLogo,
  StepHeaderContainer,
  StepLogoContainer,
} from '@/components/registration/styled'
import { PageContainer } from '@/components/shared/containers/PageContainer'
import { Footer } from '@/components/shared/footer'
import { NavLink } from '@/components/shared/nav-link'
import { RegNavbar } from '@/components/shared/reg-navbar'
import { SubmitButton } from '@/components/shared/submit-button'
import { PLAN_FORM, SIGN_IN } from '@/constants/routes'
import { colors } from '@/constants/theme'
import { footerHomeRegistration } from '@/fixtures/footer-content'
import { useRouter } from 'next/navigation'

export default function ChoosePlanPage() {
  const router = useRouter()

  const nextPage = () => {
    router.push(PLAN_FORM)
  }

  return (
    <PageContainer $bgColor={colors.bgWhite} $txtColor={colors.textDarkGrey}>
      <RegNavbar>
        <NavLink href={SIGN_IN}>Sign In</NavLink>
      </RegNavbar>
      <RegContentContainer>
        <RegContainer>
          <StepLogoContainer>
            <StepCheckmarkLogo />
          </StepLogoContainer>

          <StepHeaderContainer>
            <StepIndicator currentStep='2' />
            <StepTitle>Choose your plan.</StepTitle>
          </StepHeaderContainer>
          <RegContextBody>
            <RegList>
              <RegListItem>
                Stay with us. Forever, and ever, and ever.
              </RegListItem>
              <RegListItem>
                Everything on RetroFix for more than you can afford.
              </RegListItem>
              <RegListItem>
                Awesome shows that you can&apos;t watch.
              </RegListItem>
            </RegList>
          </RegContextBody>
        </RegContainer>
        <SubmitButton onClick={nextPage}>Next</SubmitButton>
      </RegContentContainer>
      <Footer
        footerContent={footerHomeRegistration}
        bgColor={colors.bgLightGrey}
        borderTop={colors.borderLightGrey}
      />
    </PageContainer>
  )
}
