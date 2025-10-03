'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import Link from 'next/link';
import Head from 'next/head';
import { MessageCircle, HelpCircle, Mail, Clock, CheckCircle2, ExternalLink } from 'lucide-react';

const metadata: Metadata = {
  title: 'Contact Us | Zaza Teach - Get in Touch',
  description: 'Contact the Zaza Teach team. Get support, ask questions, or share feedback about our AI-powered teaching tools.',
  alternates: { canonical: canonical('/contact') },
  openGraph: { url: canonical('/contact'), title: 'Contact Us | Zaza Teach - Get in Touch' },
  twitter: { card: 'summary_large_image' }
};

interface ContactFormData {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  school: string;
  topic: string;
  priority: string;
  message: string;
  consent: boolean;
  marketing_opt_in: boolean;
  locale: string;
}

// Inject ContactPage JSON-LD schema
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Zaza Teach – Contact",
  "url": "https://zazateach.com/en/contact",
  "inLanguage": "en",
  "contactPoint": [{
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "email": "help@zazatechnologies.com",
    "availableLanguage": ["en", "de"]
  }]
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    first_name: '',
    last_name: '',
    email: '',
    role: '',
    school: '',
    topic: '',
    priority: '',
    message: '',
    consent: false,
    marketing_opt_in: false,
    locale: 'en'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showFeatureRequestNote, setShowFeatureRequestNote] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      
      // Show feature request note if topic is Feature Request
      if (name === 'topic' && value === 'Feature Request') {
        setShowFeatureRequestNote(true);
      } else if (name === 'topic') {
        setShowFeatureRequestNote(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Fire GA4 event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'contact_form_submitted', {
          topic: formData.topic,
          priority: formData.priority,
          locale: formData.locale,
          marketing_opt_in: formData.marketing_opt_in
        });
      }

      const response = await fetch('/api/support-ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.first_name} ${formData.last_name}`,
          email: formData.email,
          role: formData.role,
          school: formData.school,
          topic: formData.topic,
          priority: formData.priority,
          message: formData.message,
          consent: formData.consent,
          marketing_opt_in: formData.marketing_opt_in,
          locale: formData.locale
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
      <>
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
          />
        </Head>
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50/40 pt-24 pb-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Thanks! We've received your message and will reply within 24 hours.
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                If you need immediate assistance, try our live chat during business hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Back to Contact
                </button>
                <Link
                  href="/en"
                  className="inline-flex items-center justify-center bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50/40 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We'll reply within 24 hours. Real humans, clear answers.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
            {/* Contact Form */}
            <div className="rounded-2xl border bg-card shadow-sm p-6 sm:p-8 bg-white">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      required
                      value={formData.first_name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      required
                      value={formData.last_name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="john.doe@school.edu"
                  />
                </div>

                {/* Role and School */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Role *
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
                      <option value="Primary/Elementary Teacher">Primary/Elementary Teacher</option>
                      <option value="Secondary Teacher">Secondary Teacher</option>
                      <option value="Special Education Teacher">Special Education Teacher</option>
                      <option value="Department Head">Department Head</option>
                      <option value="School Leader / Administrator">School Leader / Administrator</option>
                      <option value="IT / Admin">IT / Admin</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
                      School/Organization (Optional)
                    </label>
                    <input
                      type="text"
                      id="school"
                      name="school"
                      value={formData.school}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Lincoln Elementary School"
                    />
                  </div>
                </div>

                {/* Topic */}
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                    Topic *
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    required
                    value={formData.topic}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">What do you need help with?</option>
                    <option value="Account & Billing">Account & Billing</option>
                    <option value="Technical Issue">Technical Issue</option>
                    <option value="Lesson Planning Help">Lesson Planning Help</option>
                    <option value="Sales & Partnerships">Sales & Partnerships</option>
                    <option value="Press & Media">Press & Media</option>
                    <option value="Data & Privacy">Data & Privacy</option>
                    <option value="Feature Request">Feature Request</option>
                  </select>
                  
                  {showFeatureRequestNote && (
                    <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-700">
                        💡 <Link 
                          href="/en/feature-request" 
                          className="text-blue-600 hover:text-blue-800 underline font-medium"
                        >
                          Submit a feature idea instead
                        </Link> - our dedicated feature request form is designed specifically for feature ideas and improvements.
                      </p>
                    </div>
                  )}
                </div>

                {/* Priority */}
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
                    <option value="">How urgent is this?</option>
                    <option value="Low">Low - General question</option>
                    <option value="Normal">Normal - Need help but not urgent</option>
                    <option value="High">High - Blocking my work</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                {/* Consent and Marketing Opt-in */}
                <div className="space-y-3">
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
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="marketing_opt_in"
                      name="marketing_opt_in"
                      checked={formData.marketing_opt_in}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label htmlFor="marketing_opt_in" className="ml-3 text-sm text-gray-700">
                      Send me occasional updates about new features and resources.
                    </label>
                  </div>
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
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Get in Touch */}
              <div className="rounded-2xl border bg-card shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-white" style={{ transition: 'transform 200ms ease, box-shadow 200ms ease' }}>
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Get in Touch</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Email</p>
                    <a 
                      href="mailto:help@zazatechnologies.com?subject=Zaza%20Teach%20Support"
                      className="text-purple-600 hover:text-purple-700 text-sm underline"
                    >
                      help@zazatechnologies.com
                    </a>
                    <p className="text-xs text-gray-500 mt-1">We reply within 24 hours.</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Live Chat</p>
                    <p className="text-xs text-gray-500">Available on our website</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Response Time</p>
                    <p className="text-xs text-gray-500">Email: within 24 hours</p>
                    <p className="text-xs text-gray-500">Chat: immediate during business hours</p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="rounded-2xl border bg-card shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-white" style={{ transition: 'transform 200ms ease, box-shadow 200ms ease' }}>
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Frequently Asked Questions</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Before reaching out, you might find your answer in our comprehensive FAQ section.
                    </p>
                    <Link
                      href="/en/faqs"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Visit FAQ
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Feature Request */}
              <div className="rounded-2xl border bg-card shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-white" style={{ transition: 'transform 200ms ease, box-shadow 200ms ease' }}>
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Have a Feature Idea?</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Help us improve Zaza Teach by sharing your feature requests and suggestions.
                    </p>
                    <Link
                      href="/en/feature-request"
                      className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium"
                    >
                      Submit Feature Request
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}