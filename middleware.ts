import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'de'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Always prefix locales for consistency with [locale] structure
  localePrefix: 'always'
});

export const config = {
  // Match all pathnames except for specific exclusions
  matcher: [
    // Match all pathnames except for:
    // - API routes (/api/*)
    // - Next.js internals (_next/*)
    // - Static files (*.*)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};