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
  const featuredTemplates = [
    {
      title: "Math Problem Solving",
      subject: "Mathematics",
      grade: "K-5",
      description: "Interactive math templates with visual aids and step-by-step problem solving guides.",
      features: ["Visual manipulatives", "Differentiated levels", "Assessment rubrics"]
    },
    {
      title: "Reading Comprehension",
      subject: "English Language Arts",
      grade: "3-8",
      description: "Engaging reading templates with comprehension strategies and discussion prompts.",
      features: ["Pre-reading activities", "Guided questions", "Extension activities"]
    },
    {
      title: "Science Investigation",
      subject: "Science",
      grade: "6-12",
      description: "Inquiry-based science templates with lab procedures and data analysis.",
      features: ["Hypothesis formation", "Data collection sheets", "Conclusion frameworks"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6">
              🎨 Smart Templates
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Smart Templates
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Professional lesson templates that adapt to your teaching style. Choose from hundreds of curriculum-aligned templates for every subject and grade level.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Templates */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Templates</h2>
            <p className="text-lg text-gray-600">Popular templates loved by teachers worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredTemplates.map((template, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-200">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                      {template.subject}
                    </span>
                    <span className="text-sm text-gray-500">{template.grade}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{template.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {template.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href="/en/templates" 
                  className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  View Template
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Template Categories */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600">Find the perfect template for any lesson</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔢</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mathematics</h3>
              <p className="text-gray-600 text-sm mb-4">Problem solving, algebra, geometry, and more</p>
              <Link href="/en/templates" className="text-blue-600 font-medium hover:text-blue-700">
                Browse Math Templates →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">English Language Arts</h3>
              <p className="text-gray-600 text-sm mb-4">Reading, writing, literature, and language</p>
              <Link href="/en/templates" className="text-green-600 font-medium hover:text-green-700">
                Browse ELA Templates →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Science</h3>
              <p className="text-gray-600 text-sm mb-4">Biology, chemistry, physics, and earth science</p>
              <Link href="/en/templates" className="text-purple-600 font-medium hover:text-purple-700">
                Browse Science Templates →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Social Studies</h3>
              <p className="text-gray-600 text-sm mb-4">History, geography, civics, and culture</p>
              <Link href="/en/templates" className="text-orange-600 font-medium hover:text-orange-700">
                Browse Social Studies →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Access Our Complete Template Library
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Save hours of planning time with professionally designed templates for every subject and grade level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/templates"
              className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore All Templates
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