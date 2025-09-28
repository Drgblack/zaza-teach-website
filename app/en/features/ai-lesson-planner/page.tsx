import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Lesson Planner | Zaza Teach - Smart Lesson Planning',
  description: 'Create curriculum-aligned lesson plans in minutes with our AI-powered lesson planner. Generate engaging activities, assessments, and materials automatically.',
  alternates: { canonical: canonical('/features/ai-lesson-planner') },
  openGraph: { url: canonical('/features/ai-lesson-planner'), title: 'AI Lesson Planner | Zaza Teach' },
  twitter: { card: 'summary_large_image' }
};

export default function AILessonPlannerPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Lesson Planner
          </h1>
          <p className="text-xl text-gray-600">
            Transform your teaching with intelligent lesson planning that saves hours of prep time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              🚀 Smart Planning Features
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">✓</span>
                <div>
                  <strong>Curriculum Alignment:</strong> Automatically aligns to Common Core, state standards, and international curricula
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">✓</span>
                <div>
                  <strong>Differentiated Learning:</strong> Creates activities for multiple learning styles and ability levels
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">✓</span>
                <div>
                  <strong>Assessment Integration:</strong> Includes formative and summative assessments with rubrics
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3">✓</span>
                <div>
                  <strong>Resource Suggestions:</strong> Recommends materials, books, and digital resources
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              🎯 Perfect for Every Teacher
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-900">New Teachers</h4>
                <p className="text-blue-700 text-sm">Get professional-quality lessons from day one</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-900">Veteran Educators</h4>
                <p className="text-green-700 text-sm">Enhance existing lessons with fresh ideas</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-purple-900">Substitute Teachers</h4>
                <p className="text-purple-700 text-sm">Quick, ready-to-use lesson plans for any subject</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Lesson Planning?
          </h2>
          <p className="text-gray-700 mb-6">
            Join thousands of teachers who save hours every week with AI-powered lesson planning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/pricing"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/en/contact"
              className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}