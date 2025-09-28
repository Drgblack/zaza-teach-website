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
  const resourceCategories = [
    {
      title: "Worksheets & Activities",
      icon: "📝",
      count: "2,500+",
      description: "Interactive worksheets and engaging activities for all subjects",
      color: "blue"
    },
    {
      title: "Assessment Tools",
      icon: "📊",
      count: "800+", 
      description: "Rubrics, quizzes, and assessment templates to measure progress",
      color: "green"
    },
    {
      title: "Visual Aids",
      icon: "🎨",
      count: "1,200+",
      description: "Posters, infographics, and visual learning materials",
      color: "purple"
    },
    {
      title: "Project Guides",
      icon: "🏗️",
      count: "600+",
      description: "Step-by-step project templates and assignment frameworks",
      color: "orange"
    }
  ];

  const featuredResources = [
    {
      title: "Math Fact Fluency Bundle",
      type: "Worksheet Pack",
      grade: "K-3",
      downloads: "15.2k",
      rating: 4.9,
      image: "🔢"
    },
    {
      title: "Science Lab Report Template",
      type: "Assessment Tool",
      grade: "6-12",
      downloads: "8.7k", 
      rating: 4.8,
      image: "🔬"
    },
    {
      title: "Reading Comprehension Strategies",
      type: "Visual Aid",
      grade: "3-8",
      downloads: "12.1k",
      rating: 4.9,
      image: "📚"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-6">
              📚 Resource Library
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Resource Library
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Thousands of ready-to-use educational resources at your fingertips. From worksheets to assessment tools, find everything you need to enhance your classroom.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>5,000+ Resources</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>All Grade Levels</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>Standards Aligned</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's in Our Library</h2>
            <p className="text-lg text-gray-600">Comprehensive resources for every teaching need</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {resourceCategories.map((category, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-200 group`}>
                <div className={`w-16 h-16 bg-${category.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold text-${category.color}-600 mb-1`}>{category.count}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Resources */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Most Popular Resources</h2>
            <p className="text-lg text-gray-600">Top downloads loved by teachers worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-200">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">{resource.image}</span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <span>⭐</span>
                        <span className="text-sm text-gray-600">{resource.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{resource.type}</span>
                    <span>Grade {resource.grade}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">{resource.downloads} downloads</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Free</span>
                  </div>
                  
                  <Link 
                    href="/en/resources" 
                    className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                  >
                    Download Resource
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Access</h2>
            <p className="text-lg text-gray-600">Jump straight to what you need</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/en/resources" className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:from-blue-100 hover:to-blue-200 transition-all duration-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white text-2xl">🆓</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Free Resources</h3>
                <p className="text-blue-800 mb-4">Access hundreds of free educational materials</p>
                <span className="text-blue-600 font-medium">Browse Free Resources →</span>
              </div>
            </Link>
            
            <Link href="/en/resources/lesson-plan-template" className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 hover:from-purple-100 hover:to-purple-200 transition-all duration-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">Lesson Templates</h3>
                <p className="text-purple-800 mb-4">Professional lesson plan templates and frameworks</p>
                <span className="text-purple-600 font-medium">Get Templates →</span>
              </div>
            </Link>
            
            <Link href="/en/pricing" className="group bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-8 hover:from-emerald-100 hover:to-emerald-200 transition-all duration-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold text-emerald-900 mb-2">Premium Collection</h3>
                <p className="text-emerald-800 mb-4">Unlock our complete library of premium resources</p>
                <span className="text-emerald-600 font-medium">Go Premium →</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Access Thousands of Teaching Resources
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Save time and enhance your lessons with our comprehensive resource library. From worksheets to assessments, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/resources"
              className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore All Resources
            </Link>
            <Link
              href="/en/pricing"
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Premium Access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}