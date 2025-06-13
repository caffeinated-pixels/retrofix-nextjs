import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'

import { HOME } from '@/constants/routes'
import { firebaseAuthWeb } from '@/lib/firebase/firebaseClient'

export const useSignOut = () => {
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut(firebaseAuthWeb)

    await fetch('/api/logout')

    router.replace(HOME)
  }

  return handleSignOut
}
