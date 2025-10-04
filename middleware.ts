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
  
  // Handle domain canonicalization first
  if (hostname === 'www.zazateach.com') {
    const url = new URL(request.url);
    url.hostname = 'zazateach.com';
    return NextResponse.redirect(url, { status: 301 });
  }
  
  if (hostname === 'teach.zaza.ai') {
    const url = new URL(request.url);
    url.hostname = 'zazateach.com';
    return NextResponse.redirect(url, { status: 301 });
  }
  
  // For preview/development domains, use standard next-intl
  if (hostname.includes('vercel.app') || hostname.includes('localhost')) {
    return intlMiddleware(request);
  }
  
  // For production domain (zazateach.com), handle root redirect manually
  if (hostname === 'zazateach.com') {
    if (pathname === '/') {
      const url = new URL('/en', origin);
      return NextResponse.redirect(url, { status: 307 });
    }
    
    // For localized paths, let them through without further processing
    if (pathname.startsWith('/en') || pathname.startsWith('/de')) {
      return NextResponse.next();
    }
  }
  
  // Default to next-intl middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};