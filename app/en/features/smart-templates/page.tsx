import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Smart Templates | Zaza Teach - Customizable Lesson Templates',
  description: 'Access hundreds of professionally designed, curriculum-aligned lesson templates. Customize and adapt for any subject or grade level.',
  alternates: { canonical: canonical('/features/smart-templates') },
  openGraph: { url: canonical('/features/smart-templates'), title: 'Smart Templates | Zaza Teach' },
};

export default function SmartTemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Smart Templates</h1>
          <p className="text-xl text-gray-600">Professional lesson templates that adapt to your teaching style</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Template Library</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Subject-Specific</h3>
              <p className="text-gray-600 text-sm">Math, Science, ELA, Social Studies templates</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Grade-Level Optimized</h3>
              <p className="text-gray-600 text-sm">K-12 templates designed for developmental stages</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Curriculum Aligned</h3>
              <p className="text-gray-600 text-sm">Standards-based templates for easy compliance</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/en/pricing" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
            Explore Templates
          </Link>
        </div>
      </div>
    </div>
  );
}