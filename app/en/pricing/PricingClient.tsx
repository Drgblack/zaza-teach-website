'use client';

import { useTranslations, useLocale } from '../../../components/LocaleProvider';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';

export default function PricingClient() {
  const t = useTranslations();
  const locale = useLocale();

  // Helper to safely get translation objects/arrays
  const getTranslationObject = (key: string, fallback: any = {}): any => {
    const result = t(key);
    return typeof result === 'object' && result !== null ? result : fallback;
  };

  const getTranslationArray = (key: string, fallback: string[] = []): string[] => {
    const result = t(key);
    return Array.isArray(result) ? result : fallback;
  };

  const pricingData = getTranslationObject('pricing');
  const plans = getTranslationObject('pricing.plans');
  const testimonials = getTranslationArray('pricing.testimonials.items');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative pt-16 pb-32 overflow-hidden">
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div className="mt-6">
                  <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {t('pricing.title')}
                  </h1>
                  <p className="mt-4 text-lg text-gray-500">
                    {t('pricing.subtitle')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Free Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">{plans?.free?.title || 'Free Plan'}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">{plans?.free?.price || '€0'}</span>
                <span className="text-gray-500">{plans?.free?.period || '/month'}</span>
              </div>
              <Link 
                href={`/${locale}/signup`}
                className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block text-center"
              >
                {plans?.free?.cta || 'Start Saving Time Free'}
              </Link>
              <p className="mt-2 text-sm text-gray-500">{plans?.free?.cancelAnytime || 'Cancel anytime'}</p>
            </div>
            <div className="mt-8">
              {plans?.free?.features && Object.entries(plans.free.features).map(([key, feature]: [string, any]) => (
                <div key={key} className="flex items-start mb-4">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium">{feature?.title || feature}</p>
                    {feature?.subtitle && <p className="text-gray-600 text-sm">{feature.subtitle}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8 relative border-2 border-blue-500">
            {plans?.pro?.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  {plans.pro.popular}
                </span>
              </div>
            )}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">{plans?.pro?.title || 'Pro Plan'}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">{plans?.pro?.price || '€19.99'}</span>
                <span className="text-gray-500">{plans?.pro?.period || '/month'}</span>
              </div>
              <Link 
                href={`/${locale}/signup?plan=pro`}
                className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block text-center"
              >
                {plans?.pro?.cta || 'Reclaim Your Sundays'}
              </Link>
              <p className="mt-2 text-sm text-gray-500">{plans?.pro?.cancelAnytime || 'Cancel anytime'}</p>
            </div>
            <div className="mt-8">
              {plans?.pro?.features && Object.entries(plans.pro.features).map(([key, feature]: [string, any]) => (
                <div key={key} className="flex items-start mb-4">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium">{feature?.title || feature}</p>
                    {feature?.subtitle && <p className="text-gray-600 text-sm">{feature.subtitle}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bundle Plan */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">{plans?.bundle?.title || 'Bundle'}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">{plans?.bundle?.price || '€24.99'}</span>
                <span className="text-gray-500">{plans?.bundle?.period || '/month'}</span>
              </div>
              <Link 
                href={`/${locale}/signup?plan=bundle`}
                className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block text-center"
              >
                {plans?.bundle?.cta || 'Teach & Communicate Smarter'}
              </Link>
              <p className="mt-2 text-sm text-gray-500">{plans?.bundle?.cancelAnytime || 'Cancel anytime'}</p>
            </div>
            <div className="mt-8">
              {plans?.bundle?.features && Object.entries(plans.bundle.features).map(([key, feature]: [string, any]) => (
                <div key={key} className="flex items-start mb-4">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-medium">{feature?.title || feature}</p>
                    {feature?.subtitle && <p className="text-gray-600 text-sm">{feature.subtitle}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer text */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">{t('pricing.footer')}</p>
        </div>
      </div>

      {/* Testimonials Section */}
      {testimonials && testimonials.length > 0 && (
        <div className="mt-20 bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t('pricing.testimonials.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial: any, index: number) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <p className="text-gray-700 mb-4">"{testimonial?.quote || ''}"</p>
                  <div className="text-sm text-gray-500">
                    <p className="font-medium text-gray-900">{testimonial?.author || ''}</p>
                    <p>{testimonial?.role || ''}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Trust Section */}
      <div className="mt-16 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-lg font-medium text-gray-900">{t('pricing.trust.trustedBy')}</p>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900">{t('pricing.trust.backedBy')}</p>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900">{t('pricing.trust.designedWith')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}