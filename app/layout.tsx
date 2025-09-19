import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { siteUrl } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Zaza Teach | AI Lesson Planning for Educators',
  description: 'Plan lessons faster with Zaza Teach, the AI-powered tool for teachers. Create, customize, and share curriculum-aligned lessons in minutes.',
  alternates: { canonical: siteUrl },
  generator: 'v0.dev',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head><meta charSet="utf-8" /></head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
