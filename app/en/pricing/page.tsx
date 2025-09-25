import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import { BreadcrumbsJsonLd } from '@/components/SEOJsonLd';
import { Check, Star } from 'lucide-react';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: 'Pricing | Zaza Teach - Choose Your Time-Saving Plan',
  description: 'Choose the plan that helps you reclaim your time and thrive as a teacher. Start free or upgrade for unlimited lesson planning.',
  alternates: { canonical: canonical('/pricing') },
  openGraph: { url: canonical('/pricing'), title: 'Pricing | Zaza Teach - Choose Your Time-Saving Plan' },
  twitter: { card: 'summary_large_image' }
};

const breadcrumbs = [
  { name: 'Home', item: canonical('/') },
  { name: 'Pricing', item: canonical('/pricing') }
];

export default function PricingPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbs} />
      <PricingClient />
    </>
  );
}