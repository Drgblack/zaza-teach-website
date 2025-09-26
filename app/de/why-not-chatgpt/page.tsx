import { generateSEOMetadata } from '@/lib/seo';
import { TeachAppJsonLd, BreadcrumbsJsonLd } from '@/components/SEOJsonLd';
import { siteUrl } from '@/lib/site';
import WhyNotChatGPTClient from './WhyNotChatGPTClient';

// Mark as dynamic to avoid SSG issues with translations
export const dynamic = 'force-dynamic';

export const metadata = generateSEOMetadata({
  title: 'Warum nicht einfach ChatGPT? | Zaza Teach - Der Unterschied',
  description: 'Entdecken Sie, warum Zaza Teach speziell für Lehrkräfte entwickelt wurde und Lehrplanausrichtung, pädagogische Expertise und Datenschutz bietet.',
  keywords: ['Zaza Teach vs ChatGPT', 'Bildungs-KI', 'Lehrer Tools', 'KI für Schulen', 'Datenschutz Bildung'],
  locale: 'de',
  path: 'why-not-chatgpt',
  type: 'website',
});

const breadcrumbs = [
  { name: 'Startseite', item: `${siteUrl}/de` },
  { name: 'Warum nicht ChatGPT?', item: `${siteUrl}/de/why-not-chatgpt` }
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