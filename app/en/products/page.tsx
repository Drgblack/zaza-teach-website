'use client';

import { BookOpenText, PenLine, FolderOpen, GraduationCap, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import { canonical } from '@/lib/site';
import { TeachAppJsonLd, BreadcrumbsJsonLd } from '@/components/SEOJsonLd';

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
  accentColor, 
  ctaVariant = 'primary',
  disabled = false,
  analyticsId 
}: {
  icon: any;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref?: string;
  accentColor: string;
  ctaVariant?: 'primary' | 'secondary' | 'outline' | 'disabled';
  disabled?: boolean;
  analyticsId: string;
}) => {
  const getCtaClasses = () => {
    const baseClasses = 'inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-200 focus:ring-2 focus:ring-offset-2 w-full sm:w-auto mt-5';
    
    switch (ctaVariant) {
      case 'primary':
        return `${baseClasses} bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500`;
      case 'secondary':
        return `${baseClasses} bg-sky-600 text-white hover:bg-sky-700 focus:ring-sky-500`;
      case 'outline':
        return `${baseClasses} border-2 border-${accentColor}-500 text-${accentColor}-600 hover:bg-${accentColor}-50 focus:ring-${accentColor}-500`;
      case 'disabled':
        return `${baseClasses} bg-gray-400 text-white cursor-not-allowed opacity-60`;
      default:
        return baseClasses;
    }
  };

  const cardContent = (
    <div className={`group relative bg-white rounded-2xl border shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-foreground/10 focus-within:ring-2 focus-within:ring-${accentColor}-500/50 p-6 sm:p-7 h-full flex flex-col`}>
      <div className="flex items-start gap-4 mb-4">
        <div className={`h-10 w-10 rounded-xl bg-${accentColor}-500/10 text-${accentColor}-600 flex items-center justify-center flex-shrink-0`}>
          <Icon size={22} className="group-hover:scale-105 transition-transform duration-200" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold tracking-tight text-gray-900">
            {title}
          </h3>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
        {description}
      </p>
      
      <div className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckCircle2 className={`text-${accentColor}-600 mt-0.5 h-4 w-4 flex-shrink-0`} />
            <span className="text-sm leading-6 text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-auto">
        {disabled || !ctaHref ? (
          <button
            className={getCtaClasses()}
            disabled={disabled}
            data-analytics={analyticsId}
            aria-label={ctaText}
            title={ctaText}
          >
            {ctaText}
          </button>
        ) : (
          <Link
            href={ctaHref}
            className={getCtaClasses()}
            data-analytics={analyticsId}
            aria-label={ctaText}
            title={ctaText}
          >
            {ctaText}
          </Link>
        )}
      </div>
    </div>
  );

  return cardContent;
};

export default function ProductsPage() {
  const products = [
    {
      icon: BookOpenText,
      title: 'Zaza Teach',
      description: 'Create curriculum-aligned lesson plans in minutes, not hours. Export to Word or PDF with school-safe privacy options.',
      features: [
        'Plans ready in 2-3 minutes',
        'Auto curriculum alignment',
        'Templates built by educators',
        'One-click export (Word/PDF)',
        'Safe, private, classroom-ready'
      ],
      ctaText: 'Try Zaza Teach Free',
      ctaHref: '/',
      accentColor: 'indigo',
      ctaVariant: 'primary' as const,
      analyticsId: 'products_teach_try'
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
      ctaText: 'Learn More / Join Waitlist',
      ctaHref: '#',
      accentColor: 'fuchsia',
      ctaVariant: 'outline' as const,
      analyticsId: 'products_draft_learn'
    },
    {
      icon: FolderOpen,
      title: 'Teacher Resources Library',
      description: 'Curated templates, guides, and activities created by educators. Save time with ready-to-use materials you can adapt instantly.',
      features: [
        'Lesson plan templates',
        'Classroom activities & worksheets',
        'Assessment tools',
        'Practical teaching guides'
      ],
      ctaText: 'Browse Resources',
      ctaHref: '/resources',
      accentColor: 'sky',
      ctaVariant: 'secondary' as const,
      analyticsId: 'products_resources_browse'
    },
    {
      icon: GraduationCap,
      title: 'Zaza Assess (Coming Soon)',
      description: 'Design smarter quizzes, tests, and rubrics in minutes. Aligned with learning objectives, backed by best practices.',
      features: [
        'Auto quiz generation',
        'Rubric creator',
        'Question bank & alignment',
        'Performance analytics'
      ],
      ctaText: 'Coming Soon',
      accentColor: 'emerald',
      ctaVariant: 'disabled' as const,
      disabled: true,
      analyticsId: 'products_assess_coming'
    }
  ];

  return (
    <>
      <TeachAppJsonLd pageUrl={canonical('/products')} />
      <BreadcrumbsJsonLd items={breadcrumbs} />
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-indigo-50/40 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-b from-indigo-50/60 to-transparent rounded-3xl py-10 sm:py-12 mb-8">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-3">
                Tools that give teachers time back
              </h1>
              <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Every Zaza product is built with one promise: save time, reduce stress, and help teachers thrive.
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}