import type { Metadata } from 'next';
import { LocaleProvider } from '../../components/LocaleProvider';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import Footer from "../../components/Footer";
import Header from '../../components/header';
import { SkipLink } from '../../components/SkipLink';
import GoogleAnalytics from '../../components/GoogleAnalytics';
import { generateSEOMetadata } from '@/lib/seo';
import { HrefLangLinks } from '../../components/HrefLangLinks';
import { brandConfig } from '@/src/config/brand';

// English layout with proper SEO and hreflang

export const metadata: Metadata = generateSEOMetadata({
  title: 'Zaza Teach | The Lesson Planning Partner for Teachers',
  description: 'Plan faster, personalise easily, and get back to teaching with Zaza Teach. Create curriculum-aligned lessons in minutes, not hours.',
  keywords: ['lesson planning partner for teachers', 'teacher productivity tool', 'lesson planning app for teachers', 'curriculum design', 'educational technology', 'lesson plan generator', 'teaching assistant', 'teacher time-saving tools'],
  locale: 'en',
  path: '',
});

export default async function EnglishLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = 'en';
  
  // Import English messages directly
  const messages = (await import('../../src/i18n/messages/en.json')).default;

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={brandConfig.colors.primary} />
        <meta name="color-scheme" content="light dark" />
        <HrefLangLinks path="" />
      </head>
      <body className="min-h-screen flex flex-col">
        <ErrorBoundary>
          <LocaleProvider locale={locale} messages={messages}>
            <GoogleAnalytics trackingId={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
            <SkipLink />
            <Header />
            <main id="main-content" className="flex-1">
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </main>
            <Footer variant="teach" />
          </LocaleProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}