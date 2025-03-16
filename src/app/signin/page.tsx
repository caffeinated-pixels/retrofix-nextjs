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
import { FORM_ACTION_TYPES, useFormValidation } from '@/hooks/useFormValidation'
import { FALLBACK_ERROR, processFirebaseError } from '@/lib/firebase/authErrors'
import { firebaseAuthWeb } from '@/lib/firebase/firebaseClient'
import { signInWithEmailAndPassword, AuthError } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'
import { FirebaseError } from 'firebase/app'
import { LOGIN_API, PROFILE } from '@/constants/routes'

export default function Signin() {
  const { state, dispatch } = useFormValidation()
  const router = useRouter()

  const isEmailInvalid = !isEmailValid(state.email)
  const isPasswordTooShort = state.password.length < 6

  const emailError = state.inputError && isEmailInvalid
  const passwordError = state.inputError && isPasswordTooShort

  const contactFirebase = async () => {
    try {
      const credential = await signInWithEmailAndPassword(
        firebaseAuthWeb,
        state.email.trim(),
        state.password.trim()
      )
      const idToken = await credential.user.getIdToken()

      await fetch(LOGIN_API, {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      })

      router.replace(PROFILE)
    } catch (error) {
      if (error instanceof FirebaseError) {
        processFirebaseError(error.code, dispatch)
      } else {
        dispatch({
          type: FORM_ACTION_TYPES.SET_FIREBASE_ERROR,
          payload: FALLBACK_ERROR,
        })
      }
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isEmailInvalid || isPasswordTooShort) {
      dispatch({ type: FORM_ACTION_TYPES.SET_INPUT_ERROR, payload: true })
    } else {
      dispatch({ type: FORM_ACTION_TYPES.SET_INPUT_ERROR, payload: false })
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
