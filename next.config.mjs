/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
  async redirects() {
    return [
      { source: '/crab', destination: '/product/crab', permanent: true },
      { source: '/gs', destination: '/product/gs', permanent: true },
      { source: '/ipfs', destination: '/product/ipfs', permanent: true },
      { source: '/ipfs1', destination: '/product/ipfs', permanent: true },
      { source: '/sm', destination: '/product/sm', permanent: true },
    ];
  },
};

export default nextConfig;
