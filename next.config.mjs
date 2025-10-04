/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['raw.githubusercontent.com', 'images.unsplash.com', 'plus.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
  },
  async redirects() {
    return [
      // Domain redirects (handle first, before path redirects)
      {
        source: "/:path*",
        has: [{ type: "host", value: "teach.zaza.ai" }],
        destination: "https://zazateach.com/:path*",
        permanent: true
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.zazateach.com" }],
        destination: "https://zazateach.com/:path*",
        permanent: true
      },
      // Root redirect to English (only for zazateach.com)
      {
        source: "/",
        has: [{ type: "host", value: "zazateach.com" }],
        destination: "/en",
        permanent: false
      }
    ];
  }
}

export default nextConfig;
