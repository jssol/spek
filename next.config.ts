/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr', 'sw'],
    defaultLocale: 'fr',
  localeDetection: true,
  },
}

module.exports = nextConfig;
