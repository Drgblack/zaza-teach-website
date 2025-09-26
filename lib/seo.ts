import { siteUrl } from './site';
import { getFaviconPath, brandAssets } from '@/src/config/brand';

export type Locale = 'en' | 'de';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  locale?: Locale;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}

export const localeConfig = {
  en: {
    code: 'en',
    lang: 'en',
    hreflang: 'en',
    region: 'US',
    openGraph: 'en_US',
    dir: 'ltr',
    name: 'English'
  },
  de: {
    code: 'de', 
    lang: 'de',
    hreflang: 'de',
    region: 'DE',
    openGraph: 'de_DE',
    dir: 'ltr',
    name: 'Deutsch'
  }
} as const;

export const defaultSEO = {
  en: {
    title: 'Zaza Teach | AI Lesson Planning for Educators',
    description: 'Plan lessons faster with Zaza Teach, the AI-powered tool for teachers. Create, customize, and share curriculum-aligned lessons in minutes.',
    keywords: ['AI lesson planning', 'teacher tools', 'curriculum design', 'educational technology', 'lesson plan generator', 'teaching assistant', 'education AI']
  },
  de: {
    title: 'Zaza Teach | KI-Unterrichtsplanung für Pädagogen', 
    description: 'Planen Sie Lektionen schneller mit Zaza Teach, dem KI-gestützten Tool für Lehrer. Erstellen, anpassen und teilen Sie lehrplangerechte Lektionen in Minuten.',
    keywords: ['KI Unterrichtsplanung', 'Lehrer Tools', 'Lehrplan Design', 'Bildungstechnologie', 'Unterrichtsplan Generator', 'Lehr-Assistent', 'Bildungs-KI']
  }
} as const;

export function getCanonicalUrl(path: string = '', locale?: Locale): string {
  // Remove leading slash to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (locale && locale !== 'en') {
    return `${siteUrl}/${locale}/${cleanPath}`.replace(/\/$/, '') || `${siteUrl}/${locale}`;
  }
  
  return cleanPath ? `${siteUrl}/${cleanPath}`.replace(/\/$/, '') : siteUrl;
}

export function getAlternateUrls(path: string = ''): Record<string, string> {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return {
    'x-default': getCanonicalUrl(cleanPath, 'en'), // Default to English
    'en': getCanonicalUrl(cleanPath, 'en'),
    'de': getCanonicalUrl(cleanPath, 'de'),
  };
}

export function generateSEOMetadata(config: SEOConfig) {
  const locale = config.locale || 'en';
  const localeSettings = localeConfig[locale];
  const defaults = defaultSEO[locale];
  
  const title = config.title || defaults.title;
  const description = config.description || defaults.description;
  const keywords = config.keywords || defaults.keywords;
  const path = config.path || '';
  const canonical = getCanonicalUrl(path, locale);
  const alternates = getAlternateUrls(path);
  const image = config.image || `${siteUrl}/og-image.png`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords,
    authors: [{ name: 'Dr. Greg Blackburn', url: `${getCanonicalUrl('about-founder', locale)}` }],
    creator: 'Zaza Technologies',
    publisher: 'Zaza Technologies',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical,
      languages: alternates,
    },
    generator: 'Next.js',
    applicationName: 'Zaza Teach',
    referrer: 'origin-when-cross-origin' as const,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    },
    icons: {
      icon: brandAssets.favicons.ico,
      shortcut: brandAssets.favicons.sizes['16x16'],
      apple: brandAssets.favicons.sizes['180x180'],
      other: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          url: brandAssets.favicons.sizes['32x32'],
        },
        {
          rel: 'icon',
          type: 'image/png', 
          sizes: '16x16',
          url: brandAssets.favicons.sizes['16x16'],
        },
      ],
    },
    manifest: '/manifest.json',
    openGraph: {
      type: config.type || 'website',
      locale: localeSettings.openGraph,
      alternateLocale: locale === 'en' ? ['de_DE'] : ['en_US'],
      url: canonical,
      siteName: 'Zaza Teach',
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `Zaza Teach - ${title}`,
        },
      ],
      ...(config.publishedTime && { publishedTime: config.publishedTime }),
      ...(config.modifiedTime && { modifiedTime: config.modifiedTime }),
      ...(config.author && { authors: [config.author] }),
      ...(config.tags && { tags: config.tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@zazatechnologies',
    },
  };
}

// Utility for getting hreflang data - component moved to components/HrefLangLinks.tsx
export function getHrefLangData(path: string = ''): Array<{hreflang: string, url: string}> {
  const alternates = getAlternateUrls(path);
  return Object.entries(alternates).map(([hreflang, url]) => ({ hreflang, url }));
}

// For dynamic pages that need to generate alternate URLs
export function generateAlternates(
  currentPath: string,
  currentLocale: Locale,
  availableLocales: Locale[] = ['en', 'de']
): Record<string, string> {
  const alternates: Record<string, string> = {};
  
  // Add x-default (typically English)
  alternates['x-default'] = getCanonicalUrl(currentPath, 'en');
  
  // Add each available locale
  availableLocales.forEach(locale => {
    alternates[locale] = getCanonicalUrl(currentPath, locale);
  });
  
  return alternates;
}