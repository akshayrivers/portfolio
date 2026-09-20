/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://vinod-akshat.vercel.app",
    generateRobotsTxt: true,
    sitemapSize: 5000,
    exclude: ['/admin', '/api/*'],
    trailingSlash: false,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                crawlDelay: 1,
            },
        ],
    },
};
