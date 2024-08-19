import { REGISTRATION } from '@/constants/routes'
import {
  ChevronIcon,
  EmailForm,
  EmailInput,
  EmailLabel,
  EmailSubmit,
  Form,
  FormText,
  InputError,
  InputWrapper,
} from './styled'
import { isEmailValid } from '@/helpers/isEmailValid'
import { useSignUpContext } from '@/context/SignUpContext'
import { useRouter } from 'next/navigation'
import { useFormValidation } from '@/hooks/useFormValidation'

export default function GetStartedForm() {
  const { globalEmail, setGlobalEmail } = useSignUpContext()
  const { state, dispatch } = useFormValidation({
    firstName: '',
    email: globalEmail,
    inputError: false,
    password: '',
    firebaseError: '',
  })

  const router = useRouter()

  const emailError = state.inputError && !isEmailValid(state.email)

  const Signup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (isEmailValid(state.email)) {
      setGlobalEmail(state.email)
      router.push(REGISTRATION)
    } else {
      dispatch({ type: 'SET_INPUT_ERROR', payload: true })
    }
  }

  return (
    <Form>
      <FormText>
        Ready to sign away your soul? Enter your email to get started.
      </FormText>
      <EmailForm>
        <InputWrapper>
          <EmailInput
            id='email-input'
            type='email'
            placeholder='Email address'
            value={state.email}
            onChange={(e) =>
              dispatch({ type: 'SET_EMAIL', payload: e.target.value })
            }
            $emailError={emailError}
          />
          <EmailLabel htmlFor='email-input'>Email address</EmailLabel>
        </InputWrapper>

        {emailError && (
          <InputError>Please enter a valid email address</InputError>
        )}

        <EmailSubmit onClick={Signup}>
          Get Started
          <ChevronIcon className='fas fa-chevron-right' />
        </EmailSubmit>
      </EmailForm>
    </Form>
  )
}
