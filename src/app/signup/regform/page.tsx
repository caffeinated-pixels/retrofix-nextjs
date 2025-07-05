'use client'

import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

import { RegistrationFooter } from '@/components/registration/footer/RegistrationFooter'
import { GeneralForm } from '@/components/registration/general-form'
import { RegContentContainer } from '@/components/registration/RegContentContainer'
import { StepIndicator } from '@/components/registration/StepIndicator'
import { StepTitle } from '@/components/registration/StepTitle'
import {
  RegFormContainer,
  RegFormText,
  StepHeaderContainer,
} from '@/components/registration/styled'
import { PageContainer } from '@/components/shared/containers/PageContainer'
import { NavLink } from '@/components/shared/nav-link'
import { RegNavbar } from '@/components/shared/reg-navbar'
import { CHOOSE_PLAN, SIGN_IN } from '@/constants/routes'
import { colors } from '@/constants/theme'
import { useSignUpContext } from '@/context/SignUpContext'
import { isEmailValid } from '@/helpers/isEmailValid'
import { useFormValidation } from '@/hooks/useFormValidation'
import { type FormHandleSubmit } from '@/types/sharedTypes'

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
      <RegistrationFooter />
    </PageContainer>
  )
}
