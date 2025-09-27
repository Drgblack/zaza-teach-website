import { generateSEOMetadata } from '@/lib/seo';
import { TeachAppJsonLd, BreadcrumbsJsonLd } from '@/components/SEOJsonLd';
import { siteUrl } from '@/lib/site';
import ResourcesClient from './ResourcesClient';

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
      <ResourcesClient />
    </>
  );
}