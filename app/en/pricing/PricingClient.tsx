'use client';

import React from 'react';
import CurrencySwitcher from '@/components/CurrencySwitcher';
import { useCurrency } from '@/components/CurrencyProvider';
import { formatPrice } from '@/lib/currency';
import { startCheckout } from '@/lib/checkout';
import { redirectToFreeSignup } from '@/lib/free-signup';
import {
  BillingInterval,
  CheckoutPlan,
  DEFAULT_INTERVAL,
  FREE_PLAN_PRICE,
  PRICING,
} from '@/lib/pricing';
import { useTranslations, useLocale } from '../../../components/LocaleProvider';
import { Check, Star } from 'lucide-react';

export default function PricingClient() {
  const t = useTranslations();
  const locale = useLocale();
  const { currency } = useCurrency();
  const [interval, setInterval] = React.useState<BillingInterval>(DEFAULT_INTERVAL);
  const [pendingCheckoutPlan, setPendingCheckoutPlan] = React.useState<CheckoutPlan | null>(null);
  const priceLocale = locale === 'de' ? 'de-DE' : 'en-US';

  // Helper to safely get translation objects/arrays
  const getTranslationObject = (key: string, fallback: any = {}): any => {
    const result = t(key);
    return typeof result === 'object' && result !== null ? result : fallback;
  };

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
        page_location: window.location.href,
        selected_currency: currency,
        selected_interval: interval,
      });
    }
  };

  const trackPlanCTAClick = (planName: string, planPrice: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'pricing_plan_cta_click', {
        event_category: 'pricing',
        event_label: planName,
        value: planPrice,
        currency,
        plan_name: planName,
        locale,
      });
    }
  };

  const handlePlanAction = async (plan: CheckoutPlan) => {
    const planNames = {
      free: plans?.free?.name || 'Free',
      draft: plans?.draft?.name || 'Draft',
      teach: plans?.pro?.name || 'Pro',
      bundle: plans?.bundle?.name || 'Bundle',
    };

    const planPrices = {
      free: FREE_PLAN_PRICE,
      draft: PRICING.draft[interval][currency].amount,
      teach: PRICING.teach[interval][currency].amount,
      bundle: PRICING.bundle[interval][currency].amount,
    };

    trackPlanCTAClick(planNames[plan], planPrices[plan]);

    if (plan === 'free') {
      try {
        redirectToFreeSignup({
          currency,
          interval,
          locale: locale === 'de' ? 'de' : 'en',
          source: 'pricing_page',
        });
      } catch (error) {
        console.error('Failed to start free signup flow from pricing page.', {
          currency,
          error,
          interval,
          locale,
          plan,
        });
        window.alert('We could not open the free signup flow. Please try again.');
      }
      return;
    }

    try {
      setPendingCheckoutPlan(plan);
      await startCheckout({
        plan,
        interval,
        currency,
        locale: locale === 'de' ? 'de' : 'en',
        source: 'pricing_page',
      });
    } catch (error) {
      console.error('Failed to start checkout:', error);
      window.alert('We could not start checkout. Please try again.');
    } finally {
      setPendingCheckoutPlan(null);
    }
  };

  // Track page view on component mount
  React.useEffect(() => {
    trackPricingView();
  }, [currency, interval]);

  const paidPlanPeriodLabel = interval === 'yearly' ? '/year' : plans?.pro?.period || '/month';
  const bundlePeriodLabel = interval === 'yearly' ? '/year' : plans?.bundle?.period || '/month';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {heroTitle.split('thrive as a teacher').length > 1 ? (
              <>
                {heroTitle.split('thrive as a teacher')[0]}
                <span className="bg-gradient-to-r from-[#E0115F] to-[#8A2BE2] bg-clip-text text-transparent">
                  thrive as a teacher
                </span>
                {heroTitle.split('thrive as a teacher')[1]}
              </>
            ) : heroTitle}
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            {heroSubtitle}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <CurrencySwitcher />
            <div
              className="inline-flex items-center rounded-full border border-blue-100 bg-white/90 p-1 shadow-sm backdrop-blur"
              role="group"
              aria-label="Billing interval selector"
            >
              {(['monthly', 'yearly'] as const).map((value) => {
                const isActive = interval === value;

                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setInterval(value)}
                    className={[
                      'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-700 hover:bg-slate-100',
                    ].join(' ')}
                    aria-pressed={isActive}
                  >
                    {value === 'monthly' ? 'Monthly' : 'Yearly'}
                  </button>
                );
              })}
            </div>
          </div>
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
                  {formatPrice(FREE_PLAN_PRICE, currency, priceLocale)}
                </span>
                <span className="text-gray-500 text-lg ml-1">
                  {plans?.free?.period || '/month'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => void handlePlanAction('free')}
                disabled={pendingCheckoutPlan === 'free'}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-block text-center text-lg disabled:cursor-not-allowed disabled:opacity-70"
              >
                {plans?.free?.cta || 'Start Free'}
              </button>
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
                {plans?.pro?.badge || 'Most Popular'}
              </span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {plans?.pro?.name || 'Pro'}
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">
                  {formatPrice(PRICING.teach[interval][currency].amount, currency, priceLocale)}
                </span>
                <span className="text-gray-500 text-lg ml-1">
                  {paidPlanPeriodLabel}
                </span>
              </div>
              <button
                type="button"
                onClick={() => void handlePlanAction('teach')}
                disabled={pendingCheckoutPlan === 'teach'}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-block text-center text-lg disabled:cursor-not-allowed disabled:opacity-70"
              >
                {plans?.pro?.cta || 'Start Pro'}
              </button>
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
                  {formatPrice(PRICING.bundle[interval][currency].amount, currency, priceLocale)}
                </span>
                <span className="text-gray-500 text-lg ml-1">
                  {bundlePeriodLabel}
                </span>
              </div>
              <button
                type="button"
                onClick={() => void handlePlanAction('bundle')}
                disabled={pendingCheckoutPlan === 'bundle'}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors inline-block text-center text-lg disabled:cursor-not-allowed disabled:opacity-70"
              >
                {plans?.bundle?.cta || 'Get Bundle'}
              </button>
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
            {proof?.line1 || 'Teachers are already saving hours every week'}
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
