import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['en', 'de'],
  defaultLocale: 'en',
  localePrefix: 'always',
  localeDetection: false
});

export default function middleware(request: NextRequest) {
  const { pathname, hostname, origin } = request.nextUrl;
  
  // For preview/development domains, use standard next-intl
  if (hostname.includes('vercel.app') || hostname.includes('localhost')) {
    return intlMiddleware(request);
  }
  
  // Handle production domains - work WITH Vercel's domain preferences
  if (hostname === 'zazateach.com' || hostname === 'www.zazateach.com') {
    // If there's a Vercel redirect preference, respect it
    // Just handle the locale redirect on whichever domain we land on
    if (pathname === '/') {
      const url = new URL('/en', origin);
      return NextResponse.redirect(url, { status: 307 });
    }
    
    // For localized paths, let them through without domain changes
    if (pathname.startsWith('/en') || pathname.startsWith('/de')) {
      return NextResponse.next();
    }
  }
  
  // Handle legacy domain
  if (hostname === 'teach.zaza.ai') {
    const url = new URL(request.url);
    url.hostname = 'zazateach.com';
    return NextResponse.redirect(url, { status: 301 });
  }
  
  // Default to next-intl middleware for any other cases
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};