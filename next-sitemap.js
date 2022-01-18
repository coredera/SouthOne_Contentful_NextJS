module.exports = {
  siteUrl: "https://www.guidedogs.org.uk/blog",
 // outDir: "public/blog",
  generateRobotsTxt: true, // (optional)

  robotsTxtOptions: {
   // policies: [{ userAgent: "*", disallow: "/api" }],
   policies: [{ userAgent: "*", disallow: '/' }],
  },
  //exclude: ["/api/*", "/server-sitemap.xml"],
  //robotsTxtOptions: {
  //  additionalSitemaps: [
  //    "https://www.guidedogs.org.uk",
  //  ],
  //},
};
