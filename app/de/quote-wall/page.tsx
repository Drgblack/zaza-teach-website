import { generateSEOMetadata } from '@/lib/seo';
import QuoteWallClient from './QuoteWallClient';

// Mark as dynamic to avoid SSG issues with translations
export const dynamic = 'force-dynamic';

export const metadata = generateSEOMetadata({
  title: 'Zitate-Wand | Zaza Teach - Lehrer Testimonials',
  description: 'Lesen Sie inspirierende Zitate und Testimonials von Lehrern, die ihre Unterrichtsplanung mit Zaza Teach KI-Tools transformiert haben.',
  keywords: ['Lehrer Testimonials', 'Zaza Teach Erfahrungen', 'KI Unterrichtsplanung Bewertungen', 'Pädagogen Meinungen', 'Unterrichtsplanung Erfolgsgeschichten'],
  locale: 'de',
  path: 'quote-wall',
  type: 'website',
});

export default function QuoteWallPage() {
  return <QuoteWallClient />;
}