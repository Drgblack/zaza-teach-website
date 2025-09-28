import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Educational Standards | Zaza Teach - Curriculum Standards Supported',
  description: 'Comprehensive list of educational standards supported by Zaza Teach. From Common Core to international curricula, ensure compliance with ease.',
  alternates: { canonical: canonical('/standards') },
  openGraph: { url: canonical('/standards'), title: 'Educational Standards | Zaza Teach' },
};

export default function StandardsPage() {
  const standardsCategories = [
    {
      title: "United States Standards",
      standards: [
        {
          name: "Common Core State Standards",
          subjects: ["Math", "English Language Arts"],
          description: "Comprehensive standards for K-12 mathematics and English language arts education.",
          coverage: "Full Coverage"
        },
        {
          name: "Next Generation Science Standards (NGSS)",
          subjects: ["Science"],
          description: "Performance expectations that combine practices, crosscutting concepts, and core ideas.",
          coverage: "Full Coverage"
        },
        {
          name: "C3 Framework for Social Studies",
          subjects: ["Social Studies"],
          description: "Framework emphasizing inquiry-based learning in social studies education.",
          coverage: "Full Coverage"
        }
      ]
    },
    {
      title: "State Standards",
      standards: [
        {
          name: "Texas Essential Knowledge and Skills (TEKS)",
          subjects: ["All Subjects"],
          description: "Texas state standards for curriculum and academic achievement.",
          coverage: "Full Coverage"
        },
        {
          name: "California Common Core Standards",
          subjects: ["Math", "ELA"],
          description: "California's implementation of Common Core with state-specific additions.",
          coverage: "Full Coverage"
        },
        {
          name: "Florida Standards",
          subjects: ["All Subjects"],
          description: "Florida's comprehensive academic standards for all grade levels.",
          coverage: "Full Coverage"
        },
        {
          name: "New York State Learning Standards",
          subjects: ["All Subjects"],
          description: "Standards that define what students should know and be able to do.",
          coverage: "Full Coverage"
        }
      ]
    },
    {
      title: "International Standards",
      standards: [
        {
          name: "International Baccalaureate (IB)",
          subjects: ["All Programs"],
          description: "Primary Years, Middle Years, and Diploma Programme standards.",
          coverage: "Full Coverage"
        },
        {
          name: "Cambridge International Curriculum",
          subjects: ["All Subjects"],
          description: "Cambridge Primary, Lower Secondary, and Upper Secondary programmes.",
          coverage: "Full Coverage"
        },
        {
          name: "Ontario Curriculum",
          subjects: ["All Subjects"],
          description: "Provincial curriculum standards for Ontario, Canada.",
          coverage: "Full Coverage"
        },
        {
          name: "Australian Curriculum",
          subjects: ["All Learning Areas"],
          description: "National curriculum for Foundation to Year 12 in Australia.",
          coverage: "Full Coverage"
        }
      ]
    }
  ];

  const features = [
    {
      icon: "🎯",
      title: "Automatic Alignment",
      description: "Every lesson plan is automatically aligned to your selected standards with specific standard codes and descriptions."
    },
    {
      icon: "📊",
      title: "Standards Tracking",
      description: "Track which standards you've covered throughout the year with comprehensive reporting and analytics."
    },
    {
      icon: "🔄",
      title: "Multi-Standard Support",
      description: "Align lessons to multiple standards simultaneously for comprehensive coverage and cross-curricular connections."
    },
    {
      icon: "📋",
      title: "Compliance Reports",
      description: "Generate detailed reports showing standards coverage for administrative review and curriculum audits."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-teal-50 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-6">
              📚 Educational Standards
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Supported Standards
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Comprehensive support for educational standards worldwide. From Common Core to international curricula, ensure your lessons meet all requirements with automatic alignment and tracking.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>50+ Standards Supported</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Automatic Alignment</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>Real-time Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Standards Alignment Features</h2>
            <p className="text-lg text-gray-600">Powerful tools to ensure curriculum compliance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Standards List */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Standards Coverage</h2>
            <p className="text-lg text-gray-600">Supporting educators worldwide with local and international standards</p>
          </div>
          
          {standardsCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{category.title}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {category.standards.map((standard, standardIndex) => (
                  <div key={standardIndex} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{standard.name}</h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {standard.subjects.map((subject, subjectIndex) => (
                            <span key={subjectIndex} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                        {standard.coverage}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{standard.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Standards Alignment Works</h2>
            <p className="text-lg text-gray-600">Simple, automatic, and comprehensive</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Select Your Standards</h3>
              <p className="text-gray-600">Choose from our comprehensive list of supported educational standards for your region and grade level.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Create Your Lesson</h3>
              <p className="text-gray-600">Use our AI lesson planner to create engaging, educational content tailored to your teaching goals.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Automatic Alignment</h3>
              <p className="text-gray-600">Your lesson is automatically aligned to relevant standards with specific codes and detailed explanations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Request Standards */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don't See Your Standards?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're constantly adding support for new educational standards. Let us know which standards you need and we'll prioritize adding them to our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Request Standards
            </Link>
            <Link
              href="/en/features/curriculum-alignment"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Learn More About Alignment
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Creating Standards-Aligned Lessons
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of educators who trust Zaza Teach for curriculum compliance and educational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/pricing"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Try Standards Alignment
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