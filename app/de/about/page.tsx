import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'Über Zaza Teach | Zaza Teach - Von Lehrern für Lehrer',
  description: 'Erfahren Sie mehr über Zaza Teach - von Lehrern für Lehrer entwickelt, um Zeit, Energie und Leidenschaft für das Wichtigste zurückzugewinnen: Ihre Schüler.',
  alternates: { canonical: canonical('/de/about') },
  openGraph: { 
    url: canonical('/de/about'), 
    title: 'Über Zaza Teach | Zaza Teach - Von Lehrern für Lehrer',
    description: 'Erfahren Sie mehr über Zaza Teach - von Lehrern für Lehrer entwickelt, um Zeit, Energie und Leidenschaft für das Wichtigste zurückzugewinnen: Ihre Schüler.'
  },
  twitter: { card: 'summary_large_image' }
};

export default function AboutPage() {
  return <AboutClient />;
}