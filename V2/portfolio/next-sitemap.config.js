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
            // AI crawlers / recruiter assistants: explicitly welcome.
            // A machine-readable candidate summary lives at /llms.txt
            ...[
                'GPTBot',
                'ChatGPT-User',
                'ClaudeBot',
                'anthropic-ai',
                'PerplexityBot',
                'Google-Extended',
                'Bytespider',
                'cohere-ai',
            ].map((userAgent) => ({
                userAgent,
                allow: '/',
                disallow: ['/api/', '/admin/'],
            })),
        ],
    },
};
