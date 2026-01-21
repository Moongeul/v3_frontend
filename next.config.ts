import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    // 빌드 시 ESLint 경고 및 에러를 무시하고 빌드를 진행합니다.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shopping-phinf.pstatic.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'k.kakaocdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'k.kakaocdn.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
