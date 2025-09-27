import { generateSEOMetadata } from '@/lib/seo';
import { TeachAppJsonLd, BreadcrumbsJsonLd } from '@/components/SEOJsonLd';
import { siteUrl } from '@/lib/site';
import { Suspense } from 'react';

// Dynamic import to avoid SSR issues
import dynamic from 'next/dynamic';

const ResourcesClient = dynamic(() => import('./ResourcesClient'), {
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
  </div>
});

export const metadata = generateSEOMetadata({
  title: 'Kostenlose Lehrressourcen | Zaza Teach',
  description: 'Laden Sie kostenlose Lehrressourcen, Unterrichtsplan-Vorlagen und Bildungs-PDFs von Zaza Teach herunter.',
  keywords: ['Lehrressourcen', 'Unterrichtsplan Vorlage', 'Kostenlose Bildung', 'Lehrer Tools', 'Bewertungsraster'],
  locale: 'de',
  path: 'resources',
  type: 'website',
});

const breadcrumbs = [
  { name: 'Startseite', item: `${siteUrl}/de` },
  { name: 'Ressourcen', item: `${siteUrl}/de/resources` }
];

export default function ResourcesPage() {
  return (
    <>
      <TeachAppJsonLd pageUrl={`${siteUrl}/de/resources`} />
      <BreadcrumbsJsonLd items={breadcrumbs} />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
        </div>
      }>
        <ResourcesClient />
      </Suspense>
    </>
  );
}