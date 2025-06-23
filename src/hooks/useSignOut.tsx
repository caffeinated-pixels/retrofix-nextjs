import { signOut } from 'firebase/auth'

import { HOME } from '@/constants/routes'
import { firebaseAuthWeb } from '@/lib/firebase/firebaseClient'

export const useSignOut = () => {
  const handleSignOut = async () => {
    await signOut(firebaseAuthWeb)

    await fetch('/api/logout')

    window.location.replace(HOME)
  }

  return handleSignOut
}
