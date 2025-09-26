import { generateSEOMetadata } from '@/lib/seo';
import { TeachAppJsonLd, BreadcrumbsJsonLd } from '@/components/SEOJsonLd';
import { siteUrl } from '@/lib/site';
import ProductsClient from './ProductsClient';

// Mark as dynamic to avoid SSG issues with translations
export const dynamic = 'force-dynamic';

export const metadata = generateSEOMetadata({
  title: 'Produkte | Zaza Teach - KI-Unterrichtsplanung Tools',
  description: 'Entdecken Sie Zaza Teachs Suite von KI-gestützten Bildungstools mit Unterrichtsplanung, Bewertungserstellung und Lehrressourcen.',
  keywords: ['KI Unterrichtsplanung', 'Lehrer Tools', 'Bildungstools', 'Unterrichtsplan Generator', 'KI Bewertung', 'Lehrressourcen'],
  locale: 'de',
  path: 'products',
  type: 'website',
});

const breadcrumbs = [
  { name: 'Startseite', item: `${siteUrl}/de` },
  { name: 'Produkte', item: `${siteUrl}/de/products` }
];

export default function ProductsPage() {
  return (
    <>
      <TeachAppJsonLd pageUrl={`${siteUrl}/de/products`} />
      <BreadcrumbsJsonLd items={breadcrumbs} />
      <ProductsClient />
    </>
  );
}