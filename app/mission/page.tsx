import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import MissionClient from './MissionClient';

export const metadata: Metadata = {
  title: 'Our Mission | Zaza Teach - Empowering Educators',
  description: 'Learn about Zaza Teach\'s mission to transform education through AI-powered tools that help teachers reclaim their time and passion for teaching.',
  alternates: { canonical: canonical('/mission') },
  openGraph: { url: canonical('/mission'), title: 'Our Mission | Zaza Teach - Empowering Educators' },
  twitter: { card: 'summary_large_image' }
};

export default function MissionPage() {
  return <MissionClient />;
}