import { NextRequest, NextResponse } from 'next/server'
import {
  authMiddleware,
  redirectToLogin,
  redirectToPath,
} from 'next-firebase-auth-edge'

import { clientConfig, serverConfig } from '@/lib/firebase/config'

import {
  BROWSE,
  LOGIN_API,
  LOGOUT_API,
  PUBLIC_ROUTES,
  SIGN_IN,
} from './constants/routes'

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

    handleValidToken: async (_, headers) => {
      // if the user is logged in and tries to access a public route, redirect to the browse page
      if (PUBLIC_ROUTES.includes(request.nextUrl.pathname)) {
        return redirectToPath(request, BROWSE, {
          shouldClearSearchParams: true,
        })
      }

      return NextResponse.next({
        request: {
          headers,
        },
      })
    },

    handleInvalidToken: async () => {
      return redirectToLogin(request, {
        path: SIGN_IN,
        publicPaths: PUBLIC_ROUTES, // will skip the redirect for specified public routes
      })
    },

    handleError: async (error) => {
      console.error('Unhandled authentication error', { error })

      return redirectToLogin(request, {
        path: SIGN_IN,
        publicPaths: PUBLIC_ROUTES,
      })
    },
  })
}

// doesn't seem to work with imported constants
export const config = {
  matcher: [
    // Match specific page routes only
    '/',
    '/browse',
    '/signin',
    '/signup/:path*',
    '/profile',
    '/search',
    '/watch',
    '/manage-profile',
    '/children',
    // API routes for authentication
    '/api/login',
    '/api/logout',
  ],
}
