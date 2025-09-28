import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lesson Plan Templates | Zaza Teach - Ready-to-Use Templates',
  description: 'Browse our collection of professional lesson plan templates. Customizable templates for all subjects and grade levels.',
  alternates: { canonical: canonical('/templates') },
  openGraph: { url: canonical('/templates'), title: 'Lesson Plan Templates | Zaza Teach' },
};

export default function TemplatesPage() {
  const templateCategories = [
    {
      title: "Elementary (K-5)",
      description: "Age-appropriate templates for young learners",
      templates: [
        { name: "Math Problem Solving", subject: "Mathematics", time: "45 min", level: "K-2" },
        { name: "Reading Comprehension", subject: "ELA", time: "30 min", level: "3-5" },
        { name: "Science Exploration", subject: "Science", time: "60 min", level: "K-5" },
        { name: "Social Studies Community", subject: "Social Studies", time: "45 min", level: "1-3" }
      ]
    },
    {
      title: "Middle School (6-8)",
      description: "Engaging templates for developing minds",
      templates: [
        { name: "Algebra Foundations", subject: "Mathematics", time: "50 min", level: "6-8" },
        { name: "Creative Writing Workshop", subject: "ELA", time: "45 min", level: "6-8" },
        { name: "Life Science Lab", subject: "Science", time: "90 min", level: "7-8" },
        { name: "World Cultures", subject: "Social Studies", time: "55 min", level: "6-8" }
      ]
    },
    {
      title: "High School (9-12)",
      description: "Advanced templates for critical thinking",
      templates: [
        { name: "Advanced Calculus", subject: "Mathematics", time: "55 min", level: "11-12" },
        { name: "Literary Analysis", subject: "ELA", time: "50 min", level: "9-12" },
        { name: "AP Chemistry Lab", subject: "Science", time: "90 min", level: "11-12" },
        { name: "Government & Politics", subject: "Social Studies", time: "50 min", level: "9-12" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
              📚 Lesson Plan Templates
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Ready-to-Use Templates
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Professional lesson plan templates designed by educators for educators. Save time and ensure consistency across all your lessons.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/en/pricing" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Get Premium Templates
              </Link>
              <Link href="/en/contact" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Request Custom Template
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {templateCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-lg text-gray-600">{category.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.templates.map((template, templateIndex) => (
                  <div key={templateIndex} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{template.name}</h3>
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {template.subject}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{template.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Grade Level:</span>
                        <span className="font-medium">{template.level}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Link 
                        href="/en/pricing" 
                        className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                      >
                        Preview Template
                      </Link>
                      <button className="w-full text-purple-600 text-center py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors">
                        Save to Library
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Teachers Love Our Templates</h2>
            <p className="text-lg text-gray-600">Designed by educators, tested in real classrooms</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Time-Saving</h3>
              <p className="text-gray-600">Cut lesson planning time by 75% with pre-structured templates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Standards-Aligned</h3>
              <p className="text-gray-600">Every template is aligned with curriculum standards and learning objectives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fully Customizable</h3>
              <p className="text-gray-600">Adapt any template to fit your teaching style and student needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Save Hours of Planning Time?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Access our complete library of lesson plan templates and start teaching smarter today.
          </p>
          <Link
            href="/en/pricing"
            className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get All Templates
          </Link>
        </div>
      </div>
    </div>
  );
}