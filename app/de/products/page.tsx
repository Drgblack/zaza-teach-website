import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import { TeachAppJsonLd, BreadcrumbsJsonLd } from '@/components/SEOJsonLd';

export const metadata: Metadata = {
  title: 'Products | Zaza Teach - AI Lesson Planning Tools',
  description: 'Discover Zaza Teach\'s suite of AI-powered educational tools including lesson planning, assessment creation, and teaching resources.',
  alternates: { canonical: canonical('/products') },
  openGraph: { url: canonical('/products'), title: 'Products | Zaza Teach - AI Lesson Planning Tools' },
  twitter: { card: 'summary_large_image' }
};

const breadcrumbs = [
  { name: 'Home', item: canonical('/') },
  { name: 'Products', item: canonical('/products') }
];

export default function ProductsPage() {
  return (
    <>
      <TeachAppJsonLd pageUrl={canonical('/products')} />
      <BreadcrumbsJsonLd items={breadcrumbs} />
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h1>
            <p className="text-xl text-gray-600">
              AI-powered tools designed for modern educators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Zaza Teach
              </h2>
              <p className="text-gray-600 mb-6">
                Our flagship AI lesson planning tool that helps teachers create curriculum-aligned lessons in minutes. Export to Word or PDF with practical privacy choices for schools.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• AI-powered lesson generation</li>
                <li>• Curriculum alignment</li>
                <li>• Export to Word/PDF</li>
                <li>• Multi-language support</li>
                <li>• Privacy-focused design</li>
              </ul>
              <a
                href="/"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
              >
                Try Zaza Teach
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Zaza Promptly
              </h2>
              <p className="text-gray-600 mb-6">
                Advanced prompt engineering tool for educators who want to create custom AI interactions for their specific teaching needs.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Custom prompt creation</li>
                <li>• Template library</li>
                <li>• Advanced AI interactions</li>
                <li>• Educator-focused features</li>
                <li>• Integration capabilities</li>
              </ul>
              <span className="inline-block bg-gray-400 text-white px-6 py-3 rounded-md">
                Coming Soon
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Teach Resources Library
              </h2>
              <p className="text-gray-600 mb-6">
                Curated collection of teaching resources, templates, and educational materials created by educators, for educators.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Lesson plan templates</li>
                <li>• Assessment tools</li>
                <li>• Classroom activities</li>
                <li>• Educational worksheets</li>
                <li>• Best practice guides</li>
              </ul>
              <a
                href="/resources"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
              >
                Browse Resources
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Teach Assess
              </h2>
              <p className="text-gray-600 mb-6">
                AI-powered assessment creation tool that helps teachers design effective quizzes, tests, and rubrics aligned with learning objectives.
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>• Automated quiz generation</li>
                <li>• Rubric creation</li>
                <li>• Question bank management</li>
                <li>• Learning objective alignment</li>
                <li>• Performance analytics</li>
              </ul>
              <span className="inline-block bg-gray-400 text-white px-6 py-3 rounded-md">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}