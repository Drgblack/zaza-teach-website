import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import { FAQJsonLd } from '@/components/SEOJsonLd';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Zaza Teach',
  description: 'Find answers to common questions about Zaza Teach, our AI lesson planning tool for educators.',
  alternates: { canonical: canonical('/faqs') },
  openGraph: { url: canonical('/faqs'), title: 'Frequently Asked Questions | Zaza Teach' },
  twitter: { card: 'summary_large_image' }
};

const faqs = [
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
    q: 'What grade levels does Zaza Teach support?',
    a: 'Zaza Teach supports all grade levels from elementary through high school, with content adapted for each age group.'
  },
  {
    q: 'Can I export my lesson plans?',
    a: 'Yes, you can export your lesson plans to Word documents or PDF files for easy printing and sharing.'
  },
  {
    q: 'Is my data secure with Zaza Teach?',
    a: 'Absolutely. We prioritize data security and privacy, with robust encryption and strict data protection policies.'
  },
  {
    q: 'What subjects does Zaza Teach cover?',
    a: 'Zaza Teach covers all major subjects including Math, Science, English Language Arts, Social Studies, and more.'
  },
  {
    q: 'Can I collaborate with other teachers?',
    a: 'Yes, Zaza Teach includes collaboration features that allow you to share lesson plans and work together with colleagues.'
  },
  {
    q: 'How accurate are the AI-generated lesson plans?',
    a: 'Our AI is trained on educational best practices and curriculum standards to ensure high-quality, accurate lesson plans.'
  },
  {
    q: 'Can I customize the generated lesson plans?',
    a: 'Absolutely! All lesson plans are fully customizable, allowing you to modify content, activities, and assessments as needed.'
  },
  {
    q: 'What languages does Zaza Teach support?',
    a: 'Zaza Teach is available in English, German, French, Spanish, and Italian, with more languages coming soon.'
  },
  {
    q: 'Do I need special software to use Zaza Teach?',
    a: 'No, Zaza Teach is a web-based application that works in any modern browser. No downloads or installations required.'
  },
  {
    q: 'How often is Zaza Teach updated?',
    a: 'We continuously improve Zaza Teach with regular updates, new features, and enhanced AI capabilities based on user feedback.'
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
];

export default function FAQsPage() {
  return (
    <>
      <FAQJsonLd faqs={faqs} />
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about Zaza Teach
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}