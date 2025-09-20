"use client";

import { Metadata } from 'next';
import { useState } from 'react';
import { canonical } from '@/lib/site';
import { FAQJsonLd } from '@/components/SEOJsonLd';
import { ChevronDown, Search, MessageCircle, Book, Shield, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Zaza Teach',
  description: 'Find answers to common questions about Zaza Teach, our AI lesson planning tool for educators.',
  alternates: { canonical: canonical('/faqs') },
  openGraph: { url: canonical('/faqs'), title: 'Frequently Asked Questions | Zaza Teach' },
  twitter: { card: 'summary_large_image' }
};

const faqCategories = [
  {
    category: 'Getting Started',
    icon: Book,
    color: 'purple',
    faqs: [
      {
        q: 'What is Zaza Teach?',
        a: 'Zaza Teach is an AI-powered lesson planning tool that helps teachers create curriculum-aligned lessons in minutes, with export options to Word and PDF.'
      },
      {
        q: 'How does Zaza Teach work?',
        a: 'Simply input your learning objectives, grade level, and subject area. Our AI will generate a complete lesson plan that you can customize and export.'
      },
      {
        q: 'Is Zaza Teach free to use?',
        a: 'Yes, Zaza Teach offers a free tier that includes basic lesson planning features. Premium features are available with our paid plans.'
      },
      {
        q: 'Do I need special software to use Zaza Teach?',
        a: 'No, Zaza Teach is a web-based application that works in any modern browser. No downloads or installations required.'
      }
    ]
  },
  {
    category: 'Features & Functionality',
    icon: MessageCircle,
    color: 'blue',
    faqs: [
      {
        q: 'What grade levels does Zaza Teach support?',
        a: 'Zaza Teach supports all grade levels from elementary through high school, with content adapted for each age group.'
      },
      {
        q: 'Can I export my lesson plans?',
        a: 'Yes, you can export your lesson plans to Word documents or PDF files for easy printing and sharing.'
      },
      {
        q: 'What subjects does Zaza Teach cover?',
        a: 'Zaza Teach covers all major subjects including Math, Science, English Language Arts, Social Studies, and more.'
      },
      {
        q: 'Can I customize the generated lesson plans?',
        a: 'Absolutely! All lesson plans are fully customizable, allowing you to modify content, activities, and assessments as needed.'
      },
      {
        q: 'How accurate are the AI-generated lesson plans?',
        a: 'Our AI is trained on educational best practices and curriculum standards to ensure high-quality, accurate lesson plans.'
      },
      {
        q: 'What languages does Zaza Teach support?',
        a: 'Zaza Teach is available in English, German, French, Spanish, and Italian, with more languages coming soon.'
      }
    ]
  },
  {
    category: 'Collaboration & Support',
    icon: Users,
    color: 'green',
    faqs: [
      {
        q: 'Can I collaborate with other teachers?',
        a: 'Yes, Zaza Teach includes collaboration features that allow you to share lesson plans and work together with colleagues.'
      },
      {
        q: 'Can I use Zaza Teach for homeschooling?',
        a: 'Yes, Zaza Teach is perfect for homeschool educators who want structured, curriculum-aligned lesson plans.'
      },
      {
        q: 'What support is available if I need help?',
        a: 'We offer comprehensive support including documentation, video tutorials, and direct customer support through our help center.'
      },
      {
        q: 'Can I integrate Zaza Teach with my school\'s LMS?',
        a: 'We are working on integrations with popular Learning Management Systems. Contact us for current integration options.'
      }
    ]
  },
  {
    category: 'Security & Privacy',
    icon: Shield,
    color: 'orange',
    faqs: [
      {
        q: 'Is my data secure with Zaza Teach?',
        a: 'Absolutely. We prioritize data security and privacy, with robust encryption and strict data protection policies.'
      },
      {
        q: 'How often is Zaza Teach updated?',
        a: 'We continuously improve Zaza Teach with regular updates, new features, and enhanced AI capabilities based on user feedback.'
      }
    ]
  }
];

const FAQItem = ({ faq, isOpen, onClick }: { faq: any, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        onClick={onClick}
        className="w-full px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">
          {faq.q}
        </h3>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 pb-5 bg-gray-50">
          <p className="text-gray-700 leading-relaxed">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FAQsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Flatten all FAQs for search and JSON-LD
  const allFaqs = faqCategories.flatMap(category => category.faqs);

  const toggleItem = (categoryIndex: number, faqIndex: number) => {
    const itemId = `${categoryIndex}-${faqIndex}`;
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId);
    } else {
      newOpenItems.add(itemId);
    }
    setOpenItems(newOpenItems);
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'bg-purple-100 text-purple-800 border-purple-200',
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      green: 'bg-green-100 text-green-800 border-green-200',
      orange: 'bg-orange-100 text-orange-800 border-orange-200'
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <>
      <FAQJsonLd faqs={allFaqs} />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about Zaza Teach. Can't find what you're looking for? 
              <a href="/contact" className="text-purple-600 hover:text-purple-800 font-medium ml-1">
                Contact our support team
              </a>
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-lg"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {faqCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div 
                  key={index}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    activeCategory === category.category 
                      ? getColorClasses(category.color)
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveCategory(activeCategory === category.category ? null : category.category)}
                >
                  <Icon className={`w-6 h-6 mb-2 ${
                    activeCategory === category.category ? '' : 'text-gray-600'
                  }`} />
                  <h3 className={`font-semibold text-sm ${
                    activeCategory === category.category ? '' : 'text-gray-900'
                  }`}>
                    {category.category}
                  </h3>
                  <p className={`text-xs ${
                    activeCategory === category.category ? 'opacity-80' : 'text-gray-500'
                  }`}>
                    {category.faqs.length} questions
                  </p>
                </div>
              );
            })}
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {(activeCategory 
              ? filteredCategories.filter(cat => cat.category === activeCategory)
              : filteredCategories
            ).map((category, categoryIndex) => {
              const Icon = category.icon;
              const actualCategoryIndex = faqCategories.findIndex(cat => cat.category === category.category);
              
              return (
                <div key={category.category} className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${getColorClasses(category.color)}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {category.category}
                      </h2>
                      <p className="text-gray-600">
                        {category.faqs.length} question{category.faqs.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {category.faqs.map((faq, faqIndex) => (
                      <FAQItem
                        key={faqIndex}
                        faq={faq}
                        isOpen={openItems.has(`${actualCategoryIndex}-${faqIndex}`)}
                        onClick={() => toggleItem(actualCategoryIndex, faqIndex)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No results found
              </h3>
              <p className="text-gray-600 mb-6">
                Try searching with different keywords or browse our categories above.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our support team is here to help you get the most out of Zaza Teach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/support"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Visit Help Center
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}