/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
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
      }
    ];
  }
}

export default nextConfig
