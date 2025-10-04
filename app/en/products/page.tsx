'use client';

import { BookOpenText, PenLine, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import { TeachAppJsonLd, BreadcrumbsJsonLd } from '@/components/SEOJsonLd';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const metadata: Metadata = {
  title: 'Products | Zaza Teach - AI Lesson Planning Tools',
  description: 'Tools that give teachers time back. Every Zaza product saves time, reduces stress, and helps teachers thrive.',
  alternates: { canonical: canonical('/products') },
  openGraph: { url: canonical('/products'), title: 'Products | Zaza Teach - AI Lesson Planning Tools' },
  twitter: { card: 'summary_large_image' }
};

const breadcrumbs = [
  { name: 'Home', item: canonical('/') },
  { name: 'Products', item: canonical('/products') }
];

const ProductCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  ctaText, 
  ctaHref, 
  isExternal = false,
  onClick
}: {
  icon: any;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  isExternal?: boolean;
  onClick?: () => void;
}) => {
  const cardClasses = "rounded-2xl border border-slate-200/70 bg-white shadow-sm p-6 md:p-8 dark:bg-slate-900 dark:border-slate-700/60 dark:shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset] h-full flex flex-col hover:shadow-md transition-shadow duration-200";
  const titleClasses = "text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-50";
  const descriptionClasses = "mt-2 text-slate-700 dark:text-slate-300 leading-relaxed";
  const featureListClasses = "space-y-2 mt-4 flex-1";
  const featureTextClasses = "text-slate-800 dark:text-slate-200";
  const ctaClasses = "mt-6 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium bg-violet-600 text-white hover:bg-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900 transition-colors duration-200 w-full justify-center";

  const ctaContent = (
    <div className="mt-auto">
      {isExternal ? (
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className={ctaClasses}
          aria-label={`${ctaText} (new tab)`}
        >
          {ctaText}
        </a>
      ) : (
        <Link
          href={ctaHref}
          onClick={onClick}
          className={ctaClasses}
        >
          {ctaText}
        </Link>
      )}
    </div>
  );

  return (
    <div className={cardClasses}>
      <div className="flex items-start gap-4 mb-4">
        <div className="h-12 w-12 rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400 flex items-center justify-center flex-shrink-0">
          <Icon size={24} aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className={titleClasses}>
            {title}
          </h2>
        </div>
      </div>
      
      <p className={descriptionClasses}>
        {description}
      </p>
      
      <div className={featureListClasses}>
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckCircle className="text-emerald-600 dark:text-emerald-400 mt-0.5 h-4 w-4 flex-shrink-0" />
            <span className={featureTextClasses}>{feature}</span>
          </div>
        ))}
      </div>
      
      {ctaContent}
    </div>
  );
};

export default function ProductsPage() {
  const locale = 'en';

  // Analytics tracking
  const trackProductsCTAClick = (product: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'products_cta_click', {
        product: product,
        locale: locale
      });
    }
  };

  const products = [
    {
      icon: BookOpenText,
      title: 'Zaza Teach',
      description: 'Create curriculum-aligned lesson plans in minutes, not hours. Export to Word or PDF with school-safe privacy options.',
      features: [
        'Plans ready in 2–3 minutes',
        'Auto curriculum alignment',
        'Templates built by educators',
        'One-click export (Word/PDF)',
        'Safe, private, classroom-ready'
      ],
      ctaText: 'Try Zaza Teach Free',
      ctaHref: `/${locale}/`,
      isExternal: false,
      onClick: () => trackProductsCTAClick('teach')
    },
    {
      icon: PenLine,
      title: 'Zaza Draft',
      description: 'The stress-free way to write professional parent messages in minutes. Drafts you can trust, with tone, translation, and closing-line suggestions.',
      features: [
        'Rewrite & polish in one click',
        'Built-in tone & style guide',
        'Instant translations',
        'Safe, professional, parent-ready'
      ],
      ctaText: 'Try Zaza Draft',
      ctaHref: 'https://zazadraft.com?utm_source=teach&utm_medium=products&utm_campaign=cross_nav',
      isExternal: true,
      onClick: () => trackProductsCTAClick('draft')
    }
  ];

  return (
    <>
      <TeachAppJsonLd pageUrl={canonical('/products')} />
      <BreadcrumbsJsonLd items={breadcrumbs} />
      <main className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-center text-2xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
              Tools that give teachers time back
            </h1>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Every Zaza product saves time, reduces stress, and helps teachers thrive.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}