import type { Metadata } from 'next'
import './globals.css'
import { SignUpContextProvider } from '@/context/SignUpContext'
import Script from 'next/script'
import { Roboto } from 'next/font/google'

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
      <Script
        src='https://kit.fontawesome.com/4947e996a3.js'
        crossOrigin='anonymous'
      />

      <html lang='en'>
        <body className={roboto.className}>
          <SignUpContextProvider>{children}</SignUpContextProvider>
        </body>
      </html>
    </>
  )
}
