'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import Link from 'next/link';
import { MessageCircle, HelpCircle, Search, Lightbulb, Settings, Users, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

const metadata: Metadata = {
  title: 'Support Center | Zaza Teach - Help Center',
  description: 'Get help fast from real humans. Most emails answered within 24 hours. Find answers, contact support, or chat with our team.',
  alternates: { canonical: canonical('/support') },
  openGraph: { url: canonical('/support'), title: 'Support Center | Zaza Teach - Help Center' },
  twitter: { card: 'summary_large_image' }
};

interface SupportFormData {
  name: string;
  email: string;
  role: string;
  school: string;
  topic: string;
  priority: string;
  message: string;
  consent: boolean;
}

export default function SupportPage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState<SupportFormData>({
    name: '',
    email: '',
    role: '',
    school: '',
    topic: '',
    priority: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

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
      const response = await fetch('/api/support-ticket', {
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
      setShowContactForm(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqItems = [
    {
      question: "How do I get started with Zaza Teach?",
      answer: "Simply visit our homepage and click 'Try Zaza Teach Free'. You can start creating lessons immediately without any setup required."
    },
    {
      question: "Is my lesson plan data secure and private?",
      answer: "Yes, absolutely. We're FERPA and COPPA compliant. Your lesson plans and data remain private and are never used to train our AI models."
    },
    {
      question: "Can I export my lesson plans?",
      answer: "Yes! You can export your lesson plans to Word documents or PDF files for easy printing and sharing with colleagues."
    },
    {
      question: "What curriculum standards does Zaza Teach support?",
      answer: "We support Common Core State Standards, state-specific standards, and international curricula. Our AI automatically aligns lessons to your selected standards."
    },
    {
      question: "How much does Zaza Teach cost?",
      answer: "We offer a free tier to get you started, with premium features available through our subscription plans. Visit our pricing page for detailed information."
    }
  ];

  const filteredFaqItems = faqItems.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const supportCategories = [
    {
      title: "Getting Started",
      icon: Lightbulb,
      description: "New to Zaza Teach? Learn the basics",
      links: [
        { name: "Quick Start Guide", href: "/en/blog" },
        { name: "Video Tutorials", href: "/en/blog" },
        { name: "Account Setup", href: "/en/contact" }
      ]
    },
    {
      title: "Lesson Planning",
      icon: Settings,
      description: "Master the art of AI-assisted planning",
      links: [
        { name: "Creating Your First Lesson", href: "/en/blog" },
        { name: "Curriculum Alignment", href: "/en/blog" },
        { name: "Customization Tips", href: "/en/blog" }
      ]
    },
    {
      title: "Technical Help",
      icon: Settings,
      description: "Troubleshooting and technical issues",
      links: [
        { name: "Browser Requirements", href: "/en/blog" },
        { name: "Export Issues", href: "/en/contact" },
        { name: "Performance Tips", href: "/en/blog" }
      ]
    },
    {
      title: "Account & Billing",
      icon: Users,
      description: "Manage your account and subscription",
      links: [
        { name: "Billing Information", href: "/en/pricing" },
        { name: "Upgrade/Downgrade", href: "/en/pricing" },
        { name: "Account Settings", href: "/en/contact" }
      ]
    },
    {
      title: "System Status",
      icon: Settings,
      description: "Check service status and updates",
      links: [
        { name: "Current Status", href: "https://status.zazateach.com" },
        { name: "Incident History", href: "https://status.zazateach.com" },
        { name: "Maintenance Schedule", href: "https://status.zazateach.com" }
      ]
    },
    {
      title: "Data & Privacy",
      icon: Users,
      description: "Data protection and privacy controls",
      links: [
        { name: "Privacy Policy", href: "/en/privacy" },
        { name: "Data Subject Rights", href: "/en/privacy" },
        { name: "Contact Privacy Team", href: "/en/contact" }
      ]
    }
  ];

  if (isSubmitted) {
    return (
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
                Back to Support
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
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50/40 pt-24 pb-12">
      <div className="max-w-3xl md:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            Support Center
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get help fast from real humans. Most emails answered within 24 hours.
          </p>
        </div>

        {/* Action Bar */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 mb-12 border border-indigo-100">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowContactForm(!showContactForm)}
                className="inline-flex items-center justify-center bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </button>
              <button
                className="inline-flex items-center justify-center border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                disabled={!process.env.NEXT_PUBLIC_CHAT_ENABLED}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Live Chat
              </button>
              <Link
                href="/en/faqs"
                className="inline-flex items-center justify-center text-gray-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                Browse all FAQs
              </Link>
            </div>
          </div>
        </div>

        {/* Inline Contact Form */}
        {showContactForm && (
          <div className="bg-white rounded-2xl border shadow-sm p-6 sm:p-8 mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Contact Support</h2>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                {showContactForm ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Two-column fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
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
                    placeholder="your.email@school.edu"
                  />
                </div>
              </div>

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
                    School (optional)
                  </label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    value={formData.school}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your school name"
                  />
                </div>
              </div>

              {/* Single-column fields */}
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
                  <option value="Feature Request">Feature Request</option>
                  <option value="Data & Privacy">Data & Privacy</option>
                </select>
              </div>

              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                  Priority / Severity *
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
                  placeholder="Please describe your issue or question in detail..."
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
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        )}

        {/* Support Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {supportCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white rounded-2xl border shadow-sm p-6 sm:p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-indigo-600" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-purple-600 hover:text-purple-800 text-sm transition-colors"
                      >
                        {link.name} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl border shadow-sm p-6 sm:p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          
          {/* Search Input */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search support topics or FAQs…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-6">
            {filteredFaqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
          
          {filteredFaqItems.length === 0 && searchQuery && (
            <div className="text-center py-8">
              <p className="text-gray-500">No FAQs found matching your search.</p>
            </div>
          )}
          
          <div className="text-center mt-8">
            <Link
              href="/en/faqs"
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              View All FAQs →
            </Link>
          </div>
        </div>


        {/* Support Hours */}
        <div className="bg-white rounded-2xl border shadow-sm p-6 sm:p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Support Hours
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">Email</p>
              <p className="text-gray-700">24/7 intake, replies within 24 hours.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">Live chat</p>
              <p className="text-gray-700">Monday–Friday, 9 AM–6 PM (your time zone).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}