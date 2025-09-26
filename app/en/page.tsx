import { generateSEOMetadata } from '@/lib/seo';

export const metadata = generateSEOMetadata({
  title: 'Zaza Teach | AI Lesson Planning for Educators',
  description: 'Plan lessons faster with Zaza Teach, the AI-powered tool for teachers. Create, customize, and share curriculum-aligned lessons in minutes.',
  keywords: ['AI lesson planning', 'teacher tools', 'curriculum design', 'educational technology', 'lesson plan generator', 'teaching assistant', 'education AI'],
  locale: 'en',
  path: '',
  type: 'website',
});

import dynamic from 'next/dynamic';
import { WebSiteJsonLd, OrgJsonLd, TeachAppJsonLd } from '@/components/SEOJsonLd';

const HomePage = dynamic(() => import('../../components/HomePage'), { ssr: false });

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
