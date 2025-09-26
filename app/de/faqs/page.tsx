import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import FAQClient from '@/components/FAQClient';

export const metadata: Metadata = {
  title: 'Häufig gestellte Fragen | Zaza Teach',
  description: 'Finden Sie Antworten auf häufige Fragen zu Zaza Teach, unserem KI-gestützten Unterrichtsplanungs-Tool für Pädagogen.',
  alternates: { canonical: canonical('/de/faqs') },
  openGraph: { url: canonical('/de/faqs'), title: 'Häufig gestellte Fragen | Zaza Teach' },
  twitter: { card: 'summary_large_image' }
};

export default function FAQsPage() {
  return <FAQClient />;
}