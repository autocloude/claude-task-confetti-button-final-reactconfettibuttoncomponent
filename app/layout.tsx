import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Confetti Button App',
  description: 'A fun confetti animation button component',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}