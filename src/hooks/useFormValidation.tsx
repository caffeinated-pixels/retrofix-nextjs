import { useReducer } from 'react'

export type FormState = {
  firstName: string
  email: string
  password: string
  inputError: boolean
  firebaseError: string
}

export type FormAction =
  | { type: 'SET_FIRST_NAME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_PASSWORD'; payload: string }
  | { type: 'SET_INPUT_ERROR'; payload: boolean }
  | { type: 'SET_FIREBASE_ERROR'; payload: string }
  | { type: string; payload: never }

type FormReducer = (state: FormState, action: FormAction) => FormState

const reducer: FormReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIRST_NAME':
      return { ...state, firstName: action.payload }
    case 'SET_EMAIL':
      return { ...state, email: action.payload }
    case 'SET_PASSWORD':
      return { ...state, password: action.payload }
    case 'SET_INPUT_ERROR':
      return { ...state, inputError: action.payload }
    case 'SET_FIREBASE_ERROR':
      return { ...state, firebaseError: action.payload }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const useFormValidation = (
  initialState = {
    firstName: '',
    email: '',
    password: '',
    inputError: false,
    firebaseError: '',
  }
) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return { state, dispatch }
}
