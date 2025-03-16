import { NextRequest } from 'next/server'
import { authMiddleware, redirectToLogin } from 'next-firebase-auth-edge'
import { clientConfig, serverConfig } from '@/lib/firebase/config'
import {
  LOGIN_API,
  LOGOUT_API,
  REGISTRATION,
  SIGN_IN,
} from './constants/routes'

const PUBLIC_PATHS = [SIGN_IN, REGISTRATION]

/**
 * next-firebase-auth-edge does not require you to manually define your own /api/login or /api/logout routes.
 * These routes are automatically handled by the authMiddleware.
 * see: https://github.com/awinogrodzki/next-firebase-auth-edge/issues/34#issuecomment-1588032612
 */
export async function middleware(request: NextRequest) {
  return authMiddleware(request, {
    loginPath: LOGIN_API, // exposed endpoints
    logoutPath: LOGOUT_API,
    apiKey: clientConfig.apiKey, // firebase api key
    cookieName: serverConfig.cookieName, // name of the cookie
    cookieSignatureKeys: serverConfig.cookieSignatureKeys, // keys for signing the cookie (should be an array of 2 random >=32 byte keys)
    cookieSerializeOptions: serverConfig.cookieSerializeOptions, // options for setting auth cookie
    serviceAccount: serverConfig.serviceAccount, // firebase credentials
    handleInvalidToken: async (reason) => {
      console.info('turbo Missing or malformed credentials', { reason })

      return redirectToLogin(request, {
        path: SIGN_IN,
        publicPaths: PUBLIC_PATHS,
      })
    },
  })
}

// runs on /api/login, /api/logout, root and any other path that isn’t a file or api call.
export const config = {
  matcher: ['/', '/((?!_next|api|.*\\.).*)', LOGIN_API, LOGOUT_API],
}
