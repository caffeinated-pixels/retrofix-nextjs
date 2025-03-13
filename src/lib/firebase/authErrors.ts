import { FORM_ACTION_TYPES } from '@/hooks/useFormValidation'

// Error type constants
// https://firebase.google.com/docs/auth/admin/errors
const FIREBASE_ERROR_CODES = {
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
 * @param errorCode - The raw error code from Firebase
 * @param dispatch - The dispatch function to update state with the error message
 */
export const processFirebaseError = (
  errorCode: string,
  dispatch: (action: FirebaseErrorAction) => void
) => {
  switch (errorCode) {
    case FIREBASE_ERROR_CODES.USER_NOT_FOUND:
      dispatch({
        type: FORM_ACTION_TYPES.SET_FIREBASE_ERROR,
        payload: `Sorry, we can't find an account with this email address. Please try again`,
      })
      break
    case FIREBASE_ERROR_CODES.INVALID_EMAIL:
      dispatch({
        type: FORM_ACTION_TYPES.SET_FIREBASE_ERROR,
        payload: `Invalid email address. Please try again`,
      })
      break
    case FIREBASE_ERROR_CODES.WRONG_PASSWORD:
      dispatch({
        type: FORM_ACTION_TYPES.SET_FIREBASE_ERROR,
        payload: `Incorrect password. Please try again`,
      })
      break
    case FIREBASE_ERROR_CODES.INVALID_CREDENTIALS:
      dispatch({
        type: FORM_ACTION_TYPES.SET_FIREBASE_ERROR,
        payload: `Invalid login credentials. Please try again`,
      })
      break
    case FIREBASE_ERROR_CODES.TOO_MANY_REQUESTS:
      dispatch({
        type: FORM_ACTION_TYPES.SET_FIREBASE_ERROR,
        payload: `Too many requests. Please try again later`,
      })
      break
    case FIREBASE_ERROR_CODES.USER_DISABLED:
      dispatch({
        type: FORM_ACTION_TYPES.SET_FIREBASE_ERROR,
        payload: `Your account has been disabled. Please contact support`,
      })
      break
    default:
      dispatch({
        type: FORM_ACTION_TYPES.SET_FIREBASE_ERROR,
        payload: FALLBACK_ERROR,
      })
  }
}
