module.exports = {
  basePath: '/blog',
  //assetPrefix: '/blog',
  //assetPrefix: './',
  //trailingSlash: true,
  //exportTrailingSlash: true, //deprecated var
  
 // async redirects() {
 //   return [
      
 //       {
 //           source: '/',
 //           destination: '/blog',
 //           basePath: false,
 //           permanent: true
 //       }
 //   ]
 // },



  images: {
    domains: ["images.ctfassets.net", "gd-blog.netlify.app", "www.guidedogs.org.uk", "gd-blog-dev.netlify.app", "gd-blog-staging.netlify.app"],
  },
  //crossOrigin: 'anonymous'

  //exportPathMap: async function (
  //  defaultPathMap,
  //  { dev, dir, outDir, distDir, buildId }
  //) {
  //  return {
  //    '/': { page: '/' },
  //    
  //    '/4th-blog-post': { page: '/', query: { title: '4th-blog-post' } },
  //    '/volunteer': { page: '/', query: { title: 'volunteer' } },
  //   
  //  }
  //},



};
