/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  /* async redirects() {
    return [
      {
        source: '/:path((?!api|_next/static|_next/image|favicon.ico|images).*)',
        has: [
          {
            type: 'host',
            value: 'komjirak.studio',
          },
        ],
        destination: 'https://www.komjirak.studio/:path*',
        permanent: true,
      },
    ]
  }, */
  async headers() {
    return [
      {
        source: '/:path((?!_next/static|_next/image|favicon.ico|images).*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig
