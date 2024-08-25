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
import { SIGN_IN, SIGN_UP } from '@/constants/routes'
import {
  colors,
  textInputBorder,
  textInputBorderBad,
  textInputBorderGood,
} from '@/constants/theme'
import { useSignUpContext } from '@/context/SignUpContext'
import { isEmailValid } from '@/helpers/isEmailValid'
import { FormState, useFormValidation } from '@/hooks/useFormValidation'
import { useRouter } from 'next/navigation'
import {
  GeneralFormContainer,
  GeneralFormInput,
  GeneralFormInputWrapper,
} from '@/components/registration/GeneralForm'
import { footerHomeRegistration } from '@/fixtures/footer-content'
import { Footer } from '@/components/shared/footer'

const determineBorderColor = (state: FormState, validationError: boolean) => {
  if (!state.inputError) {
    return textInputBorder
  }

  if (validationError) {
    return textInputBorderBad
  } else {
    return textInputBorderGood
  }
}

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

  const firstNameError = state.inputError && isFirstNameInValid
  const emailError = state.inputError && isEmailInvalid
  const passwordError = state.inputError && isPasswordTooShort

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isFirstNameInValid || isEmailInvalid || isPasswordTooShort) {
      dispatch({ type: 'SET_INPUT_ERROR', payload: true })
    } else {
      dispatch({ type: 'SET_INPUT_ERROR', payload: false })
      setGlobalFirstName(state.firstName.trim())
      setGlobalEmail(state.email.trim())
      setGlobalPassword(state.password.trim())
      router.push(SIGN_UP)
    }
  }

  // return <h1>RegForm</h1>

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
          {/* <GeneralFormContainer>
            <GeneralFormInputWrapper>
              <GeneralFormInput
                id='name'
                type='text'
                placeholder='First Name'
                value={state.firstName}
                borderColor={determineBorderColor(state, isFirstNameInValid)}
                onChange={(e) =>
                  dispatch({ type: 'SET_FIRST_NAME', payload: e.target.value })
                }
              />
              <GeneralForm.HiddenLabel htmlFor='name'>
                First Name
              </GeneralForm.HiddenLabel>
              {firstNameError && (
                <GeneralForm.InputError>
                  Please enter a name.
                </GeneralForm.InputError>
              )}
            </GeneralFormInputWrapper>

            <GeneralForm.InputWrapper>
              <GeneralForm.Input
                id='email'
                type='email'
                placeholder='Email'
                value={state.email}
                borderColor={determineBorderColor(isEmailInvalid)}
                onChange={(e) =>
                  dispatch({ type: 'SET_EMAIL', payload: e.target.value })
                }
              />
              <GeneralForm.HiddenLabel htmlFor='email'>
                Email Address
              </GeneralForm.HiddenLabel>
              {emailError && (
                <GeneralForm.InputError>
                  Please enter a valid email address.
                </GeneralForm.InputError>
              )}
            </GeneralForm.InputWrapper>

            <GeneralForm.InputWrapper>
              <GeneralForm.Input
                id='password'
                type='password'
                placeholder='Password'
                value={state.password}
                borderColor={determineBorderColor(isPasswordTooShort)}
                onChange={(e) =>
                  dispatch({ type: 'SET_PASSWORD', payload: e.target.value })
                }
              />
              <GeneralForm.HiddenLabel htmlFor='password'>
                Password
              </GeneralForm.HiddenLabel>
              {passwordError && (
                <GeneralForm.InputError>
                  Password should be at least 6 characters long.
                </GeneralForm.InputError>
              )}
            </GeneralForm.InputWrapper>

            <GeneralForm.CheckboxWrapper>
              <GeneralForm.Checkbox id='offers' type='checkbox' />
              <GeneralForm.Label htmlFor='offers'>
                Don't tick if don't want to not receive unsolicited emails from
                dodgy third parties 😜
              </GeneralForm.Label>
            </GeneralForm.CheckboxWrapper>

            <SubmitButton onClick={handleSubmit} maxWidth='440px'>
              Next
            </SubmitButton>
          </GeneralFormContainer> */}
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
