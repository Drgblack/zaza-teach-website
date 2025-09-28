import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resource Library | Zaza Teach - Educational Resources',
  description: 'Access thousands of educational resources, worksheets, and teaching materials. All curriculum-aligned and instantly downloadable.',
  alternates: { canonical: canonical('/features/resource-library') },
  openGraph: { url: canonical('/features/resource-library'), title: 'Resource Library | Zaza Teach' },
};

export default function ResourceLibraryPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resource Library</h1>
          <p className="text-xl text-gray-600">Thousands of ready-to-use educational resources at your fingertips</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">📖 What's Included</h2>
            <ul className="space-y-3">
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Worksheets & Activities</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Assessment Rubrics</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Visual Aids & Posters</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Project Ideas</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Homework Templates</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">🎯 Quick Access</h2>
            <div className="space-y-3">
              <Link href="/en/resources" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <span className="font-medium text-blue-900">Browse Free Resources →</span>
              </Link>
              <Link href="/en/resources/lesson-plan-template" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <span className="font-medium text-purple-900">Lesson Plan Templates →</span>
              </Link>
              <Link href="/en/pricing" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <span className="font-medium text-green-900">Premium Resources →</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/en/resources" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
            Explore Resource Library
          </Link>
        </div>
      </div>
    </div>
  );
}