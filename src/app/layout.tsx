import type { Metadata } from 'next'
import './globals.css'
import { SignUpContextProvider } from '@/context/SignUpContext'
import { Roboto } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import StyledComponentsRegistry from '@/lib/registry'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Script from 'next/script'
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang='en'>
        <head>
          <Script
            src='https://kit.fontawesome.com/4947e996a3.js'
            crossOrigin='anonymous'
            strategy='beforeInteractive'
          />
        </head>
        <body className={roboto.className}>
          <StyledComponentsRegistry>
            <SignUpContextProvider>{children}</SignUpContextProvider>
          </StyledComponentsRegistry>
        </body>
      </html>
    </>
  )
}
