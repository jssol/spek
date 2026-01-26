// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr', 'sw'],
    localeDetection: false,
  },
  fallbackLng: 'en',
  ns: ['common'],
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
