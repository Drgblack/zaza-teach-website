import { Metadata } from 'next';
import { canonical } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Feature Request | Zaza Teach - Help Us Improve',
  description: 'Submit feature requests and suggestions to help us make Zaza Teach even better for educators. Your input shapes our development roadmap.',
  alternates: { canonical: canonical('/feature-request') },
  openGraph: { url: canonical('/feature-request'), title: 'Feature Request | Zaza Teach - Help Us Improve' },
  twitter: { card: 'summary_large_image' }
};

export default function FeatureRequestPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Feature Request
          </h1>
          <p className="text-xl text-gray-600">
            Help us build the teaching tools you need. Your ideas drive our innovation.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Request a New Feature
          </h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="your.email@school.edu"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                Your Role
              </label>
              <select
                id="role"
                name="role"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select your role</option>
                <option value="teacher">Teacher</option>
                <option value="administrator">Administrator</option>
                <option value="curriculum-coordinator">Curriculum Coordinator</option>
                <option value="instructional-coach">Instructional Coach</option>
                <option value="substitute-teacher">Substitute Teacher</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="grade-level" className="block text-sm font-medium text-gray-700 mb-2">
                Grade Level/Subject (if applicable)
              </label>
              <input
                type="text"
                id="grade-level"
                name="grade-level"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="e.g., 3rd Grade, High School Math, K-5"
              />
            </div>

            <div>
              <label htmlFor="feature-title" className="block text-sm font-medium text-gray-700 mb-2">
                Feature Title
              </label>
              <input
                type="text"
                id="feature-title"
                name="feature-title"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Brief, descriptive title for your feature idea"
              />
            </div>

            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                Priority Level
              </label>
              <select
                id="priority"
                name="priority"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select priority</option>
                <option value="low">Nice to have</option>
                <option value="medium">Would be helpful</option>
                <option value="high">Really need this</option>
                <option value="critical">Can't work without it</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Detailed Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Describe the feature you'd like to see. What problem would it solve? How would you use it?"
              ></textarea>
            </div>

            <div>
              <label htmlFor="use-case" className="block text-sm font-medium text-gray-700 mb-2">
                Use Case Example
              </label>
              <textarea
                id="use-case"
                name="use-case"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Walk us through a specific scenario where you'd use this feature"
              ></textarea>
            </div>

            <div>
              <label htmlFor="current-workaround" className="block text-sm font-medium text-gray-700 mb-2">
                How do you currently handle this? (Optional)
              </label>
              <textarea
                id="current-workaround"
                name="current-workaround"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="What's your current process or workaround for this need?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Submit Feature Request
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              🎯 What Makes a Great Feature Request
            </h3>
            <ul className="text-blue-800 space-y-2">
              <li>• Clear problem description</li>
              <li>• Specific use case examples</li>
              <li>• Explanation of current pain points</li>
              <li>• Ideas for how it might work</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">
              🚀 Our Development Process
            </h3>
            <ul className="text-purple-800 space-y-2">
              <li>• We review all requests within 48 hours</li>
              <li>• Popular features get prioritized</li>
              <li>• You'll get updates on development progress</li>
              <li>• Beta testing opportunities for contributors</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-gray-100 to-purple-100 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Want to Discuss Your Idea First?
          </h3>
          <p className="text-gray-700 mb-4">
            Sometimes it helps to talk through your idea before submitting a formal request.
          </p>
          <a
            href="/contact"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </div>
  );
}