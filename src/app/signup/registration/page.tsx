'use client'

import { PageContainer } from '@/components/shared/containers/PageContainer'
import { RegContentContainer } from '@/components/registration/RegContentContainer'
import { Footer } from '@/components/shared/footer'
import { NavLink } from '@/components/shared/nav-link'
import { RegNavbar } from '@/components/shared/reg-navbar'
import { REG_FORM, SIGN_IN } from '@/constants/routes'
import { colors } from '@/constants/theme'
import { footerHomeRegistration } from '@/fixtures/footer-content'
import { useRouter } from 'next/navigation'
import { StepIndicator } from '@/components/registration/StepIndicator'
import { StepTitle } from '@/components/registration/StepTitle'
import {
  RegContainer,
  RegContextBody,
  StepDevicesLogo,
  StepHeaderContainer,
  StepLogoContainer,
  RegParagraph,
} from '@/components/registration/styled'
import { SubmitButton } from '@/components/shared/submit-button'

export default function RegistrationPage() {
  const router = useRouter()

  const nextPage = () => {
    router.push(REG_FORM)
  }

  return (
    <PageContainer $bgColor={colors.bgWhite} $txtColor={colors.textDarkGrey}>
      <RegNavbar>
        <NavLink href={SIGN_IN}>Sign In</NavLink>
      </RegNavbar>
      <RegContentContainer>
        <RegContainer>
          <StepLogoContainer>
            <StepDevicesLogo />
          </StepLogoContainer>
          <StepHeaderContainer>
            <StepIndicator currentStep='1' />
            <StepTitle>Finish setting up your account</StepTitle>
          </StepHeaderContainer>

          <RegContextBody>
            <RegParagraph>
              RetroFix uses the Firebase API for user authentication. You can
              also signin to RetroFix using the guest account.
            </RegParagraph>
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
