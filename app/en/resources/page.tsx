import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import { FileText, CheckSquare, Users, BookOpen, Zap, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Teaching Resources | Zaza Teach',
  description: 'Download free teaching resources, lesson plan templates, and educational PDFs from Zaza Teach.',
  alternates: { canonical: canonical('/resources') },
  openGraph: { url: canonical('/resources'), title: 'Free Teaching Resources | Zaza Teach' },
  twitter: { card: 'summary_large_image' }
};

const resources = [
  {
    title: 'Lesson Plan Template',
    description: 'A comprehensive template for creating structured lesson plans with all essential components.',
    viewUrl: '/en/resources/lesson-plan-template',
    icon: FileText,
    category: 'Planning',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Assessment Rubric Guide',
    description: 'Guidelines for creating effective assessment rubrics that measure student learning.',
    viewUrl: '/en/resources/assessment-rubric-guide',
    icon: CheckSquare,
    category: 'Assessment',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Classroom Management Tips',
    description: 'Practical strategies for effective classroom management and positive behavior support.',
    viewUrl: '/en/resources/classroom-management-tips',
    icon: Users,
    category: 'Management',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Student Engagement Activities',
    description: 'Creative activities to boost student participation and make learning interactive.',
    viewUrl: '/en/resources/student-engagement-activities',
    icon: BookOpen,
    category: 'Activities',
    color: 'from-orange-500 to-orange-600'
  },
  {
    title: 'AI Teaching Prompts Pack',
    description: 'Ready-to-use AI prompts for lesson planning, assessment creation, and content generation.',
    viewUrl: '/en/resources/ai-teaching-prompts',
    icon: Zap,
    category: 'AI Tools',
    color: 'from-pink-500 to-pink-600'
  },
  {
    title: 'Time-Saving Teacher Checklist',
    description: 'Weekly and daily checklists to streamline your workflow and maximize efficiency.',
    viewUrl: '/en/resources/time-saving-checklist',
    icon: Clock,
    category: 'Productivity',
    color: 'from-teal-500 to-teal-600'
  }
];

export default function ResourcesPage() {
  const locale = 'en'; // Since this is in the /en folder
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            Free Resources
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Teaching Resources
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Professional templates and guides designed to save you time and enhance your teaching effectiveness
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg px-4 py-3 text-blue-800 dark:text-blue-200">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium">
              Click any resource to view and print as PDF
            </span>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 overflow-hidden"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Category badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {resource.category}
                    </span>
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${resource.color} shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 line-clamp-3">
                    {resource.description}
                  </p>

                  {/* Action button */}
                  <a
                    href={resource.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${resource.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 group-hover:shadow-xl`}
                  >
                    <FileText className="w-4 h-4" />
                    View & Print
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Need More Resources?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Join Zaza Teach to access our full library of AI-powered lesson planning tools and premium resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${locale}/pricing`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Zap className="w-4 h-4" />
              Start Free Trial
            </a>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 px-8 py-3 rounded-xl font-semibold transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}