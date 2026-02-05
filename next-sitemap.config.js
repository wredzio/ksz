/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.nameOfSite.pl",
  generateRobotsTxt: true, // (optional)
  exclude: ["/studio", "*.txt", "*.png", "*.jpg", "*.jpeg", "*.svg"],
  transform: async (config, path) => {
    return {
      loc: `${config.siteUrl}${path}`, // Full URL
      lastmod: new Date().toISOString(),
      changefreq: path === "/" ? "monthly" : "weekly", // Main route = monthly, others = weekly
      priority: path === "/" ? 1.0 : 0.7, // Main route = highest priority, others = normal
    };
  },
};
