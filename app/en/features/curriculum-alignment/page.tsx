import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Curriculum Alignment | Zaza Teach - Standards-Based Planning',
  description: 'Ensure every lesson meets curriculum standards with automatic alignment to Common Core, state standards, and international frameworks.',
  alternates: { canonical: canonical('/features/curriculum-alignment') },
  openGraph: { url: canonical('/features/curriculum-alignment'), title: 'Curriculum Alignment | Zaza Teach' },
};

export default function CurriculumAlignmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Curriculum Alignment</h1>
          <p className="text-xl text-gray-600">Automatic standards alignment for every lesson you create</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Common Core</h3>
            <p className="text-gray-600 text-sm">Automatic alignment to Common Core State Standards for Math and ELA</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">State Standards</h3>
            <p className="text-gray-600 text-sm">Supports all 50 state curriculum standards and frameworks</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl mb-4">🌍</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">International</h3>
            <p className="text-gray-600 text-sm">IB, Cambridge, and other international curriculum support</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Why Standards Matter</h2>
          <p className="text-blue-800 mb-6">Curriculum alignment ensures your lessons meet educational requirements while maintaining academic rigor and consistency across your classroom.</p>
          <Link href="/en/faqs" className="text-blue-600 hover:text-blue-800 font-medium">Learn More About Our Standards →</Link>
        </div>

        <div className="text-center">
          <Link href="/en/pricing" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
            Try Standards Alignment
          </Link>
        </div>
      </div>
    </div>
  );
}