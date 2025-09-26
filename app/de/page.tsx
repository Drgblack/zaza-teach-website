import { generateSEOMetadata } from '@/lib/seo';

export const metadata = generateSEOMetadata({
  title: 'Zaza Teach | KI-Unterrichtsplanung für Pädagogen',
  description: 'Planen Sie Lektionen schneller mit Zaza Teach, dem KI-gestützten Tool für Lehrer. Erstellen, anpassen und teilen Sie lehrplangerechte Lektionen in Minuten.',
  keywords: ['KI Unterrichtsplanung', 'Lehrer Tools', 'Lehrplan Design', 'Bildungstechnologie', 'Unterrichtsplan Generator', 'Lehr-Assistent', 'Bildungs-KI'],
  locale: 'de',
  path: '',
  type: 'website',
});

import dynamic from 'next/dynamic';
import { WebSiteJsonLd, OrgJsonLd, TeachAppJsonLd } from '@/components/SEOJsonLd';

const HomePage = dynamic(() => import('../../components/HomePage'), { ssr: false });

export default function Page() {
  return (
    <>
      <WebSiteJsonLd />
      <OrgJsonLd />
      <TeachAppJsonLd />
      <HomePage />
    </>
  );
}
