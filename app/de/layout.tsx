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

// German layout with proper SEO and hreflang

export const metadata: Metadata = generateSEOMetadata({
  title: 'Zaza Teach | KI-Unterrichtsplanung für Pädagogen',
  description: 'Planen Sie Lektionen schneller mit Zaza Teach, dem KI-gestützten Tool für Lehrer. Erstellen, anpassen und teilen Sie lehrplangerechte Lektionen in Minuten.',
  keywords: ['KI Unterrichtsplanung', 'Lehrer Tools', 'Lehrplan Design', 'Bildungstechnologie', 'Unterrichtsplan Generator', 'Lehr-Assistent', 'Bildungs-KI'],
  locale: 'de',
  path: '',
});

export default async function GermanLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = 'de';
  
  // Import German messages directly
  const messages = (await import('../../src/i18n/messages/de.json')).default;

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