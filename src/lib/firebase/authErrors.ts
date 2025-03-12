import { FORM_ACTION_TYPES } from '@/hooks/useFormValidation'

// Error type constants
export const FIREBASE_ERROR_CODES = {
  USER_NOT_FOUND: 'auth/user-not-found',
  WRONG_PASSWORD: 'auth/wrong-password',
  INVALID_CREDENTIALS: 'auth/invalid-credential',
  INVALID_EMAIL: 'auth/invalid-email',
  TOO_MANY_REQUESTS: 'auth/too-many-requests',
  USER_DISABLED: 'auth/user-disabled',
} as const

export const FALLBACK_ERROR = 'An error occurred. Please try again later'

type FirebaseErrorAction = {
  type: 'SET_FIREBASE_ERROR'
  payload: string
}

/**
 * Processes Firebase authentication error messages and returns appropriate user-friendly messages
 *
 * @param errorMsg - The raw error message from Firebase
 * @param dispatch - The dispatch function to update state with the error message
 */
export const processFirebaseError = (
  errorMsg: string,
  dispatch: (action: FirebaseErrorAction) => void
) => {
  console.log('turbo-signin-error', errorMsg)

  // TODO: add more error types, see https://firebase.google.com/docs/auth/admin/errors
  const isEmailError = /user-not-found/.test(errorMsg)
  const isPasswordError = /wrong-password/.test(errorMsg)
  const isInvalidCredentialsError = /invalid-credential/.test(errorMsg)

  switch (true) {
    case isEmailError:
      dispatch({
        type: FORM_ACTION_TYPES.SET_FIREBASE_ERROR,
        payload: `Sorry, we can't find an account with this email address. Please try again`,
      })
      break
    case isPasswordError:
      dispatch({
        type: FORM_ACTION_TYPES.SET_FIREBASE_ERROR,
        payload: `Incorrect password. Please try again`,
      })
      break
    case isInvalidCredentialsError:
      dispatch({
        type: FORM_ACTION_TYPES.SET_FIREBASE_ERROR,
        payload: `Invalid login credentials. Please try again`,
      })
      break
    default:
      dispatch({
        type: FORM_ACTION_TYPES.SET_FIREBASE_ERROR,
        payload: FALLBACK_ERROR,
      })
  }
}
