import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import FeatureRequestClient from './FeatureRequestClient';

export const metadata: Metadata = {
  title: 'Feature Request | Zaza Teach - Help Us Improve',
  description: 'Submit feature requests and suggestions to help us make Zaza Teach even better for educators. Your input shapes our development roadmap.',
  alternates: { canonical: canonical('/feature-request') },
  openGraph: { url: canonical('/feature-request'), title: 'Feature Request | Zaza Teach - Help Us Improve' },
  twitter: { card: 'summary_large_image' }
};

export default function FeatureRequestPage() {
  return <FeatureRequestClient />;
}