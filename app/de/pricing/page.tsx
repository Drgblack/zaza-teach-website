import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import { BreadcrumbsJsonLd } from '@/components/SEOJsonLd';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: 'Preise | Zaza Teach - Wählen Sie Ihren zeitsparenden Plan',
  description: 'Wählen Sie den Plan, der Ihnen hilft, Ihre Zeit zurückzugewinnen und als Lehrer zu gedeihen. Kostenlos starten oder für unbegrenzte Unterrichtsplanung upgraden.',
  alternates: { canonical: canonical('/de/pricing') },
  openGraph: { url: canonical('/de/pricing'), title: 'Preise | Zaza Teach - Wählen Sie Ihren zeitsparenden Plan' },
  twitter: { card: 'summary_large_image' }
};

const breadcrumbs = [
  { name: 'Startseite', item: canonical('/de') },
  { name: 'Preise', item: canonical('/de/pricing') }
];

export default function PricingPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbs} />
      <PricingClient />
    </>
  );
}