'use client';

import { useState } from 'react';
import { Lightbulb, Settings, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  role: string;
  grade_subject: string;
  feature_title: string;
  priority: string;
  description: string;
  use_case: string;
  current_workaround: string;
  consent: boolean;
}

export default function FeatureRequestClient() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    role: '',
    grade_subject: '',
    feature_title: '',
    priority: '',
    description: '',
    use_case: '',
    current_workaround: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Fire GA4 event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'support_ticket_submitted', {
          priority: formData.priority,
          role: formData.role,
          locale: 'en',
          feature_title: formData.feature_title
        });
      }

      const response = await fetch('/api/feature-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          locale: 'en'
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50/40 pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Thanks! Your idea was received.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We'll email you an update once it's reviewed (usually within 48 hours).
            </p>
            <Link
              href="/en"
              className="inline-flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50/40 pt-24 pb-12">
      <div className="max-w-3xl md:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            Your ideas shape the future of Zaza Teach
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Tell us what would save you time or reduce stress. We'll use your feedback to build the features teachers really need.
          </p>
          <p className="text-sm text-gray-500 italic">
            Big or small, every idea matters - many of our best features started as teacher suggestions.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl border shadow-sm p-6 sm:p-8 mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Two-column fields on desktop */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="your.email@school.edu"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                  Role *
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select your role</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Administrator">Administrator</option>
                  <option value="Curriculum Coordinator">Curriculum Coordinator</option>
                  <option value="Instructional Coach">Instructional Coach</option>
                  <option value="Substitute Teacher">Substitute Teacher</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="grade_subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Grade Level / Subject
                </label>
                <input
                  type="text"
                  id="grade_subject"
                  name="grade_subject"
                  value={formData.grade_subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., 3rd Grade, High School Math"
                />
              </div>
            </div>

            {/* Single-column fields */}
            <div>
              <label htmlFor="feature_title" className="block text-sm font-medium text-gray-700 mb-2">
                Feature Title *
              </label>
              <input
                type="text"
                id="feature_title"
                name="feature_title"
                required
                value={formData.feature_title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Brief description of your feature idea"
              />
            </div>

            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                Priority *
              </label>
              <select
                id="priority"
                name="priority"
                required
                value={formData.priority}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">How important is this to you?</option>
                <option value="Low">Low - Nice to have</option>
                <option value="Medium">Medium - Would help my workflow</option>
                <option value="High">High - Would save significant time</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Detailed Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Describe what you'd like to see built. What should it do? How should it work?"
              ></textarea>
            </div>

            <div>
              <label htmlFor="use_case" className="block text-sm font-medium text-gray-700 mb-2">
                Use Case *
              </label>
              <textarea
                id="use_case"
                name="use_case"
                required
                value={formData.use_case}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="When and how would you use this feature? What problem does it solve?"
              ></textarea>
            </div>

            <div>
              <label htmlFor="current_workaround" className="block text-sm font-medium text-gray-700 mb-2">
                Current Workaround (Optional)
              </label>
              <textarea
                id="current_workaround"
                name="current_workaround"
                value={formData.current_workaround}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="How do you currently handle this task, if at all?"
              ></textarea>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                required
                checked={formData.consent}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="consent" className="ml-3 text-sm text-gray-700">
                I agree to the processing of my data according to the{' '}
                <Link href="/en/privacy" className="text-purple-600 hover:text-purple-700 underline">
                  Privacy Policy
                </Link>
                . *
              </label>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send My Idea'}
            </button>
          </form>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl border shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                What Makes a Great Feature Request
              </h3>
            </div>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Be specific about the problem you're trying to solve</li>
              <li>• Describe your ideal user experience</li>
              <li>• Include context about your teaching situation</li>
              <li>• Mention how often you'd use this feature</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Settings className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Our Development Process
              </h3>
            </div>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Ideas reviewed within 48 hours</li>
              <li>• Popular requests get prioritized</li>
              <li>• We prototype with teacher feedback</li>
              <li>• Updates sent when features launch</li>
            </ul>
          </div>
        </div>

        {/* Talk to Us CTA */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 text-center border border-indigo-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Want to discuss your idea first?
          </h3>
          <p className="text-gray-700 mb-6">
            Sometimes it helps to talk it through before submitting a formal request.
          </p>
          <Link
            href="/en/contact"
            className="inline-flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
}