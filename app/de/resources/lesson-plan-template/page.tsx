import { generateSEOMetadata } from '@/lib/seo';
import { TeachAppJsonLd, BreadcrumbsJsonLd } from '@/components/SEOJsonLd';
import { siteUrl } from '@/lib/site';
import LessonPlanTemplateClient from './LessonPlanTemplateClient';

// Mark as dynamic to avoid SSG issues with translations
export const dynamic = 'force-dynamic';

export const metadata = generateSEOMetadata({
  title: 'Unterrichtsplan-Vorlage | Kostenlose Lehrressourcen',
  description: 'Herunterladbare Unterrichtsplan-Vorlage für Lehrer',
  keywords: ['Unterrichtsplan', 'Vorlage', 'Lehrer', 'Kostenlos', 'PDF'],
  locale: 'de',
  path: 'resources/lesson-plan-template',
  type: 'article',
});

const breadcrumbs = [
  { name: 'Startseite', item: `${siteUrl}/de` },
  { name: 'Ressourcen', item: `${siteUrl}/de/resources` },
  { name: 'Unterrichtsplan-Vorlage', item: `${siteUrl}/de/resources/lesson-plan-template` }
];

export default function LessonPlanTemplatePage() {
  return (
    <>
      <TeachAppJsonLd pageUrl={`${siteUrl}/de/resources/lesson-plan-template`} />
      <BreadcrumbsJsonLd items={breadcrumbs} />
      <LessonPlanTemplateClient />
    </>
  );
}