import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import { BreadcrumbsJsonLd } from '@/components/SEOJsonLd';

export const metadata: Metadata = {
  title: 'Pricing | Zaza Teach - Simple, Transparent Pricing',
  description: 'Choose the perfect plan for your teaching needs. Free tier available with premium features for advanced users.',
  alternates: { canonical: canonical('/pricing') },
  openGraph: { url: canonical('/pricing'), title: 'Pricing | Zaza Teach - Simple, Transparent Pricing' },
  twitter: { card: 'summary_large_image' }
};

const breadcrumbs = [
  { name: 'Home', item: canonical('/') },
  { name: 'Pricing', item: canonical('/pricing') }
];

export default function PricingPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={breadcrumbs} />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your teaching needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Free Plan",
                price: "€0",
                period: "",
                features: [
                  "5 lesson plans per month",
                  "Basic templates",
                  "PDF export",
                  "Community support"
                ],
                cta: "Get Started Free",
                popular: false,
                buttonStyle: "bg-gray-600 hover:bg-gray-700"
              },
              {
                title: "Pro Plan", 
                price: "€19.99",
                period: "/month",
                features: [
                  "Unlimited lesson plans",
                  "Premium templates",
                  "Word & PDF export",
                  "Priority support",
                  "Advanced customization"
                ],
                cta: "Start Pro Trial",
                popular: true,
                buttonStyle: "bg-purple-600 hover:bg-purple-700"
              },
              {
                title: "Bundle",
                price: "€24.99", 
                period: "/month",
                features: [
                  "Zaza Teach + Zaza Promptly",
                  "All Pro features",
                  "Cross-platform sync",
                  "Advanced AI features",
                  "Custom integrations"
                ],
                cta: "Get Bundle",
                popular: false,
                buttonStyle: "bg-gray-600 hover:bg-gray-700"
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-8 relative ${
                  plan.popular ? 'ring-2 ring-purple-600' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {plan.title}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    className={`w-full text-white px-6 py-3 rounded-md font-medium transition-colors ${plan.buttonStyle}`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              All plans include access to our core lesson planning features
            </p>
            <p className="text-sm text-gray-500">
              Prices shown in EUR. Cancel anytime. No long-term commitments.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}