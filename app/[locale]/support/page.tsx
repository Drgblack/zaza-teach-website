import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Support | Zaza Teach - Help Center',
  description: 'Get help with Zaza Teach. Find answers to common questions, troubleshooting guides, and contact our support team.',
  alternates: { canonical: canonical('/support') },
  openGraph: { url: canonical('/support'), title: 'Support | Zaza Teach - Help Center' },
  twitter: { card: 'summary_large_image' }
};

export default function SupportPage() {
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

  const supportCategories = [
    {
      title: "Getting Started",
      icon: "🚀",
      description: "New to Zaza Teach? Learn the basics",
      links: [
        { name: "Quick Start Guide", href: "/blog" },
        { name: "Video Tutorials", href: "/blog" },
        { name: "Account Setup", href: "/blog" }
      ]
    },
    {
      title: "Lesson Planning",
      icon: "📚",
      description: "Master the art of AI-assisted planning",
      links: [
        { name: "Creating Your First Lesson", href: "/blog" },
        { name: "Curriculum Alignment", href: "/blog" },
        { name: "Customization Tips", href: "/blog" }
      ]
    },
    {
      title: "Technical Help",
      icon: "🔧",
      description: "Troubleshooting and technical issues",
      links: [
        { name: "Browser Requirements", href: "/blog" },
        { name: "Export Issues", href: "/blog" },
        { name: "Performance Tips", href: "/blog" }
      ]
    },
    {
      title: "Account & Billing",
      icon: "💳",
      description: "Manage your account and subscription",
      links: [
        { name: "Billing Information", href: "/blog" },
        { name: "Upgrade/Downgrade", href: "/blog" },
        { name: "Account Settings", href: "/blog" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support Center
          </h1>
          <p className="text-xl text-gray-600">
            Get the help you need to make the most of Zaza Teach
          </p>
        </div>

        {/* Quick Help Section */}
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Immediate Help?
            </h2>
            <p className="text-gray-700 mb-6">
              Choose the best way to get support based on your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Contact Support Team
              </Link>
              <Link
                href="/faqs"
                className="bg-white text-purple-600 border-2 border-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors"
              >
                Browse All FAQs
              </Link>
            </div>
          </div>
        </div>

        {/* Support Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
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
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
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
          <div className="text-center mt-8">
            <Link
              href="/faqs"
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              View All FAQs →
            </Link>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              📧 Email Support
            </h3>
            <p className="text-blue-800 mb-4">
              Get detailed help via email. We respond within 24 hours.
            </p>
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Send Email →
            </Link>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-3">
              💬 Live Chat
            </h3>
            <p className="text-green-800 mb-4">
              Chat with our support team during business hours.
            </p>
            <button className="text-green-600 hover:text-green-800 font-medium">
              Start Chat →
            </button>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">
              🚀 Feature Request
            </h3>
            <p className="text-purple-800 mb-4">
              Have an idea for a new feature? We'd love to hear it!
            </p>
            <Link
              href="/feature-request"
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              Submit Idea →
            </Link>
          </div>
        </div>

        {/* Support Hours */}
        <div className="mt-12 bg-gray-100 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Support Hours
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-medium">Email Support</p>
              <p>24/7 - We respond within 24 hours</p>
            </div>
            <div>
              <p className="font-medium">Live Chat</p>
              <p>Monday - Friday, 9 AM - 6 PM EST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}