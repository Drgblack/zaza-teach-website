import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import ContactClient from '@/components/ContactClient';

export const metadata: Metadata = {
  title: 'Kontaktieren Sie uns | Zaza Teach - Kontakt aufnehmen',
  description: 'Kontaktieren Sie das Zaza Teach Team. Erhalten Sie Support, stellen Sie Fragen oder teilen Sie Feedback zu unseren KI-gestützten Lehrtools mit.',
  alternates: { canonical: canonical('/de/contact') },
  openGraph: { url: canonical('/de/contact'), title: 'Kontaktieren Sie uns | Zaza Teach - Kontakt aufnehmen' },
  twitter: { card: 'summary_large_image' }
};

export default function ContactPage() {
  return <ContactClient />;
}