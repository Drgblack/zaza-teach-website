import { generateSEOMetadata } from '@/lib/seo';
import { TeachAppJsonLd, BreadcrumbsJsonLd } from '@/components/SEOJsonLd';
import { siteUrl } from '@/lib/site';
import WhyNotChatGPTClient from './WhyNotChatGPTClient';

// Mark as dynamic to avoid SSG issues with translations
export const dynamic = 'force-dynamic';

export const metadata = generateSEOMetadata({
  title: 'Warum Lehrkräfte Zaza Teach vertrauen - statt generischer KI-Tools | Zaza Teach',
  description: 'Generische KI-Tools wurden nicht für den Unterricht entwickelt. Entdecken Sie, warum Lehrkräfte Zaza Teach mit Schutzmaßnahmen und Standards wählen.',
  keywords: ['Zaza Teach vs ChatGPT', 'Bildungs-KI', 'Lehrer Tools', 'KI für Schulen', 'Datenschutz Bildung'],
  locale: 'de',
  path: 'why-not-chatgpt',
  type: 'website',
});

const breadcrumbs = [
  { name: 'Startseite', item: `${siteUrl}/de` },
  { name: 'Warum Lehrkräfte Zaza Teach vertrauen', item: `${siteUrl}/de/why-not-chatgpt` }
];

export default function WhyNotChatGPTPage() {
  return (
    <>
      <TeachAppJsonLd pageUrl={`${siteUrl}/de/why-not-chatgpt`} />
      <BreadcrumbsJsonLd items={breadcrumbs} />
      <WhyNotChatGPTClient />
    </>
  );
}