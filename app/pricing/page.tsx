import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import { BreadcrumbsJsonLd } from '@/components/SEOJsonLd';
import { Check, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing | Zaza Teach - Choose Your Time-Saving Plan',
  description: 'Choose the plan that helps you reclaim your time and thrive as a teacher. Start free or upgrade for unlimited lesson planning.',
  alternates: { canonical: canonical('/pricing') },
  openGraph: { url: canonical('/pricing'), title: 'Pricing | Zaza Teach - Choose Your Time-Saving Plan' },
  twitter: { card: 'summary_large_image' }
};

const breadcrumbs = [
  { name: 'Home', item: canonical('/') },
  { name: 'Pricing', item: canonical('/pricing') }
];

const testimonials = [
  {
    quote: "Zaza Teach gave me my Sundays back. I can finally spend time with my family instead of stressing over lesson plans.",
    author: "Emma T.",
    role: "Primary School Teacher",
    avatar: "/placeholder-user.jpg"
  },
  {
    quote: "I was drowning in admin. Now, with lesson planning done in minutes, I can focus on the fun parts of teaching again.",
    author: "Marcus D.",
    role: "Secondary School Teacher", 
    avatar: "/placeholder-user.jpg"
  },
  {
    quote: "The templates are spot-on and save me hours. Honestly, I feel like a better teacher because I have the energy to be present with my students.",
    author: "Sofia L.",
    role: "Language Teacher",
    avatar: "/placeholder-user.jpg"
  }
];

export default function PricingPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbs} />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Choose the plan that helps you{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                reclaim your time
              </span>{' '}
              and thrive as a teacher.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of educators who've transformed their teaching experience with smart lesson planning.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 p-8 border border-gray-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Free Plan
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">€0</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
                
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Save hours every month with ready-to-use lessons.</span>
                      <p className="text-sm text-gray-600">5 lesson plans per month</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Quick-start ideas for everyday teaching.</span>
                      <p className="text-sm text-gray-600">Basic templates</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Take your lessons anywhere - print or share in seconds.</span>
                      <p className="text-sm text-gray-600">PDF export</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Join a growing community of educators who share and support each other.</span>
                      <p className="text-sm text-gray-600">Community support</p>
                    </div>
                  </li>
                </ul>
                
                <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-200">
                  Start Saving Time Free
                </button>
                <p className="text-sm text-gray-500 mt-3">Cancel anytime</p>
              </div>
            </div>

            {/* Pro Plan - Most Popular */}
            <div className="bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 p-8 border-2 border-purple-500 relative overflow-hidden">
              {/* Popular Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </span>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-2xl"></div>
              
              <div className="text-center relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-4">
                  Pro Plan
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">€19.99</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
                
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Plan every class in minutes, stress-free.</span>
                      <p className="text-sm text-gray-600">Unlimited lesson plans</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Access advanced, curriculum-aligned teaching resources.</span>
                      <p className="text-sm text-gray-600">Premium templates</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Download and customize lessons for staff meetings and parents.</span>
                      <p className="text-sm text-gray-600">Word & PDF export</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Get fast answers when you need them most.</span>
                      <p className="text-sm text-gray-600">Priority support</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Tailor lessons to your unique classroom.</span>
                      <p className="text-sm text-gray-600">Advanced customization</p>
                    </div>
                  </li>
                </ul>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-200 transform hover:translate-y-[-2px]">
                  Reclaim Your Sundays
                </button>
                <p className="text-sm text-gray-500 mt-3">Cancel anytime</p>
              </div>
            </div>

            {/* Bundle Plan */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 p-8 border border-gray-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Bundle
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">€24.99</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
                
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Lesson planning plus parent communication in one.</span>
                      <p className="text-sm text-gray-600">Zaza Teach + Zaza Promptly</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Everything you need to plan smarter.</span>
                      <p className="text-sm text-gray-600">All Pro features</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Seamlessly switch between laptop and mobile.</span>
                      <p className="text-sm text-gray-600">Cross-platform sync</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Smarter suggestions, faster planning.</span>
                      <p className="text-sm text-gray-600">Advanced AI features</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Connect with your favorite tools.</span>
                      <p className="text-sm text-gray-600">Custom integrations</p>
                    </div>
                  </li>
                </ul>
                
                <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-200">
                  Teach & Communicate Smarter
                </button>
                <p className="text-sm text-gray-500 mt-3">Cancel anytime</p>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mb-20">
            <p className="text-gray-600 text-lg">
              All plans include access to our core lesson planning features. Cancel anytime. No hidden fees.
            </p>
          </div>

          {/* Testimonials Section */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Teachers are already saving hours every week with Zaza Teach
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Badge Row */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center space-x-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Trusted by over 1,000+ educators worldwide</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Backed by 20+ years of education expertise</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Designed with teachers, for teachers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}