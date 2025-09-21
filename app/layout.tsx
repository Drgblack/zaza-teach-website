import type { Metadata } from 'next'
import "./globals.css";
import SiteFooter from "../components/SiteFooter";
import Header from '../components/header'

import GoogleAnalytics from '../components/GoogleAnalytics'
import { siteUrl } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Zaza Teach | AI Lesson Planning for Educators',
  description: 'Plan lessons faster with Zaza Teach, the AI-powered tool for teachers. Create, customize, and share curriculum-aligned lessons in minutes.',
  keywords: ['AI lesson planning', 'teacher tools', 'curriculum design', 'educational technology', 'lesson plan generator', 'teaching assistant', 'education AI'],
  authors: [{ name: 'Dr. Greg Blackburn', url: `${siteUrl}/about-founder` }],
  creator: 'Zaza Technologies',
  publisher: 'Zaza Technologies',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: siteUrl },
  generator: 'Next.js',
  applicationName: 'Zaza Teach',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Zaza Teach',
    title: 'Zaza Teach | AI Lesson Planning for Educators',
    description: 'Plan lessons faster with Zaza Teach, the AI-powered tool for teachers. Create, customize, and share curriculum-aligned lessons in minutes.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Zaza Teach - AI Lesson Planning for Educators',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zaza Teach | AI Lesson Planning for Educators',
    description: 'Plan lessons faster with Zaza Teach, the AI-powered tool for teachers. Create, customize, and share curriculum-aligned lessons in minutes.',
    images: [`${siteUrl}/og-image.png`],
    creator: '@zazatechnologies',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#66B2B2" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className="min-h-screen flex flex-col">
        <GoogleAnalytics trackingId={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        
              <SiteFooter />
      </body>
    </html>
  )
}




