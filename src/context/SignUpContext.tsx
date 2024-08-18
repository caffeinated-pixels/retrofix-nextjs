'use client'
import { useState, createContext, useContext, PropsWithChildren } from 'react'

type SignUpContextType = {
  globalFirstName: string
  setGlobalFirstName: (firstName: string) => void
  globalEmail: string
  setGlobalEmail: (email: string) => void
  globalPassword: string
  setGlobalPassword: (password: string) => void
}

const SignUpContext = createContext<SignUpContextType>({
  globalFirstName: '',
  setGlobalFirstName: () => {},
  globalEmail: '',
  setGlobalEmail: () => {},
  globalPassword: '',
  setGlobalPassword: () => {},
})

export const SignUpContextProvider = ({ children }: PropsWithChildren) => {
  const [globalFirstName, setGlobalFirstName] = useState('')
  const [globalEmail, setGlobalEmail] = useState('')
  const [globalPassword, setGlobalPassword] = useState('')

  return (
    <SignUpContext.Provider
      value={{
        globalFirstName,
        setGlobalFirstName,
        globalEmail,
        setGlobalEmail,
        globalPassword,
        setGlobalPassword,
      }}
    >
      {children}
    </SignUpContext.Provider>
  )
}

export const useSignUpContext = () => useContext(SignUpContext)
