'use client'

import { FirebaseError } from 'firebase/app'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, useEffect } from 'react'

import { MainContainer } from '@/components/shared/containers/MainContainer'
import { Footer } from '@/components/shared/footer'
import { HeroHeader } from '@/components/shared/hero-header/HeroHeader'
import { RegNavbar } from '@/components/shared/reg-navbar'
import { SemanticHeader } from '@/components/shared/SemanticHeader'
import { SigninForm } from '@/components/signin/signin-form'
import { LOGIN_API, PROFILE, SIGN_IN } from '@/constants/routes'
import { colors } from '@/constants/theme'
import { footerHomeRegistration } from '@/fixtures/footer-content'
import { isEmailValid } from '@/helpers/isEmailValid'
import { FORM_ACTION_TYPES, useFormValidation } from '@/hooks/useFormValidation'
import {
  FALLBACK_ERROR,
  processFirebaseError,
  REGISTRATION_SUCCESS,
} from '@/lib/firebase/authErrors'
import { firebaseAuthWeb } from '@/lib/firebase/firebaseClient'

export default function Signin() {
  const { state, dispatch } = useFormValidation()
  const router = useRouter()
  const searchParams = useSearchParams()

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

  useEffect(() => {
    // if user is redirected from the registration page
    // show the registration success message
    if (searchParams.has('rs')) {
      dispatch({
        type: FORM_ACTION_TYPES.SET_FIREBASE_ERROR,
        payload: REGISTRATION_SUCCESS,
      })
      router.replace(SIGN_IN)
    }
  }, [searchParams, dispatch, router])

  return (
    <>
      <HeroHeader noBgOnMobile>
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
      </HeroHeader>
    </>
  )
}
