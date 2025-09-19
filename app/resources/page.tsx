import { Metadata } from 'next';
import { canonical } from '@/lib/site';

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
    description: 'A comprehensive template for creating structured lesson plans.',
    viewUrl: '/resources/lesson-plan-template'
  },
  {
    title: 'Assessment Rubric Guide',
    description: 'Guidelines for creating effective assessment rubrics.',
    viewUrl: '/resources/assessment-rubric-guide'
  },
  {
    title: 'Classroom Management Tips',
    description: 'Practical strategies for effective classroom management.',
    viewUrl: '/resources/classroom-management-tips'
  },
  {
    title: 'Student Engagement Activities',
    description: 'Creative activities to boost student participation.',
    viewUrl: '/resources/student-engagement-activities'
  },
  {
    title: 'AI Teaching Prompts Pack',
    description: 'Ready-to-use AI prompts for lesson planning and assessment.',
    viewUrl: '/resources/ai-teaching-prompts'
  },
  {
    title: 'Time-Saving Teacher Checklist',
    description: 'Weekly and daily checklists to streamline your workflow.',
    viewUrl: '/resources/time-saving-checklist'
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Free Teaching Resources
          </h1>
          <p className="text-xl text-gray-600">
            View and print helpful templates and guides to enhance your teaching
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Tip: Click "View & Print" to open in a new tab, then use Ctrl+P (Cmd+P on Mac) to save as PDF
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {resource.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {resource.description}
              </p>
              <a
                href={resource.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
              >
                View & Print
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}