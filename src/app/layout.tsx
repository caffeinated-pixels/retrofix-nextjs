import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SignUpContextProvider } from '@/context/SignUpContext'

const inter = Inter({ subsets: ['latin'] })

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
    <SignUpContextProvider>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </SignUpContextProvider>
  )
}
