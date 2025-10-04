import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'de'],
  defaultLocale: 'en',
  localePrefix: 'always',   // <— important: do NOT strip /en
  localeDetection: false    // <— avoid cookie/Accept-Language redirects
});

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};