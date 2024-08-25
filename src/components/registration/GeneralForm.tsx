import styled from 'styled-components'
import { PropsWithChildren } from 'react'
import { colors } from '@/constants/theme'
import { Props } from 'next/script'

const Form = styled.form`
  margin: 10px 0 20px;
`

const InputWrapper = styled.div`
  margin-bottom: 10px;
`

type InputProps = {
  $borderColor: string
}

const Input = styled.input<InputProps>`
  width: 100%;
  height: 60px;
  padding: 0 10px;

  font-size: 0.875rem;

  border: ${({ $borderColor }) => $borderColor};

  @media (min-width: 740px) {
    font-size: 1rem;
  }
`

const HiddenLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

const InputError = styled.p`
  color: ${colors.errTextRed};
  font-size: 0.8125rem;
  padding-top: 0.15em;
`

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Checkbox = styled.input`
  margin: 0 10px 0 0;
  flex-shrink: 0;
  height: 32px;
  width: 32px;
`

const Label = styled.label``

export const GeneralFormContainer = ({
  children,
  ...restProps
}: PropsWithChildren) => {
  return <Form {...restProps}>{children}</Form>
}

export const GeneralFormInputWrapper = ({
  children,
  ...restProps
}: PropsWithChildren) => {
  return <InputWrapper {...restProps}>{children}</InputWrapper>
}

type GeneralFormInputProps = HTMLElement & {
  children: React.ReactNode
  borderColor: string
}

export const GeneralFormInput = ({
  children,
  borderColor,
  ...restProps
}: GeneralFormInputProps) => {
  return <Input $borderColor={borderColor} {...restProps}></Input>
}

export const GeneralFormHiddenLabel = ({
  children,
  ...restProps
}: PropsWithChildren) => {
  return <HiddenLabel {...restProps}>{children}</HiddenLabel>
}

export const GeneralFormInputError = ({
  children,
  ...restProps
}: PropsWithChildren) => {
  return <InputError {...restProps}>{children}</InputError>
}

export const GeneralFormCheckboxWrapper = ({
  children,
  ...restProps
}: PropsWithChildren) => {
  return <CheckboxWrapper {...restProps}>{children}</CheckboxWrapper>
}

export const GeneralFormCheckbox = ({
  children,
  ...restProps
}: PropsWithChildren) => {
  return <Checkbox {...restProps}>{children}</Checkbox>
}

export const GeneralFormLabel = ({
  children,
  ...restProps
}: PropsWithChildren) => {
  return <Label {...restProps}>{children}</Label>
}

export const GeneralForm = () => {
  return (
    <GeneralFormContainer>
      <GeneralFormInputWrapper>
        <GeneralFormInput
          id='name'
          type='text'
          placeholder='First Name'
          value={state.firstName}
          borderColor={determineBorderColor(state, isFirstNameInValid)}
          onChange={(e) =>
            dispatch({ type: 'SET_FIRST_NAME', payload: e.target.value })
          }
        />
        <GeneralForm.HiddenLabel htmlFor='name'>
          First Name
        </GeneralForm.HiddenLabel>
        {firstNameError && (
          <GeneralForm.InputError>Please enter a name.</GeneralForm.InputError>
        )}
      </GeneralFormInputWrapper>

      <GeneralForm.InputWrapper>
        <GeneralForm.Input
          id='email'
          type='email'
          placeholder='Email'
          value={state.email}
          borderColor={determineBorderColor(isEmailInvalid)}
          onChange={(e) =>
            dispatch({ type: 'SET_EMAIL', payload: e.target.value })
          }
        />
        <GeneralForm.HiddenLabel htmlFor='email'>
          Email Address
        </GeneralForm.HiddenLabel>
        {emailError && (
          <GeneralForm.InputError>
            Please enter a valid email address.
          </GeneralForm.InputError>
        )}
      </GeneralForm.InputWrapper>

      <GeneralForm.InputWrapper>
        <GeneralForm.Input
          id='password'
          type='password'
          placeholder='Password'
          value={state.password}
          borderColor={determineBorderColor(isPasswordTooShort)}
          onChange={(e) =>
            dispatch({ type: 'SET_PASSWORD', payload: e.target.value })
          }
        />
        <GeneralForm.HiddenLabel htmlFor='password'>
          Password
        </GeneralForm.HiddenLabel>
        {passwordError && (
          <GeneralForm.InputError>
            Password should be at least 6 characters long.
          </GeneralForm.InputError>
        )}
      </GeneralForm.InputWrapper>

      <GeneralForm.CheckboxWrapper>
        <GeneralForm.Checkbox id='offers' type='checkbox' />
        <GeneralForm.Label htmlFor='offers'>
          Don't tick if don't want to not receive unsolicited emails from dodgy
          third parties 😜
        </GeneralForm.Label>
      </GeneralForm.CheckboxWrapper>

      <SubmitButton onClick={handleSubmit} maxWidth='440px'>
        Next
      </SubmitButton>
    </GeneralFormContainer>
  )
}
