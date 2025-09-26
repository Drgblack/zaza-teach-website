import { generateSEOMetadata } from '@/lib/seo';
import SupportClient from './SupportClient';

// Mark as dynamic to avoid SSG issues with translations
export const dynamic = 'force-dynamic';

export const metadata = generateSEOMetadata({
  title: 'Support | Zaza Teach - Hilfe Center',
  description: 'Erhalten Sie Hilfe zu Zaza Teach. Finden Sie Antworten auf häufige Fragen, Anleitungen zur Fehlerbehebung und kontaktieren Sie unser Support-Team.',
  keywords: ['Zaza Teach Support', 'Hilfe', 'FAQ', 'Unterrichtsplanung Hilfe', 'KI Lehrer Support', 'Technischer Support'],
  locale: 'de',
  path: 'support',
  type: 'website',
});

export default function SupportPage() {
  return <SupportClient />;
}