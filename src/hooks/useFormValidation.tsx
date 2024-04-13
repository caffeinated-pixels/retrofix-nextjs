import { useReducer } from 'react'

type FormState = {
  firstName: string
  email: string
  password: string
  inputError: boolean
  firebaseError: string
}

type FormAction = {
  type: string
  payload: string | boolean
}

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

  return [state, dispatch]
}
