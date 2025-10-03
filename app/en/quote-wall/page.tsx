'use client';

import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import { Quote, Users } from 'lucide-react';
import Link from 'next/link';

const metadata: Metadata = {
  title: 'Quote Wall | Zaza Teach - Teacher Testimonials',
  description: 'Teachers are saving hours every week with Zaza Teach. Real stories from educators who have reduced stress and found more joy in teaching.',
  alternates: { canonical: canonical('/quote-wall') },
  openGraph: { url: canonical('/quote-wall'), title: 'Quote Wall | Zaza Teach - Teacher Testimonials' },
  twitter: { card: 'summary_large_image' }
};

const QuoteCard = ({ quote, isHero = false }: { quote: any; isHero?: boolean }) => {
  const cardClasses = isHero 
    ? "bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 p-6 sm:p-8 md:col-span-2 border border-gray-100"
    : "bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 p-6 sm:p-8 border border-gray-100";

  return (
    <div className={cardClasses}>
      <div className="mb-4">
        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
          <Quote className="w-5 h-5 text-indigo-600" aria-hidden="true" />
        </div>
        <p className={`text-gray-700 italic leading-relaxed ${isHero ? 'text-xl' : 'text-lg'}`}>
          "{quote.text}"
        </p>
      </div>
      <div className="border-t border-gray-200 pt-4">
        <p className="font-semibold text-gray-900">{quote.author}</p>
        <p className="text-sm text-purple-600">{quote.role}</p>
        {quote.school && <p className="text-sm text-gray-500">{quote.school}</p>}
      </div>
    </div>
  );
};

export default function QuoteWallPage() {
  const heroQuote = {
    text: "For the first time in years, I had a Sunday dinner with my family instead of lesson planning. Zaza Teach gave me my weekends back.",
    author: "Sarah M.",
    role: "Year 6 Teacher",
    school: ""
  };

  const quotes = [
    {
      text: "I finally feel like teaching is sustainable again. I can focus on my students without feeling constantly buried under admin.",
      author: "David Thompson",
      role: "Secondary School Teacher",
      school: "Westfield Academy"
    },
    {
      text: "Zaza Teach has completely transformed how I approach lesson planning. What used to take me hours now takes minutes, and the quality is consistently excellent.",
      author: "Sarah Johnson",
      role: "5th Grade Teacher",
      school: "Lincoln Elementary School"
    },
    {
      text: "The curriculum alignment feature is a game-changer. I know every lesson meets state standards without having to double-check everything manually.",
      author: "Michael Chen",
      role: "High School Science Teacher",
      school: "Roosevelt High School"
    },
    {
      text: "As a new teacher, Zaza Teach gave me confidence in my lesson planning. The AI understands educational best practices better than I expected.",
      author: "Emily Rodriguez",
      role: "2nd Grade Teacher",
      school: "Maple Valley Elementary"
    },
    {
      text: "The differentiated instruction options have helped me reach every student in my diverse classroom. Zaza Teach truly understands education.",
      author: "Lisa Patel",
      role: "Special Education Teacher",
      school: "Harmony Inclusive Academy"
    },
    {
      text: "I was skeptical about AI in education, but Zaza Teach proved me wrong. It enhances my teaching rather than replacing my expertise.",
      author: "Robert Martinez",
      role: "History Teacher",
      school: "Jefferson High School"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50/40 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            Teachers are saving hours every week with Zaza Teach
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from educators who've reduced stress, regained balance, and found more joy in teaching.
          </p>
        </div>

        {/* Hero Quote */}
        <div className="mb-12">
          <QuoteCard quote={heroQuote} isHero={true} />
        </div>

        {/* Regular Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {quotes.map((quote, index) => (
            <QuoteCard key={index} quote={quote} />
          ))}
        </div>

        {/* Community CTA */}
        <div className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-2xl p-8 sm:p-12 text-center border border-purple-200/50">
          <div className="flex justify-center mb-6">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Join 1,000+ educators already thriving with Zaza Teach
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to save hours every week and find more joy in teaching? Join thousands of educators who have already transformed their lesson planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              data-analytics="quote_wall_try_free"
            >
              Try Zaza Teach Free
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              data-analytics="quote_wall_share_story"
            >
              Share Your Story
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}