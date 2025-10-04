'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

interface GoogleAnalyticsProps {
  trackingId?: string;
}

function GoogleAnalyticsInner({ trackingId = 'G-XXXXXXXXXX' }: GoogleAnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!trackingId || trackingId === 'G-XXXXXXXXXX') {
      console.warn('Google Analytics tracking ID not set. Please update NEXT_PUBLIC_GA_TRACKING_ID in your environment variables.');
      return;
    }

    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag = window.gtag || function() {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Track initial page view
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pathname,
    });

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector(`script[src*="${trackingId}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [trackingId]);

  useEffect(() => {
    if (!trackingId || trackingId === 'G-XXXXXXXXXX' || !window.gtag) return;

    const url = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ''}`;
    
    window.gtag('config', trackingId, {
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
    });

    // Track page view
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: url,
    });
  }, [pathname, searchParams, trackingId]);

  return null;
}

// Helper functions for tracking events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackLessonPlanCreated = (planType: string) => {
  trackEvent('lesson_plan_created', 'engagement', planType);
};

export const trackSignup = (method: string) => {
  trackEvent('sign_up', 'conversion', method);
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('click', 'engagement', `${buttonName}_${location}`);
};

export const trackCtaClick = (location: 'hero' | 'mid-cta' | 'pricing', label: 'start_free' | 'try_draft') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      location: location,
      label: label,
    });
  }
};

export const trackPricingClick = (plan: 'free' | 'pro' | 'bundle') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'pricing_click', {
      plan: plan,
    });
  }
};

export default function GoogleAnalytics(props: GoogleAnalyticsProps) {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsInner {...props} />
    </Suspense>
  );
}