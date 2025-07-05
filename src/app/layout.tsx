import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import FirebaseAuthContextProvider from '@/context/AuthContext'
import BrowseDataProvider from '@/context/BrowseDataProvider'
import { SignUpContextProvider } from '@/context/SignUpContext'
import StyledComponentsRegistry from '@/lib/registry'
config.autoAddCss = false

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Retrofix',
  description:
    "RetroFix is a NetFlix clone built with React.js and Firebase. Sadly, it's not a real streaming service but it does have some cool pretend content!",
  openGraph: {
    url: 'https://retrofix-nextjs.netlify.app',
    siteName: 'Retrofix',
    images: [
      {
        url: '/images/misc/metatag-preview.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/misc/metatag-preview.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head></head>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <FirebaseAuthContextProvider>
            <BrowseDataProvider>
              <SignUpContextProvider>{children}</SignUpContextProvider>
            </BrowseDataProvider>
          </FirebaseAuthContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
