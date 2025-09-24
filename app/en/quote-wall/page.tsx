import { Metadata } from 'next';
import { canonical } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Quote Wall | Zaza Teach - Teacher Testimonials',
  description: 'Read inspiring quotes and testimonials from teachers who have transformed their lesson planning with Zaza Teach AI tools.',
  alternates: { canonical: canonical('/quote-wall') },
  openGraph: { url: canonical('/quote-wall'), title: 'Quote Wall | Zaza Teach - Teacher Testimonials' },
  twitter: { card: 'summary_large_image' }
};

export default function QuoteWallPage() {
  const quotes = [
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
      text: "I can finally focus on what I love most about teaching - connecting with my students - instead of spending weekends writing lesson plans.",
      author: "David Thompson",
      role: "Middle School English Teacher",
      school: "Westfield Middle School"
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
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zaza Quote Wall
          </h1>
          <p className="text-xl text-gray-600">
            Hear from educators who are transforming their teaching with Zaza Teach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {quotes.map((quote, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <svg className="w-8 h-8 text-purple-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"/>
                </svg>
                <p className="text-gray-700 text-lg italic leading-relaxed">
                  "{quote.text}"
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{quote.author}</p>
                <p className="text-sm text-purple-600">{quote.role}</p>
                <p className="text-sm text-gray-500">{quote.school}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Community of Educators
          </h2>
          <p className="text-gray-700 mb-6">
            Ready to transform your teaching experience? Join thousands of educators who have already discovered the power of AI-assisted lesson planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Try Zaza Teach Free
            </a>
            <a
              href="/contact"
              className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors"
            >
              Share Your Story
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}