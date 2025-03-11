'use client'

import { MainContainer } from '@/components/shared/containers/MainContainer'
import { Footer } from '@/components/shared/footer'
import { Header } from '@/components/shared/header'
import { RegNavbar } from '@/components/shared/reg-navbar'
import { SemanticHeader } from '@/components/shared/SemanticHeader'
import { SigninForm } from '@/components/signin/signin-form'
import { colors } from '@/constants/theme'
import { footerHomeRegistration } from '@/fixtures/footer-content'
import { isEmailValid } from '@/helpers/isEmailValid'
import { useFormValidation } from '@/hooks/useFormValidation'
import { firebaseAuthWeb } from '@/lib/firebase/firebaseClient'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

export default function Signin() {
  const { state, dispatch } = useFormValidation()
  const router = useRouter()

  const isEmailInvalid = !isEmailValid(state.email)
  const isPasswordTooShort = state.password.length < 6

  const emailError = state.inputError && isEmailInvalid
  const passwordError = state.inputError && isPasswordTooShort

  const processFirebaseError = (errorMsg: string) => {
    console.log('turbo-signin-error', errorMsg)
    // TODO: add more error types, see https://firebase.google.com/docs/auth/admin/errors
    // TODO: extract function & constants
    const isEmailError = /user-not-found/.test(errorMsg)
    const isPasswordError = /wrong-password/.test(errorMsg)
    const isInvalidCredentialsError = /invalid-credential/.test(errorMsg)

    if (isEmailError) {
      dispatch({
        type: 'SET_FIREBASE_ERROR',
        payload: `Sorry, we can't find an account with this email address. Please try again`,
      })
    }

    if (isPasswordError) {
      dispatch({
        type: 'SET_FIREBASE_ERROR',
        payload: `Incorrect password. Please try again`,
      })
    }

    if (isInvalidCredentialsError) {
      dispatch({
        type: 'SET_FIREBASE_ERROR',
        payload: `Invalid login credentials. Please try again`,
      })
    }
  }

  const contactFirebase = async () => {
    try {
      const credential = await signInWithEmailAndPassword(
        firebaseAuthWeb,
        state.email.trim(),
        state.password.trim()
      )
      const idToken = await credential.user.getIdToken()

      await fetch('/api/login', {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      })

      router.replace('/') // TODO: redirect to profile page once implemented
    } catch (error) {
      if (error instanceof Error) {
        processFirebaseError(error.message)
      }
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isEmailInvalid || isPasswordTooShort) {
      dispatch({ type: 'SET_INPUT_ERROR', payload: true })
    } else {
      dispatch({ type: 'SET_INPUT_ERROR', payload: false })
      contactFirebase()
    }
  }

  return (
    <>
      <Header noBgOnMobile>
        <SemanticHeader>
          <RegNavbar noBorder />
        </SemanticHeader>

        <MainContainer>
          <SigninForm
            email={state.email}
            emailError={emailError}
            password={state.password}
            passwordError={passwordError}
            firebaseError={state.firebaseError}
            handleSubmit={handleSubmit}
            dispatch={dispatch}
          />
        </MainContainer>

        <Footer
          footerContent={footerHomeRegistration}
          bgColor={colors.bgBlackTrans}
          borderTop={colors.textMedGrey}
          borderOnlyOnMobile
        />
      </Header>
    </>
  )
}
