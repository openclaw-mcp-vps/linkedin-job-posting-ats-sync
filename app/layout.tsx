import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LinkedIn ATS Sync — Automate Your Hiring Pipeline',
  description: 'Automatically sync LinkedIn job applications to Greenhouse, Lever, and BambooHR. Save hours of manual data entry every week.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8fe63f6b-6b20-4892-9b3e-7daef7ba0e30"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}