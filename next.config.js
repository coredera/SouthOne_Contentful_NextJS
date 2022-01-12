module.exports = {
  basePath: '/blog',
  //assetPrefix: '/blog',
  //assetPrefix: './',
  images: {
    domains: ["images.ctfassets.net", "gd-blog.netlify.app", "www.guidedogs.org.uk", "gd-blog-dev.netlify.app", "gd-blog-staging.netlify.app"],
  },
  //crossOrigin: 'anonymous'

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      
      '/blog/4th-blog-post': { page: '/blog', query: { title: '4th-blog-post' } },
      '/blog/volunteer': { page: '/blog', query: { title: 'volunteer' } },
     
    }
  },



};
