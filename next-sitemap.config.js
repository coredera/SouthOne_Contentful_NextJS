/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.examplesite.org.uk",
  outDir: "out",
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,

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
