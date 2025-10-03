interface RateLimitOptions {
  limit: number;
  window: string; // e.g., '24h', '1h', '1m'
}

interface RateLimitResult {
  ok: boolean;
  remaining: number;
  resetTime: number;
}

// Simple in-memory rate limiter (for production, use Redis/Vercel KV)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function parseWindow(window: string): number {
  const unit = window.slice(-1);
  const value = parseInt(window.slice(0, -1));
  
  switch (unit) {
    case 'h':
      return value * 60 * 60 * 1000;
    case 'm':
      return value * 60 * 1000;
    case 's':
      return value * 1000;
    default:
      throw new Error('Invalid window format. Use format like "24h", "1h", "30m"');
  }
}

export async function rateLimit(
  identifier: string,
  options: RateLimitOptions
): Promise<RateLimitResult> {
  const windowMs = parseWindow(options.window);
  const now = Date.now();
  
  // Clean up expired entries
  for (const [key, data] of rateLimitStore.entries()) {
    if (data.resetTime <= now) {
      rateLimitStore.delete(key);
    }
  }
  
  const existing = rateLimitStore.get(identifier);
  
  if (!existing || existing.resetTime <= now) {
    // First request or window has expired
    const resetTime = now + windowMs;
    rateLimitStore.set(identifier, { count: 1, resetTime });
    
    return {
      ok: true,
      remaining: options.limit - 1,
      resetTime
    };
  }
  
  if (existing.count >= options.limit) {
    // Rate limit exceeded
    return {
      ok: false,
      remaining: 0,
      resetTime: existing.resetTime
    };
  }
  
  // Increment counter
  existing.count++;
  rateLimitStore.set(identifier, existing);
  
  return {
    ok: true,
    remaining: options.limit - existing.count,
    resetTime: existing.resetTime
  };
}

// Helper to get client IP from request
export function getClientIP(request: Request): string {
  // Check various headers for the real IP
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  
  if (forwarded) {
    // x-forwarded-for can contain multiple IPs, take the first one
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  if (cfConnectingIP) {
    return cfConnectingIP;
  }
  
  // Fallback
  return 'unknown';
}