import type { Metadata } from 'next'
import {Public_Sans } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { Suspense } from 'react'
import Footer from "./components/Footer"

const public_sans = Public_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eazybank',
  description: 'Eazy bank Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

        <Suspense>
      <body className={public_sans.className}>
          <Navbar />
          {children}
          <Footer/>
      </body>
        </Suspense>

    </html>
  )
}
