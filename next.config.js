/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  pageExtensions: ['page.tsx'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/payment',
        permanent: true,
      },
    ];
  },
};
