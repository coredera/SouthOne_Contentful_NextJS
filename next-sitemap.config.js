/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://southonenewham.com",
  //outDir: "out",
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  //sitemapBaseFileName: "sitemap",

  robotsTxtOptions: {
    policies: [{ userAgent: "*", disallow: "/api" }],
   //policies: [{ userAgent: "*", disallow: '/' }], 
  },
  //exclude: ["/api/*", "/server-sitemap.xml"],
  //robotsTxtOptions: {
  //  additionalSitemaps: [
  //    "https://www.examplesite.org.uk",
  //  ],
  //},
};
