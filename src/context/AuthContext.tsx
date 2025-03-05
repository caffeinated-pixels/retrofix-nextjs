import {
  createContext,
  useContext,
  useEffect,
  useState,
  PropsWithChildren,
} from 'react'
import { firebaseAuth } from '@/lib/firebase/config'
import { User, onAuthStateChanged } from 'firebase/auth'
import Cookies from 'js-cookie'

type AuthContextType = {
  user: User | null
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
})

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        // User is signed in
        setUser(user)
        const token = await user.getIdToken()
        Cookies.set('rf_auth_token', token, {
          secure: true,
          sameSite: 'strict',
        })
      } else {
        // User is signed out
        setUser(null)
        Cookies.remove('rf_auth_token')
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
