import { canonical } from '@/lib/site';

export const metadata = {
  title: 'Zaza Teach | AI Lesson Planning for Educators',
  description: 'Plan lessons faster with Zaza Teach, the AI-powered tool for teachers. Create, customize, and share curriculum-aligned lessons in minutes.',
  openGraph: {
    title: 'Zaza Teach | AI Lesson Planning for Educators',
    description: 'Plan lessons faster with Zaza Teach, the AI-powered tool for teachers. Create, customize, and share curriculum-aligned lessons in minutes.',
    url: canonical('/'),
    siteName: 'Zaza Teach',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zaza Teach | AI Lesson Planning for Educators',
    description: 'Plan lessons faster with Zaza Teach, the AI-powered tool for teachers. Create, customize, and share curriculum-aligned lessons in minutes.',
  },
  alternates: {
    canonical: canonical('/'),
  },
};

import dynamic from 'next/dynamic';
import { WebSiteJsonLd, OrgJsonLd, TeachAppJsonLd } from '@/components/SEOJsonLd';

const HomePage = dynamic(() => import('./../components/HomePage'), { ssr: false });

export default function Page() {
  return (
    <>
      <WebSiteJsonLd />
      <OrgJsonLd />
      <TeachAppJsonLd />
      <HomePage />
    </>
  );
}
