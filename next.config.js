module.exports = {
  basePath: '/blog',
  images: {
    domains: ["images.ctfassets.net", "gd-blog.netlify.app", "www.guidedogs.org.uk", "gd-blog-dev.netlify.app", "gd-blog-staging.netlify.app"],
  },
  async rewrites() {
    return [
      {
        source: 'https://www.guidedogs.org.uk/:path*',
        destination: 'https://gd-blog.netlify.app/:path*',
      },
    ]
  },
};
