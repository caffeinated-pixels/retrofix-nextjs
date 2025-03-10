import { NextRequest } from 'next/server'
import { authMiddleware } from 'next-firebase-auth-edge'
import { clientConfig, serverConfig } from '@/lib/firebase/config'

/**
 * next-firebase-auth-edge does not require you to manually define your own /api/login or /api/logout routes.
 * These routes are automatically handled by the authMiddleware.
 * see: https://github.com/awinogrodzki/next-firebase-auth-edge/issues/34#issuecomment-1588032612
 */
export async function middleware(request: NextRequest) {
  return authMiddleware(request, {
    loginPath: '/api/login', // exposed endpoints
    logoutPath: '/api/logout',
    apiKey: clientConfig.apiKey, // firebase api key
    cookieName: serverConfig.cookieName, // name of the cookie
    cookieSignatureKeys: serverConfig.cookieSignatureKeys, // keys for signing the cookie (should be an array of 2 random >=32 byte keys)
    cookieSerializeOptions: serverConfig.cookieSerializeOptions, // options for setting auth cookie
    serviceAccount: serverConfig.serviceAccount, // firebase credentials
  })
}

// runs on /api/login, /api/logout, root and any other path that isn’t a file or api call.
export const config = {
  matcher: ['/', '/((?!_next|api|.*\\.).*)', '/api/login', '/api/logout'],
}
