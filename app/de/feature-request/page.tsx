import { generateSEOMetadata } from '@/lib/seo';
import { TeachAppJsonLd, BreadcrumbsJsonLd } from '@/components/SEOJsonLd';
import { siteUrl } from '@/lib/site';
import FeatureRequestClient from './FeatureRequestClient';

// Mark as dynamic to avoid SSG issues with translations
export const dynamic = 'force-dynamic';

export const metadata = generateSEOMetadata({
  title: 'Feature-Anfrage | Zaza Teach - Helfen Sie uns zu verbessern',
  description: 'Reichen Sie Feature-Anfragen und Vorschläge ein, um Zaza Teach für Lehrkräfte noch besser zu machen. Ihre Ideen prägen unsere Entwicklung.',
  keywords: ['Feature-Anfrage', 'Produktverbesserung', 'Lehrer Feedback', 'Bildungstools', 'Zaza Teach'],
  locale: 'de',
  path: 'feature-request',
  type: 'website',
});

const breadcrumbs = [
  { name: 'Startseite', item: `${siteUrl}/de` },
  { name: 'Feature-Anfrage', item: `${siteUrl}/de/feature-request` }
];

export default function FeatureRequestPage() {
  return (
    <>
      <TeachAppJsonLd pageUrl={`${siteUrl}/de/feature-request`} />
      <BreadcrumbsJsonLd items={breadcrumbs} />
      <FeatureRequestClient />
    </>
  );
}