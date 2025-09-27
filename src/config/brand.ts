/**
 * Brand Asset Configuration
 * 
 * Centralized configuration for all brand assets including logos, favicons,
 * and other brand-related files. This ensures consistency across the application.
 */

export const brandAssets = {
  // Main logos
  logos: {
    // Real circular gradient Z logo (blue to purple)
    primary: '/zaza_z_logo.png',
    // Alternative circular logo
    circular: '/logo.png',
    // SVG version for scalability
    svg: '/logo-real.svg',
    // For backwards compatibility
    default: '/zaza_z_logo.png'
  },
  
  // Favicon and app icons
  favicons: {
    ico: '/favicon.ico',
    png: '/favicon.png',
    sizes: {
      '16x16': '/favicon-16x16.png',
      '32x32': '/favicon-32x32.png',
      '180x180': '/apple-touch-icon.png',
      '192x192': '/android-chrome-192x192.png',
      '512x512': '/android-chrome-512x512.png'
    }
  },
  
  // Open Graph and social media
  social: {
    ogImage: '/og-image.png'
  }
} as const;

// Brand configuration
export const brandConfig = {
  name: 'Zaza Teach',
  shortName: 'Zaza',
  tagline: 'AI Lesson Planning for Educators',
  
  // Theme colors (based on real Zaza brand)
  colors: {
    primary: '#66B2B2',
    gradient: {
      from: '#5B9BD5', // Blue (real brand start)
      to: '#8E44AD'    // Purple (real brand end)
    }
  },
  
  // Logo dimensions for different contexts
  logoSizes: {
    header: { width: 32, height: 32 },
    mobile: { width: 28, height: 28 },
    large: { width: 64, height: 64 }
  }
} as const;

// Helper function to get logo path
export function getLogoPath(variant: keyof typeof brandAssets.logos = 'default'): string {
  return brandAssets.logos[variant];
}

// Helper function to get favicon path
export function getFaviconPath(size?: keyof typeof brandAssets.favicons.sizes): string {
  if (size && brandAssets.favicons.sizes[size]) {
    return brandAssets.favicons.sizes[size];
  }
  return brandAssets.favicons.ico;
}