import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About | Zaza Teach - Made by Teachers, for Teachers',
  description: 'Learn about Zaza Teach\'s mission to help teachers reclaim their time and energy through AI-powered lesson planning.',
  alternates: { canonical: canonical('/about') },
  openGraph: { url: canonical('/about'), title: 'About | Zaza Teach - Made by Teachers, for Teachers' },
  twitter: { card: 'summary_large_image' }
};

export default function AboutPage() {
  return <AboutClient />;
}