import {
  textInputBorder,
  textInputBorderBad,
  textInputBorderGood,
} from '@/constants/theme'
import {
  Checkbox,
  CheckboxWrapper,
  Form,
  HiddenLabel,
  Input,
  InputError,
  InputWrapper,
  Label,
} from './styled'
import { SubmitButton } from '@/components/shared/submit-button'
import { FormAction, FormState } from '@/hooks/useFormValidation'
import { FormHandleSubmit } from '@/app/signup/regform/page'

const determineBorderColor = (
  inputError: boolean,
  validationError?: boolean
) => {
  if (inputError) {
    return textInputBorder
  }

  if (validationError) {
    return textInputBorderBad
  } else {
    return textInputBorderGood
  }
}

type GeneralFormProps = {
  formState: FormState
  isFirstNameInValid: boolean
  isEmailInvalid: boolean
  isPasswordTooShort: boolean
  dispatch: (action: FormAction) => void
  handleSubmit: FormHandleSubmit
}

export const GeneralForm = ({
  formState,
  isFirstNameInValid,
  isEmailInvalid,
  isPasswordTooShort,

  dispatch,
  handleSubmit,
}: GeneralFormProps) => {
  const { firstName, email, password, inputError } = formState

  const firstNameError = inputError && isFirstNameInValid
  const emailError = inputError && isEmailInvalid
  const passwordError = inputError && isPasswordTooShort

  return (
    <Form>
      <InputWrapper>
        <Input
          id='name'
          type='text'
          placeholder='First Name'
          value={firstName}
          $borderColor={determineBorderColor(inputError, isFirstNameInValid)}
          onChange={(e) =>
            dispatch({ type: 'SET_FIRST_NAME', payload: e.target.value })
          }
        />
        <HiddenLabel htmlFor='name'>First Name</HiddenLabel>
        {firstNameError && <InputError>Please enter a name.</InputError>}
      </InputWrapper>

      <InputWrapper>
        <Input
          id='email'
          type='email'
          placeholder='Email'
          value={email}
          $borderColor={determineBorderColor(isEmailInvalid)}
          onChange={(e) =>
            dispatch({ type: 'SET_EMAIL', payload: e.target.value })
          }
        />
        <HiddenLabel htmlFor='email'>Email Address</HiddenLabel>
        {emailError && (
          <InputError>Please enter a valid email address.</InputError>
        )}
      </InputWrapper>

      <InputWrapper>
        <Input
          id='password'
          type='password'
          placeholder='Password'
          value={password}
          $borderColor={determineBorderColor(isPasswordTooShort)}
          onChange={(e) =>
            dispatch({ type: 'SET_PASSWORD', payload: e.target.value })
          }
        />
        <HiddenLabel htmlFor='password'>Password</HiddenLabel>
        {passwordError && (
          <InputError>
            Password should be at least 6 characters long.
          </InputError>
        )}
      </InputWrapper>

      <CheckboxWrapper>
        <Checkbox id='offers' type='checkbox' />
        <Label htmlFor='offers'>
          Don&apos;t tick if don&apos;t want to not receive unsolicited emails
          from dodgy third parties 😜
        </Label>
      </CheckboxWrapper>

      <SubmitButton onClick={handleSubmit} maxWidth='440px'>
        Next
      </SubmitButton>
    </Form>
  )
}
