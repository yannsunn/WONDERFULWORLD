/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
    ],
  },
  // Prepared for future i18n support
  // i18n: {
  //   locales: ['ja', 'en'],
  //   defaultLocale: 'ja',
  // },
};

export default nextConfig;
