import { useReducer } from 'react'

export type FormState = {
  firstName: string
  email: string
  password: string
  inputError: boolean
  firebaseError: string
}

export const FORM_ACTION_TYPES = {
  SET_FIRST_NAME: 'SET_FIRST_NAME',
  SET_EMAIL: 'SET_EMAIL',
  SET_PASSWORD: 'SET_PASSWORD',
  SET_INPUT_ERROR: 'SET_INPUT_ERROR',
  SET_FIREBASE_ERROR: 'SET_FIREBASE_ERROR',
} as const

export type FormAction =
  | { type: typeof FORM_ACTION_TYPES.SET_FIRST_NAME; payload: string }
  | { type: typeof FORM_ACTION_TYPES.SET_EMAIL; payload: string }
  | { type: typeof FORM_ACTION_TYPES.SET_PASSWORD; payload: string }
  | { type: typeof FORM_ACTION_TYPES.SET_INPUT_ERROR; payload: boolean }
  | { type: typeof FORM_ACTION_TYPES.SET_FIREBASE_ERROR; payload: string }
  | { type: string; payload: never }

type FormReducer = (state: FormState, action: FormAction) => FormState

const reducer: FormReducer = (state, action) => {
  switch (action.type) {
    case FORM_ACTION_TYPES.SET_FIRST_NAME:
      return { ...state, firstName: action.payload }
    case FORM_ACTION_TYPES.SET_EMAIL:
      return { ...state, email: action.payload }
    case FORM_ACTION_TYPES.SET_PASSWORD:
      return { ...state, password: action.payload }
    case FORM_ACTION_TYPES.SET_INPUT_ERROR:
      return { ...state, inputError: action.payload }
    case FORM_ACTION_TYPES.SET_FIREBASE_ERROR:
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
