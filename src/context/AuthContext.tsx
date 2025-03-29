'use client'

import { onAuthStateChanged, User } from 'firebase/auth'
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'

import { firebaseAuthWeb } from '../lib/firebase/firebaseClient'

const FirebaseAuthContext = createContext<User | null>(null)

export default function FirebaseAuthContextProvider({
  children,
}: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const authListener = onAuthStateChanged(firebaseAuthWeb, (currentUser) => {
      currentUser ? setUser(currentUser) : setUser(null)
    })

    return authListener
  }, [])

  return (
    <FirebaseAuthContext.Provider value={user}>
      {children}
    </FirebaseAuthContext.Provider>
  )
}

export const useAuth = () => useContext(FirebaseAuthContext)
