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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6">
              ✨ AI-Powered Lesson Planning
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI Lesson Planner
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Transform your teaching with intelligent lesson planning that saves hours of prep time and creates engaging, standards-aligned content
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Smart Planning Features
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Curriculum Alignment</h3>
                    <p className="text-gray-600">Automatically aligns to Common Core, state standards, and international curricula</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">🧠</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Differentiated Learning</h3>
                    <p className="text-gray-600">Creates activities for multiple learning styles and ability levels</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold">📊</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Assessment Integration</h3>
                    <p className="text-gray-600">Includes formative and summative assessments with rubrics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold">📚</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Resource Suggestions</h3>
                    <p className="text-gray-600">Recommends materials, books, and digital resources</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Perfect for Every Teacher
              </h3>
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-900 mb-2">New Teachers</h4>
                  <p className="text-blue-800 text-sm">Get professional-quality lessons from day one</p>
                </div>
                <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-900 mb-2">Veteran Educators</h4>
                  <p className="text-green-800 text-sm">Enhance existing lessons with fresh ideas</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-900 mb-2">Substitute Teachers</h4>
                  <p className="text-purple-800 text-sm">Quick, ready-to-use lesson plans for any subject</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Lesson Planning?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of teachers who save hours every week with AI-powered lesson planning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/pricing"
              className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
            </Link>
            <Link
              href="/en/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}