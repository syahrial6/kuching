/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.travelkuching.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priorities based on path
    const priorityMap = {
      "/": 1.0,
      "/vehicles": 0.9,
      "/wisata-pontianak": 0.8,
      "/gallery": 0.6,
    };

    const changefreqMap = {
      "/": "weekly",
      "/vehicles": "weekly",
      "/wisata-pontianak": "monthly",
      "/gallery": "monthly",
    };

    return {
      loc: path,
      changefreq: changefreqMap[path] || "monthly",
      priority: priorityMap[path] || 0.5,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      images: [],
    };
  },
};
