import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Simple redirect for root to English
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  // Continue with the request for all other paths
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match root path only
    '/'
  ]
};