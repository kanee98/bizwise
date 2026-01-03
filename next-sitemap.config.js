/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bizwise.lk',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,

  exclude: [
    '/canvas',
    '/canvas/*',
    '/loader',
    '/loader/*',
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/canvas', '/loader'],
      },
    ],
  },
};
