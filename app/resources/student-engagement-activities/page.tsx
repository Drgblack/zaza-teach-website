import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Engagement Activities | Free Teaching Resources',
  description: 'Creative activities to boost student participation',
};

export default function StudentEngagementActivitiesPage() {
  return (
    <div className="min-h-screen bg-white py-12 print:py-0">
      <div className="max-w-4xl mx-auto px-4 print:px-0 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Student Engagement Activities
        </h1>
        <p className="text-gray-600 mb-8">
          This resource is coming soon! We're compiling the best engagement strategies.
        </p>
        <a 
          href="/resources" 
          className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
        >
          Back to Resources
        </a>
      </div>
    </div>
  );
}