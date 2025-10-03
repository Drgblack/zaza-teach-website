import { generateSEOMetadata } from '@/lib/seo';
import { TeachAppJsonLd, BreadcrumbsJsonLd } from '@/components/SEOJsonLd';
import { siteUrl } from '@/lib/site';
import ResourcesClient from './ResourcesClient';

export const metadata = generateSEOMetadata({
  title: 'Free Teaching Resources | Zaza Teach',
  description: 'Download free teaching resources, lesson plan templates, and educational PDFs from Zaza Teach.',
  keywords: ['Teaching Resources', 'Lesson Plan Template', 'Free Education', 'Teacher Tools', 'Assessment Rubrics'],
  locale: 'en',
  path: 'resources',
  type: 'website',
});

const breadcrumbs = [
  { name: 'Home', item: `${siteUrl}/en` },
  { name: 'Resources', item: `${siteUrl}/en/resources` }
];

export default function ResourcesPage() {
  return (
    <>
      <TeachAppJsonLd pageUrl={`${siteUrl}/en/resources`} />
      <BreadcrumbsJsonLd items={breadcrumbs} />
      <ResourcesClient />
    </>
  );
}