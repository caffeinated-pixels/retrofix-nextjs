'use client'

import { RegContentContainer } from '@/components/registration/RegContentContainer'
import {
  RegFormContainer,
  RegFormText,
  StepHeaderContainer,
} from '@/components/registration/styled'
import { StepIndicator } from '@/components/registration/StepIndicator'
import { StepTitle } from '@/components/registration/StepTitle'
import { PageContainer } from '@/components/shared/containers/PageContainer'
import { NavLink } from '@/components/shared/nav-link'
import { RegNavbar } from '@/components/shared/reg-navbar'
import { SIGN_IN, CHOOSE_PLAN } from '@/constants/routes'
import { colors } from '@/constants/theme'
import { useSignUpContext } from '@/context/SignUpContext'
import { isEmailValid } from '@/helpers/isEmailValid'
import { useFormValidation } from '@/hooks/useFormValidation'
import { useRouter } from 'next/navigation'

import { footerHomeRegistration } from '@/fixtures/footer-content'
import { Footer } from '@/components/shared/footer'
import { GeneralForm } from '@/components/registration/general-form'
import { FormEvent } from 'react'

export type FormHandleSubmit = (e: FormEvent<HTMLFormElement>) => void

export default function RegForm() {
  const {
    globalFirstName,
    setGlobalFirstName,
    globalEmail,
    setGlobalEmail,
    globalPassword,
    setGlobalPassword,
  } = useSignUpContext()

  const { state, dispatch } = useFormValidation({
    firstName: globalFirstName,
    email: globalEmail,
    password: globalPassword,
    inputError: false,
    firebaseError: '',
  })

  const router = useRouter()

  const isFirstNameInValid = state.firstName.trim().length === 0
  const isEmailInvalid = !isEmailValid(state.email)
  const isPasswordTooShort = state.password.length < 6

  const handleSubmit: FormHandleSubmit = (
    e: FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault()

    if (isFirstNameInValid || isEmailInvalid || isPasswordTooShort) {
      dispatch({ type: 'SET_INPUT_ERROR', payload: true })
    } else {
      dispatch({ type: 'SET_INPUT_ERROR', payload: false })
      setGlobalFirstName(state.firstName.trim())
      setGlobalEmail(state.email.trim())
      setGlobalPassword(state.password.trim())
      router.push(CHOOSE_PLAN)
    }
  }

  return (
    <PageContainer $bgColor={colors.bgWhite} $txtColor={colors.textDarkGrey}>
      <RegNavbar>
        <NavLink href={SIGN_IN}>Sign In</NavLink>
      </RegNavbar>
      <RegContentContainer>
        <RegFormContainer>
          <StepHeaderContainer>
            <StepIndicator currentStep='1' />
            <StepTitle>Create a password to start your membership</StepTitle>
          </StepHeaderContainer>

          <RegFormText>
            Just a couple more steps and you&apos;re done!
          </RegFormText>
          <RegFormText>
            We love paperwork and small print. Get ready to sign away your soul!
          </RegFormText>
          <GeneralForm
            formState={state}
            isFirstNameInValid={isFirstNameInValid}
            isEmailInvalid={isEmailInvalid}
            isPasswordTooShort={isPasswordTooShort}
            dispatch={dispatch}
            handleSubmit={handleSubmit}
          />
        </RegFormContainer>
      </RegContentContainer>
      <Footer
        footerContent={footerHomeRegistration}
        bgColor={colors.bgLightGrey}
        borderTop={colors.borderLightGrey}
      />
    </PageContainer>
  )
}
