/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://main--fanciful-beijinho-c08e0e.netlify.app",
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
