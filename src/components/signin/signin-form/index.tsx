import {
  Form,
  Input as GeneralFormInput,
  HiddenLabel,
} from '@/components/registration/general-form/styled'
import { SubmitButton } from '@/components/shared/submit-button'
import { HOME } from '@/constants/routes'
import { colors, inputErrorBorderBottom } from '@/constants/theme'
import { FormAction } from '@/hooks/useFormValidation'
import NextLink from 'next/link'
import { FormEvent, PropsWithChildren } from 'react'
import styled from 'styled-components'

export const ContentBody = styled.div`
  width: 100%;
  min-height: 550px;
  padding: 20px 5% 30px;

  border-radius: 4px;

  @media (min-width: 740px) {
    min-height: 660px;
    width: 450px;
    margin: 0 auto;

    background-color: ${colors.bgBlackTrans};
    padding: 60px 68px 40px;
    margin-bottom: 90px;
  }
`

export const Container = styled.div``

export const Title = styled.h1`
  margin-bottom: 28px;
`
export const FirebaseErrorDisplay = styled.p`
  margin-bottom: 16px;
  padding: 10px 20px;

  font-size: 0.875rem;
  background-color: ${colors.errTextOrange};

  border-radius: 4px;
`

// take and modify CSS for GeneralForm.Input rather than passing down excessive props
export const InputWrapper = styled.div`
  margin-bottom: 16px;
`

// type InputProps = {
//   $inputError?: boolean
// }

export const Input = styled(GeneralFormInput)`
  color: #fff;
  font-size: 1rem;

  height: 50px;
  padding: 16px 20px;

  background-color: ${colors.textDarkGrey};
  border: 0;
  border-bottom: ${({ $inputError }) =>
    $inputError ? inputErrorBorderBottom : null};
  border-radius: 4px;
  margin-bottom: 0;
`

export const InputError = styled.p`
  font-size: 0.8125rem;
  color: ${colors.errTextOrange};
  padding: 6px 3px 0;
`

export const Text = styled.p`
  color: ${colors.textMedGrey};
  margin-top: 2em;
`

export const Link = styled(NextLink)`
  color: #fff;
  text-decoration: none;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`

export const SmallPrint = styled.p`
  font-size: 0.8125rem;
  line-height: 1.25;
  color: ${colors.textLightGrey};

  margin-top: 1em;
`

type SigninFormProps = {
  email: string
  emailError: boolean
  password: string
  passwordError: boolean
  firebaseError: string
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  dispatch: (action: FormAction) => void
}

export const SigninForm = ({
  email,
  emailError,
  password,
  passwordError,
  firebaseError,
  handleSubmit,
  dispatch,
}: SigninFormProps) => {
  return (
    <ContentBody>
      <Container>
        <Title>Sign In</Title>
        <Form onSubmit={handleSubmit}>
          {firebaseError && (
            <FirebaseErrorDisplay>{firebaseError}</FirebaseErrorDisplay>
          )}
          <InputWrapper>
            <Input
              id='signin-email'
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) =>
                dispatch({ type: 'SET_EMAIL', payload: e.target.value })
              }
              $inputError={emailError}
            />
            <HiddenLabel htmlFor='signin-email'>Email Address</HiddenLabel>
            {emailError && <InputError>Please enter a valid email.</InputError>}
          </InputWrapper>

          <InputWrapper>
            <Input
              id='signin-password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) =>
                dispatch({
                  type: 'SET_PASSWORD',
                  payload: e.target.value,
                })
              }
              $inputError={passwordError}
            />
            <HiddenLabel htmlFor='signin-password'>Password</HiddenLabel>
            {passwordError && (
              <InputError>
                Your password must contain at least 6 characters.
              </InputError>
            )}
          </InputWrapper>
          <SubmitButton maxWidth='100%' boldText onClick={handleSubmit}>
            Sign In
          </SubmitButton>
        </Form>
      </Container>

      <Text>
        New to RetroFix? <Link href={HOME}>Sign up now</Link>.
      </Text>
      <SmallPrint>
        RetroFix uses the Firebase API for user authentication. If you
        don&apos;t wish to create an account, please feel free to use the guest
        account. Email: guest@retrofix.com; password: password.
      </SmallPrint>
    </ContentBody>
  )
}
