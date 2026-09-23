import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import 'material-symbols/outlined.css'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'Dulan Prabashwara — Software Engineering Undergraduate',
  description:
    'Portfolio of Dulan Prabashwara, a software engineering undergraduate building full-stack, AI, real-time, and embedded systems.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
