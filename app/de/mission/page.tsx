import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import MissionClient from './MissionClient';

export const metadata: Metadata = {
  title: 'Unsere Mission | Zaza Teach - Pädagogen stärken',
  description: 'Erfahren Sie mehr über Zaza Teachs Mission, die Bildung durch KI-gestützte Tools zu transformieren, die Lehrern helfen, ihre Zeit und Leidenschaft für das Unterrichten zurückzugewinnen.',
  alternates: { canonical: canonical('/de/mission') },
  openGraph: { 
    url: canonical('/de/mission'), 
    title: 'Unsere Mission | Zaza Teach - Pädagogen stärken',
    description: 'Erfahren Sie mehr über Zaza Teachs Mission, die Bildung durch KI-gestützte Tools zu transformieren, die Lehrern helfen, ihre Zeit und Leidenschaft für das Unterrichten zurückzugewinnen.'
  },
  twitter: { card: 'summary_large_image' }
};

export default function MissionPage() {
  return <MissionClient />;
}