'use client';

import React from 'react';
import { useTranslations, useLocale } from '../../../components/LocaleProvider';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

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
  const proof = getTranslationObject('pricing.proof');

  const heroTitle = t('pricing.heroTitle');
  const heroSubtitle = t('pricing.heroSubtitle');
  const disclaimer = t('pricing.disclaimer');

  // GA4 Event handlers
  const trackPricingView = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'pricing_view', {
        event_category: 'pricing',
        event_label: locale,
        page_title: 'Pricing Page',
        page_location: window.location.href
      });
    }
  };

  const trackPlanCTAClick = (planName: string, planPrice: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'pricing_plan_cta_click', {
        event_category: 'pricing',
        event_label: planName,
        value: parseFloat(planPrice.replace(/[^\d.]/g, '')),
        currency: 'EUR',
        plan_name: planName,
        locale: locale
      });
    }
  };

  const trackBundleOutboundClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'bundle_outbound_click', {
        event_category: 'pricing',
        event_label: 'zaza_draft_bundle',
        locale: locale
      });
    }
  };

  // Track page view on component mount
  React.useEffect(() => {
    trackPricingView();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {heroTitle}
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            {heroSubtitle}
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          
          {/* Free Plan */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {plans?.free?.name || 'Free'}
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">
                  {plans?.free?.price || '0 €'}
                </span>
                <span className="text-gray-500 text-lg ml-1">
                  {plans?.free?.period || '/Monat'}
                </span>
              </div>
              <Link 
                href={`/${locale}/signup`}
                onClick={() => trackPlanCTAClick('Free', plans?.free?.price || '0')}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-block text-center text-lg"
              >
                {plans?.free?.cta || 'Kostenlos starten'}
              </Link>
            </div>
            
            <div className="space-y-4">
              {plans?.free?.bullets && plans.free.bullets.map((bullet: string, index: number) => (
                <div key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">{bullet}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-500 p-8 relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                <Star className="h-4 w-4 mr-1" />
                {plans?.pro?.badge || 'Am beliebtesten'}
              </span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {plans?.pro?.name || 'Pro'}
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">
                  {plans?.pro?.price || '19,99 €'}
                </span>
                <span className="text-gray-500 text-lg ml-1">
                  {plans?.pro?.period || '/Monat'}
                </span>
              </div>
              <Link 
                href={`/${locale}/signup?plan=pro`}
                onClick={() => trackPlanCTAClick('Pro', plans?.pro?.price || '19.99')}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-block text-center text-lg"
              >
                {plans?.pro?.cta || 'Pro starten'}
              </Link>
            </div>
            
            <div className="space-y-4">
              {plans?.pro?.bullets && plans.pro.bullets.map((bullet: string, index: number) => (
                <div key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">{bullet}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bundle Plan */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {plans?.bundle?.name || 'Bundle'}
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">
                  {plans?.bundle?.price || '24,99 €'}
                </span>
                <span className="text-gray-500 text-lg ml-1">
                  {plans?.bundle?.period || '/Monat'}
                </span>
              </div>
              <a 
                href={plans?.bundle?.ctaLink || 'https://zazadraft.com/de'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackBundleOutboundClick}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors inline-block text-center text-lg"
              >
                {plans?.bundle?.cta || 'Bundle holen'}
              </a>
            </div>
            
            <div className="space-y-4">
              {plans?.bundle?.bullets && plans.bundle.bullets.map((bullet: string, index: number) => (
                <div key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {disclaimer}
          </p>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            {proof?.line1 || 'Lehrkräfte sparen bereits jede Woche Stunden ein'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {proof?.pillars && proof.pillars.map((pillar: string, index: number) => (
              <div key={index} className="text-center">
                <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                  {pillar}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}